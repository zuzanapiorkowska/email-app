import { Email, EmailAnswer } from "./email";

export interface QuestionWithAnswer {
  question: string;
  answear: number;
}

export interface QuestionsWithAnswers {
  questionsWithAnswers: QuestionWithAnswer[];
  email: Email;
}

interface Api {
  submit(questionsWithAnswears: QuestionsWithAnswers): Promise<EmailAnswer>;
  getQuestionnaire(id: string): Promise<IQuestionnaire>;
}

interface IQuestionnaire {
  id: string;
  questionsWithOptions: QuestionWithOptions[];
}

interface QuestionWithOptions {
  question: string;
  options: string[];
}
