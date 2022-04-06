import axios from "axios";
import { AnsweredQuestion, Confirmation } from "../interfaces/Survey";

export class SendRequest {
  async sendEmail(emailAdress: string): Promise<Confirmation> {
    const url = "/api/email";
    try {
      console.log("tried to send");
      const response = await axios.post(url, { email: emailAdress });
      const ConfirmationAnswer: Confirmation = response.data;
      return ConfirmationAnswer;
    } catch (err: unknown) {
      throw new Error(
        err.message + " Cannot connect to http://localhost:3000/api/email/"
      );
    }
  }

  async sendAnsweredSurvey(
    questionsWithAnswers: AnsweredQuestion[]
  ): Promise<Confirmation> {
    const url = "/api/email";
    try {
      console.log("tried to send q&a");
      const response = await axios.post(url, {
        questionsWithAnswears: questionsWithAnswers,
      });
      const ConfirmationAnswer: Confirmation = response.data;
      return ConfirmationAnswer;
    } catch (err: any) {
      throw new Error(
        err.message + " Cannot connect to http://localhost:3000/api/email/"
      );
    }
  }
}
