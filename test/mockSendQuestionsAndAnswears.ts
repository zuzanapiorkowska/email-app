import axios from "axios";
import { EmailAnswer } from "../interfaces/email";
import { QuestionWithAnswer } from "../interfaces/QuestionWithAnswear";

export class mockSendQuestionsAndAnswears {
    send(
       questionsWithAnswears: QuestionWithAnswer[]
     ): EmailAnswer {

       const response = {
           statusCode: 200,
           message: "Twoje odpowiedzi zostały wysłane! :)"
       }
       return response;
     }
   }