//użyć react hook form i formularz z polami zapisać za jego pomocą
//jak się definiuje pola, które są arrayami?
//z walidacji mamy react hook form class validator github

import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register} type="radio" value="1" />
      <input {...register} type="radio" value="2" />
      <input {...register} type="radio" value="3" />
      <input {...register} type="radio" value="4" />
      <input {...register} type="radio" value="5" />

      <input type="submit" />
    </form>
  );
}