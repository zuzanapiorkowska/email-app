// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IsEmail, IsNumberString, validate } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailAnswer, EmailForm, Rating } from "../../interfaces/email";
import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailAnswer>
) {

  interface Questioner {
    QuestionaryName: string;
    Rating: string;
  }
  // class Rating  {
  //   @IsEmail()
  //   email!: string;

  //   listOfQuestioners!: Questioner[];
  // }
  interface Rating {
    email: string;
    listOfQuestioners: Questioner[];
  }

  let data = req.query as Rating;
  let ratingValidation = new Rating();
  ratingValidation.email = body.email;
  ratingValidation.listOfQuestioners = JSON.parse(body.listOfQuestioners);;

  function objToString(obj: any) {
    return Object.entries(obj).reduce((str, [p, val]) => {
      return `${val}`;
    }, "");
  }

  function valitdationQueryRationToNumber(queryRating: string) {
    let rating = parseInt(queryRating);;
    if (rating > 5 || rating < 1) {
      return false;
    }

  }

  validate(ratingValidation).then((errors) => {
    // errors is an array of validation errors
    if (errors.length > 0 || !valitdationQueryRationToNumber(body.rating)) {
      console.log("validation failed. errors: ", errors);
      console.log(errors[0].constraints);
      res.status(400).json({
        statusCode: 400,
        message: objToString(errors[0].constraints),
      });
    } else {
      console.log("validation succeed");
      res
        .status(200)
        .json({ statusCode: 200, message: "Thank you for your feedback!" });
    }
  });
}
