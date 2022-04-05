import axios from "axios";
import { AnsweredQuestion, Confirmation } from "../interfaces/Survey";

export class sendQuestionsAndAnswears {
    async send(
       questionsWithAnswears: AnsweredQuestion[]
     ): Promise<Confirmation> {
       const url = "http://localhost:3000/api/email/";
       try {
         console.log("tried to send q&a");
         const response = await axios.post(url, { questionsWithAnswears });
         const ConfirmationAnswer: Confirmation = response.data;
         return ConfirmationAnswer;
       } catch (err: any) {
         throw new Error(err.message + " Cannot connect to http://localhost:3000/api/email/");
       }
     }
   }