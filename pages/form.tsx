//użyć react hook form i formularz z polami zapisać za jego pomocą
//jak się definiuje pola, które są arrayami?
//z walidacji mamy react hook form class validator github

import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const QAndA = [{
    question: "pytanie pierwsze",
    id: "pies",
    answers: [1, 2, 3, 4, 5]
  },
  {
    question: "pytanie drugie",
    id: "kot",
    answers: [1, 2, 3, 4, 5]
  }]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {QAndA.map(qa => {
        return <>
        <p>{qa.question}</p>
        {qa.answers.map(answer=> {
          return <input {...register(qa.id, {required: true})} type="radio" value={answer} />
        })}
        </>
      })}

      <input type="submit" />
    </form>
  );
}