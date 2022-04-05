import { Email } from "./email";

export interface QuestionWithAnswer {
    question: string;
    answear: number;
  }

  export interface QuestionsWithAnswers {
    questionsWithAnswears
    : QuestionWithAnswer[];
    email: Email;
  }