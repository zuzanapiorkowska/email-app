import { validate } from "class-validator";
import { NextApiRequest, NextApiResponse } from "next";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { Request } from "../../dto/Request.dto";
import { objToString } from "../../utils/objToString";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,

) {
    const data = req.body;


    const BigResponse = new Request();
    BigResponse.answers = data.answers;
    BigResponse.email = data.email;

    validate(BigResponse).then(async (errors) => {
        if (errors.length > 0) {
            console.log("validation failed. errors: ", errors);
            res.status(400).json({
                statusCode: 400,
                message: objToString(errors[0].constraints),
            });
        } else {
            console.log("validation succeed", BigResponse);
            res.status(201).send({ message: "Thank you for sending data" });
        }
    }
    )
}
