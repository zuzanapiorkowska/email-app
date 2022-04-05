import { IsEmail, validate, ValidationError } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailAnswer, EmailForm } from "../../interfaces/email";
import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";
import { htmlOutput } from "../../email";
import Joi from "joi";
import { envConfig } from "../../config/envConfig";
import { exit } from "process";
import { objToString } from "../../utils/objToString";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailAnswer>
) {
  class EmailValidation {
    @IsEmail()
    email!: string;
  }

  // enum EmailProvider {

  // }

  // class Email {
  //   email: string;
  //   constructor(email: string){
  //     this.email = email;
  //   }

  //   createTransport(provider: string)
  // }

  const transport = nodemailer.createTransport(
    // nodemailerSendgrid({
    //   apiKey: String(process.env.SENDGRID_API_KEY),
    // })
    {
      host: "localhost",
      port: 1025,
      secure: false,
      auth: {
        user: "username",
        pass: "password",
      },
    }
  );

  const body: EmailForm = req.body;

  let emailValidation = new EmailValidation();
  emailValidation.email = body.email;

  validate(emailValidation).then(async (errors) => {
    // errors is an array of validation errors
    if (errors.length > 0) {
      console.log("validation failed. errors: ", errors);
      res
        .status(400)
        .json({ statusCode: 400, message: objToString(errors[0].constraints) });
    } else {
      console.log("validation succeed");
      try {
        const response = await transport.sendMail({
          from: envConfig.senderEmail,
          to: emailValidation.email,
          subject: "Newsletter",
          html: htmlOutput.html,
        });

        res.status(200).json({
          statusCode: 200,
          message: response.response,
        });
      } catch (error) {
        console.log("Errors occurred, failed to deliver message", error);
        res.status(500).json({ statusCode: 500, message: objToString(error) });
      }
    }
  });
}
