// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IsEmail, validate } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailAnswer, EmailForm } from "../../interfaces/email";
import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailAnswer>
) {
  class Email {
    @IsEmail()
    email!: string;
  }

  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: String(process.env.SENDGRID_API_KEY),
    })
  );

  transport
    .sendMail({
      from: "13zolw13@gmail.com",
      to: "sesovi9004@royins.com",
      subject: "hello world",
      html: "<h1>Hello world!</h1>",
    })
    .then(([res]) => {
      console.log(
        "Message delivered with code %s %s",
        res.statusCode,
        res.statusMessage
      );
    })
    .catch((err) => {
      console.log("Errors occurred, failed to deliver message");

      if (err.response && err.response.body && err.response.body.errors) {
        err.response.body.errors.forEach(
          (error: { field: any; message: any }) =>
            console.log("%s: %s", error.field, error.message)
        );
      } else {
        console.log(err);
      }
    });

  const body: EmailForm = req.body;
  let emailValidation = new Email();
  emailValidation.email = body.email;

  validate(emailValidation).then((errors) => {
    // errors is an array of validation errors
    if (errors.length > 0) {
      console.log("validation failed. errors: ", errors);
      res.status(200).json({ statusCode: 400, message: "Email is incorrect" });
    } else {
      console.log("validation succeed");
      res.status(200).json({ statusCode: 200, message: body.email });
    }
  });
}
