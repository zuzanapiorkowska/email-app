import { validate } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { Confirmation } from "../../interfaces/Survey";
import { objToString } from "../../utils/objToString";
import { Answer, Request } from "../../dto/Request.dto";
import url from "url";
import { plainToClass } from "class-transformer";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Confirmation>
) {
  const ratingValidation = plainToClass(Request, {
    email: decodeURIComponent(String(req.query.email)),
    answers: [
      {
        answer: String(req.query.questionId),
        choice: Number(req.query.rating),
      },
    ],
  });

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
          query: {
            email: ratingValidation.email,
            answer: ratingValidation.answers[0].answer,
            choice: ratingValidation.answers[0].choice,
            surveyId: "qwertyuiop",
          },
        })
      );
    }
  });
}
