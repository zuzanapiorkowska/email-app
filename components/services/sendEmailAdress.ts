import { EmailAnswer } from "../../interfaces/email";
import axios from "axios";


export class sendEmailAdress {
 async send(
    emailAdress: string
  ): Promise<EmailAnswer> {
    const url = "http://localhost:3000/email/";
    try {
      console.log("tried to send");
      const response = await axios.post(url, { email: emailAdress });
      const ConfirmationAnswer: EmailAnswer = response.data;
      return ConfirmationAnswer;
    } catch (err) {
      throw new Error(err.message + " Cannot connect to http://localhost:3000/email/");
    }
  }
}