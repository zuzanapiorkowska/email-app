import { Confirmation } from "../interfaces/Survey";


export class mockSendEmailAdress {
  async send(emailAdress: string): Promise<Confirmation> {
    const answer = {
      statusCode: 200,
      message: "Ankieta została wysłana na Twój adres e-mail. Dziękujemy! :)",
    };
    return answer;
  }
}
