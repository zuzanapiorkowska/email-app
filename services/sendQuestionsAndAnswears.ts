import axios from "axios";
import { EmailAnswer } from "../interfaces/email";
import { QuestionWithAnswer } from "../interfaces/QuestionWithAnswear";

export class sendQuestionsAndAnswears {
    async send(
       questionsWithAnswears: QuestionWithAnswer[]
     ): Promise<EmailAnswer> {
       const url = "http://localhost:3000/api/email/";
       try {
         console.log("tried to send q&a");
         const response = await axios.post(url, { questionsWithAnswears });
         const ConfirmationAnswer: EmailAnswer = response.data;
         return ConfirmationAnswer;
       } catch (err: any) {
         throw new Error(err.message + " Cannot connect to http://localhost:3000/api/email/");
       }
     }
   }