// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IsEmail, IsNumberString, validate } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { IRating } from "../../interfaces/Rating";
import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";
import { validationQueryRationToNumber } from "./validationQueryRationToNumber";
import { Confirmation } from "../../interfaces/Survey";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Confirmation>
) {


  class Rating implements IRating {
    @IsEmail()
    email!: string;

    @IsNumberString()
    rating!: string;
  }



  let ratingValidation = new Rating();
  ratingValidation.email = req.body.email;
  ratingValidation.rating = req.body.rating;

  function objToString(obj: any) {
    return Object.entries(obj).reduce((str, [p, val]) => {
      return `${val}`;
    }, "");
  }



  validate(ratingValidation).then((errors) => {
    // errors is an array of validation errors
    if (errors.length > 0 || !validationQueryRationToNumber(ratingValidation.rating)) {
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
