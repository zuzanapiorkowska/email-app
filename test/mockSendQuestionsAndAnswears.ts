import axios from "axios";

import { AnsweredQuestion, Confirmation } from "../interfaces/Survey";

export class mockSendQuestionsAndAnswears {
    send(
       questionsWithAnswears: AnsweredQuestion[]
     ): Confirmation {

       const response = {
           statusCode: 200,
           message: "Twoje odpowiedzi zostały wysłane! :)"
       }
       return response;
     }
   }