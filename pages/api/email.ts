import { Email } from "./../../interfaces/Email.class";
import { contains, IsEmail, validate } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { envConfig } from "../../config/envConfig";
import { objToString } from "../../utils/objToString";
import { htmlOutput } from "../../email";
import { Confirmation } from "../../interfaces/Survey";

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

  validate(emailValidation).then(async (errors) => {
    if (errors.length > 0) {
      res
        .status(400)
        .json({ statusCode: 400, message: objToString(errors[0].constraints) });
    } else {
      const { statusCode, message } = await new Email()
        .createTransport(envConfig.emailProvider)
        .setEmailAddress(emailValidation.email)
        .createEmailMessage("Newsletter", htmlOutput.html)
        .sendEmailMessage();
      res.status(statusCode).json({ statusCode, message });
    }
  });
}
