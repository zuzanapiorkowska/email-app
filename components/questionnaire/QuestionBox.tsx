import { useState } from "react";
import { QuestionProperties } from "../../interfaces/Question";
import { QuestionWithAnswear } from "../../interfaces/QuestionWithAnswear";
import { Question } from "./Question";

export function QuestionBox() {

  const [questions, setQuestions] = useState<QuestionProperties[]>([
    {
      question:
        "Jak podobał Ci się nasz staż? (ostatnia szansa na zmianę zdania! :D)",
      hint: "(1 - w ogóle, 2 - niezbyt, 3 - średnio, 4 - był ok, 5 - bardzo)",
      key: Math.random(),
      selected: 0,
      answears: [
        { rating: 1, key: Math.random()},
        { rating: 2, key: Math.random()},
        { rating: 3, key: Math.random()},
        { rating: 4, key: Math.random()},
        { rating: 5, key: Math.random()}
      ],
    },
    {
      question: "Jak dobrze był Twoim zdaniem przygotowany prowadzący?",
      hint: "(1 - fatalnie, 2 - kiepsko, 3 - średnio, 4 - był ok, 5 - świetnie",
      key: Math.random(),
      selected: 0,
      answears: [
        { rating: 1, key: Math.random()},
        { rating: 2, key: Math.random()},
        { rating: 3, key: Math.random()},
        { rating: 4, key: Math.random()},
        { rating: 5, key: Math.random()},
      ],
    },
    {
      question: "Czy uważasz, że zdobyta wiedza przyda Ci się w życiu?",
      hint: "(1 - w ogóle mi się nie przyda, 2 - raczej nie, 3 - może, 4 - myślę, że tak, 5 - na pewno!",
      key: Math.random(),
      selected: 0,
      answears: [
        { rating: 1, key: Math.random()},
        { rating: 2, key: Math.random()},
        { rating: 3, key: Math.random()},
        { rating: 4, key: Math.random()},
        { rating: 5, key: Math.random()}
      ],
    },
  ]);

  const [questionsWithAnswears, setQuestionsWithAnswers] = useState<
    QuestionWithAnswear[]
  >([]);

  function handleClick(question: string, answear: number) {
    setQuestionsWithAnswers((prevState) =>
      prevState.filter((q) => q.question !== question)
    );
    setQuestionsWithAnswers((prevState) =>
      prevState.concat({ question: question, answear: answear })
    );

    setQuestions((prevState) => {
      return prevState.map((q) => {
        if (q.question !== question) return q;
        return {question: q.question, hint: q.hint, key: q.key, selected: answear, answears: q.answears}
        })
  })
}
  return (
    <div className="question-box">
      {questions.map((q) => {
        return (
          <Question
            onClick={(answear) => handleClick(q.question, answear)}
            text={q.question}
            hint={q.hint}
            key={q.key}
            answears={q.answears}
            selected={q.selected}
          />
        );
      })}
    </div>
  );
}
