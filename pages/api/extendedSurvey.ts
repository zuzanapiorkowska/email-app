import { plainToClass } from "class-transformer";
import { transformAndValidate } from "class-transformer-validator";
import { validate } from "class-validator";
import { NextApiRequest, NextApiResponse } from "next";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { Request } from "../../dto/Request.dto";
import { objToString } from "../../utils/objToString";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;

  const BigResponse = plainToClass(Request, data);
  // const BigResponse = new Request();
  BigResponse.answers = data.answers;
  BigResponse.email = data.email;
  console.log(BigResponse);

  try {
    // transform and validate request body - array of User objects
    const userObjects = await transformAndValidate(Request, data);
    console.log(userObjects);
    console.log("validation succeed", BigResponse);
    res.status(201).send({ message: BigResponse });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      statusCode: 400,
      message: objToString(err),
    });
  }
}
