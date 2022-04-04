import { EmailAnswer } from "../interfaces/email";

export class mockSendEmailAdress {
  async send(emailAdress: string): Promise<EmailAnswer> {
    const answer = {
      statusCode: 200,
      message: "Ankieta została wysłana na Twój adres e-mail. Dziękujemy! :)",
    };
    return answer;
  }
}
