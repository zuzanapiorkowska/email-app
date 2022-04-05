import { Email } from "./email";

export interface QuestionWithAnswear {
    question: string;
    answear: number;
  }

  export interface QuestionsWithAnswears {
    questionsWithAnswears
    : QuestionWithAnswear[];
    email: Email;
  }