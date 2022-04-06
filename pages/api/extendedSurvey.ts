import { plainToClass } from "class-transformer";
import { transformAndValidate } from "class-transformer-validator";
import { NextApiRequest, NextApiResponse } from "next";
import { Request } from "../../dto/Request.dto";
import { Confirmation } from "../../interfaces/Survey";
import { objToString } from "../../utils/objToString";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Confirmation>
) {
  const data = req.body;

  const BigResponse = plainToClass(Request, data);
  BigResponse.answers = data.answers;
  BigResponse.email = data.email;

  try {
    const surveyObject = await transformAndValidate(Request, data);
    console.log(surveyObject);
    res
      .status(201)
      .send({ statusCode: 201, message: "survey saved successfully" });
  } catch (err: any) {
    console.log(err);
    res.status(400).json({
      statusCode: 400,
      message: objToString(err[0].constraints),
    });
  }
}
