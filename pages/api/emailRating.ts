// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IsEmail, IsNumberString, validate } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { IRating } from "../../interfaces/Rating";
import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";
import { validationQueryRationToNumber } from "./validationQueryRationToNumber";
import { Confirmation } from "../../interfaces/Survey";
import { objToString } from "../../utils/objToString";
import { Answer, Request } from "../../dto/Request.dto";
import url from "url";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Confirmation>
) {
  const answerObjectFromQuery: Answer[] = [
    {
      answer: req.query.questionId[0],
      choice: Number(req.query.rating[0]),
    },
  ];

  const ratingValidation = new Request();
  ratingValidation.email = decodeURIComponent(String(req.query.email));
  console.log(answerObjectFromQuery);
  ratingValidation.answers = answerObjectFromQuery;

  validate(ratingValidation).then((errors) => {
    // errors is an array of validation errors
    if (errors.length > 0) {
      console.log("validation failed. errors: ", errors);
      res.status(400).json({
        statusCode: 400,
        message: objToString(errors[0].constraints),
      });
    } else {
      console.log("validation succeed");
      res.redirect(
        303,
        url.format({
          protocol: "http",
          pathname: "/extended",
          query: {},
        })
      );
    }
  });
}
