import { Email, EmailAnswer } from "./email";

export interface QuestionWithAnswer {
  questionId: number;
  answer: number;
}

export interface QuestionsWithAnswers {
  questionnaireId: number;
  questionsWithAnswers: QuestionWithAnswer[];
  email: Email;
}

interface Api {
  submit(questionsWithAnswears: QuestionsWithAnswers): Promise<EmailAnswer>;
  getQuestionnaire(id: number): Promise<IQuestionnaire>;
}

interface IQuestionnaire {
  id: string;
  questionsWithOptions: QuestionWithOptions[];
}

interface QuestionWithOptions {
  question: string;
  options: string[];
}

interface Question {
  question: string;
  id: number;
}