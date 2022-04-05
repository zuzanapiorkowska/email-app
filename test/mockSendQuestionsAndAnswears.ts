import axios from "axios";
import { EmailAnswer } from "../interfaces/email";
import { QuestionWithAnswear } from "../interfaces/QuestionWithAnswear";

export class mockSendQuestionsAndAnswears {
    send(
       questionsWithAnswears: QuestionWithAnswear[]
     ): EmailAnswer {

       const response = {
           statusCode: 200,
           message: "Twoje odpowiedzi zostały wysłane! :)"
       }
       return response;
     }
   }