import axios from "axios";
import { Answer } from "./Answer";
import { QuestionsWithAnswers, QuestionWithAnswer, IQuestionnaire, Api,  } from "./QuestionWithAnswear";

export class Request implements Api {
    constructor(
      private questionnaireId: number,
      private questionsWithAnswers: QuestionWithAnswer[],
      private email: string
    ) {}
    async submit(
      questionsWithAnswears: QuestionsWithAnswers
    ): Promise<Answer> {
      const url = "http://localhost:3000/???";
      const dataToSend = {
        questionnaireId: this.questionnaireId,
        questionsWithAnswears: this.questionsWithAnswers,
        email: this.email,
      };
      try {
        const response = await axios.post(url, {
          questionsWithAnswears: { dataToSend },
        });
        const ConfirmationResponse: Answer = response.data;
        return ConfirmationResponse;
      } catch (err: any) {
        throw new Error(
          err.message + " Cannot connect to http://localhost:3000/???"
        );
      }
    }
    async getQuestionnaire(): Promise<IQuestionnaire> {
      const url = "http://localhost:3000/???";
      const questionnaireId = this.questionnaireId;
      try {
        const response = await axios.post(url, { id: questionnaireId});
        const Response: IQuestionnaire = response.data;
        return Response;
      } catch (err: any) {
        throw new Error(
          err.message + " Cannot connect to http://localhost:3000/???"
        );
      }
    }

    validate(): void {
        if (!isEmailValid(this.email)) throw new Error("Invalid e-mail");
        return;
    }
  }
  
  function isEmailValid(email: string) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
