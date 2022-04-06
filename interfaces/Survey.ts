export interface Confirmation {
  statusCode: number;
  message: string;
}

export interface FirstQuestionAnswer {
  user: string;
  rating: string;
}

export interface Survey {
  id: string;
  questionsWithOptions: QuestionWithOptions[];
}

export interface AnsweredQuestion {
  questionId: string;
  answer: string;
}

export interface CompletedSurvey {
  questionnaireId: number;
  questionsWithAnswers: AnsweredQuestion[];
  email: string;
}

export interface Api {
  submit(completedSurvey: CompletedSurvey): Promise<Confirmation>;
  getQuestionnaire(id: number): Promise<Survey>;
}

export interface QuestionWithOptions {
  id: string;
  question: string;
  options: string[];
}

export interface QuestionWithOptionToDisplay{
  survey: QuestionWithOptions;
  selected: string;
}