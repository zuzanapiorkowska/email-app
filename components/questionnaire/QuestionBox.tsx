import { useState } from "react";
import {
  AnsweredQuestion,
  QuestionWithOptionToDisplay,
} from "../../interfaces/Survey";
import { BigButton } from "./BigButton";
import { Question } from "./Question";

export function QuestionBox() {
  const [questionsWithOptions, setQuestionsWithOptions] = useState<
    QuestionWithOptionToDisplay[]
  >([
    {
      survey: { id: "1abc", question: "ok?", options: ["1", "2", "pies"] },
      selected: "pies",
    },
  ]);
  const [response, setResponse] = useState<string>("");
  const [answeredQuestions, setAnsweredQuestions] = useState<
    AnsweredQuestion[]
  >([]);

  function updateSurvey(answeredQuestion: string, answer: string) {
    setAnsweredQuestions((prevState) =>
      prevState.filter((question) => question.questionId !== answeredQuestion)
    );
    setAnsweredQuestions((prevState) =>
      prevState.concat({ questionId: answeredQuestion, answer: answer })
    );

    setQuestionsWithOptions((prevState) => {
      return prevState.map((question) => {
        if (answeredQuestion !== question.survey.id) return question;
        return {
          survey: {
            id: question.survey.id,
            question: question.survey.question,
            options: question.survey.options,
          },
          selected: answer,
        };
      });
    });
    console.log(answeredQuestions);
  }

  function handleClick(): void {}

  return (
    <div className="question-box">
      {questionsWithOptions.map((surveyStep) => {
        return (
          <Question
            onClick={(answear) => updateSurvey(surveyStep.survey.id, answear)}
            text={surveyStep.survey.question}
            key={surveyStep.survey.id}
            options={surveyStep.survey.options}
            selected={surveyStep.selected}
          />
        );
      })}
      <BigButton onClick={() => handleClick()} />
      <p className="validation mt-5 bg-green-600">{response}</p>
    </div>
  );
}
