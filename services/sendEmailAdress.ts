
import axios from "axios";
import { Confirmation } from "../interfaces/Survey";


export class sendEmailAdress {
 async send(
    emailAdress: string
  ): Promise<Confirmation> {
    const url = "http://localhost:3000/api/email/";
    try {
      console.log("tried to send");
      const response = await axios.post(url, { email: emailAdress });
      const ConfirmationAnswer: Confirmation = response.data;
      return ConfirmationAnswer;
    } catch (err: any) {
      throw new Error(err.message + " Cannot connect to http://localhost:3000/api/email/");
    }
  }
}