import { Button } from "./Button";
import { Input } from "./Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { EmailAnswer } from "../interfaces/email";
import { sendEmailAdress } from "../services/sendEmailAdress";
import { Answer } from "./Box";

export function Form() {
  const [response, setResponse] = useState<string>("");
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Niepoprawny adres e-mail")
      .required("Wpisz swój e-mail!"),
  });

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: { email: "" },
    validationSchema: SignupSchema,
    onSubmit: (values: { email: string }): void => {
      console.log("Oto email", values.email);
      new sendEmailAdress()
        .send(values.email)
        .then((res: EmailAnswer) => {
          console.log("Response message: ", res.message);
          setResponse("Ankieta wysłana. Sprawdż swojego maila! :)");
        })
        .catch((err) => {
          console.log("Oto jest error: ", err.message);
          setResponse("Wystąpił błąd :( Spróbuj ponownie!");
        });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className={"flex flex-col justify-center text-center"}>
        <div className={"flex flex-row justify-center mt-10"}>
          <Input name="email" value={values.email} onChange={handleChange} />
          <Button />
        </div>
        {errors.email ? <div>{errors.email}</div> : null}
        <Answer text={response} />
      </div>
    </form>
  );
}
