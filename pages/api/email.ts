import { Email } from "./../../interfaces/Email.class";
import { IsEmail, validate } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailAnswer, EmailForm } from "../../interfaces/email";
import { envConfig } from "../../config/envConfig";
import { objToString } from "../../utils/objToString";
import { htmlOutput } from "../../email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailAnswer>
) {
  class EmailValidation {
    @IsEmail()
    email!: string;
  }

  const body: EmailForm = req.body;

  let emailValidation = new EmailValidation();
  emailValidation.email = body.email;

  validate(emailValidation).then(async (errors) => {
    if (errors.length > 0) {
      res
        .status(400)
        .json({ statusCode: 400, message: objToString(errors[0].constraints) });
    } else {
      await new Email()
        .createTransport(envConfig.emailProvider)
        .setEmailAddress(emailValidation.email)
        .createEmailMessage("Newsletter", htmlOutput.html)
        .setRes(res)
        .sendEmailMessage();
    }
  });
}
