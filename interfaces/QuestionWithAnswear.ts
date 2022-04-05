
import { Email, EmailAnswer } from "./email";
import { IsString, IsEmail, IsObject, IsNumber, ValidateNested } from "class-validator";
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

export class RequestQuestionnaire implements QuestionsWithAnswers {

  constructor(questionsWithAnswers: QuestionsWithAnswers) {
    this.questionnaireId = questionsWithAnswers.questionnaireId;
    this.questionsWithAnswers = questionsWithAnswers.questionsWithAnswers;
    this.email = questionsWithAnswers.email;
  }

  @IsNumber()
  questionnaireId: number;
  @ValidateNested()
  questionsWithAnswers: QuestionWithAnswer[];
  @ValidateNested()
  email: Email;

}

