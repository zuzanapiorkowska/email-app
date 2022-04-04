import { EmailAnswer } from "../../interfaces/email";
import axios from "axios";

export async function sendEmailAdress(
    emailAdress: string
  ): Promise<EmailAnswer> {
    const url = "http://localhost:3000/email/";
    try {
      console.log("tried to send");
      const response = await axios.post(url, { email: emailAdress });
      const ConfirmationAnswer: EmailAnswer = response.data;
      return ConfirmationAnswer;
    } catch {
      throw new Error("Cannot connect to http://localhost:3000/email/");
    }
  }