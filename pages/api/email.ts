import { Email } from "./../../interfaces/Email.class";
import { IsEmail, validate } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { envConfig } from "../../config/envConfig";
import { objToString } from "../../utils/objToString";
import { Confirmation } from "../../interfaces/Survey";
import mjml2html from "mjml";
import { htmlEmail } from "../../email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Confirmation>
) {
  class EmailValidation {
    @IsEmail()
    email!: string;
  }

  const body = req.body;

  let emailValidation = new EmailValidation();
  emailValidation.email = body.email;

  await validate(emailValidation).then(async (errors) => {
    if (errors.length > 0) {
      res
        .status(400)
        .json({ statusCode: 400, message: objToString(errors[0].constraints) });
    } else {
      const html = htmlEmail(encodeURIComponent(emailValidation.email));
      const htmlOutput = mjml2html(html);
      const { statusCode, message } = await new Email()
        .createTransport(envConfig.emailProvider)
        .setEmailAddress(emailValidation.email)
        .createEmailMessage("Newsletter", htmlOutput.html)
        .sendEmailMessage();
      console.log(statusCode, message);
      res.status(statusCode).send({ statusCode, message });
    }
  });
}

// interface Endpoints {
//   registerForSurvey(data: { email: string }): Promise<{}>;
//   submitSurvey(data: { email: string; answer: Answer }): Promise<{}>;
//   submitBigSurvey(data: { email: string; answers: Answer[] }): Promise<{}>;
// }
