import { useState } from "react";
import { QuestionProperties } from "../../interfaces/Question";
import { QuestionWithAnswear } from "../../interfaces/QuestionWithAnswear";
import { BigButton } from "./BigButton";
import { Question } from "./Question";

export function QuestionBox() {
  const answears = [1, 2, 3, 4, 5];

  const [questions, setQuestions] = useState<QuestionProperties[]>([
    {
      question:
        "Jak podobał Ci się nasz staż? (ostatnia szansa na zmianę zdania! :D)",
      hint: "(1 - w ogóle, 2 - niezbyt, 3 - średnio, 4 - był ok, 5 - bardzo)",
      key: Math.random(),
      selected: 0,
    },
    {
      question: "Jak dobrze był Twoim zdaniem przygotowany prowadzący?",
      hint: "(1 - fatalnie, 2 - kiepsko, 3 - średnio, 4 - był ok, 5 - świetnie)",
      key: Math.random(),
      selected: 0,
    },
    {
      question: "Czy uważasz, że zdobyta wiedza przyda Ci się w życiu?",
      hint: "(1 - w ogóle mi się nie przyda, 2 - raczej nie, 3 - może, 4 - myślę, że tak, 5 - na pewno!)",
      key: Math.random(),
      selected: 0,
    },
  ]);
  const [response, setResponse] = useState<string>("")
  const [questionsWithAnswears, setQuestionsWithAnswers] = useState<
    QuestionWithAnswear[]
  >([]);

  function updateQA(question: string, answear: number) {
    setQuestionsWithAnswers((prevState) =>
      prevState.filter((q) => q.question !== question)
    );
    setQuestionsWithAnswers((prevState) =>
      prevState.concat({ question: question, answear: answear })
    );

    setQuestions((prevState) => {
      return prevState.map((q) => {
        if (q.question !== question) return q;
        return {
          question: q.question,
          hint: q.hint,
          key: q.key,
          selected: answear,
        };
      });
    });
    console.log(questionsWithAnswears);
  }

  function handleClick():void {
    
    // new sendQuestionsAndAnswears()
    // .send(questionsWithAnswears)
    //     .then((res: EmailAnswear) => {
    //       console.log("Response message: ", res.message);
    //       setResponse("Twoje odpowiedzi zostały wysłane. Dziękujemy!");
    //     })
    //     .catch((err) => {
    //       console.log("Oto jest error: ", err.message);
    //       setResponse("Wystąpił błąd :( Spróbuj ponownie!");
    //     });
    // console.log("clicked");
    // const data = new mockSendQuestionsAndAnswears().send(questionsWithAnswears);
    // console.log(data.message);
    // setResponse(data.message);
  }

  return (
    <div className="question-box">
      {questions.map((q) => {
        return (
          <Question
            onClick={(answear) => updateQA(q.question, answear)}
            text={q.question}
            hint={q.hint}
            key={q.key}
            answears={answears}
            selected={q.selected}
          />
        );
      })}
      <BigButton onClick={()=>handleClick()} />
      <p className={"validation mt-5 bg-green-600"}>{response}</p>
    </div>
  );
}