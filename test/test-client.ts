import { createServer, RequestListener } from "http";
import { NextApiHandler } from "next";
import request from "supertest";

export const testClient = (handler: NextApiHandler) => {
  const listener: RequestListener = (req, res) => {
    // return apiResolver(
    //   req,
    //   res,
    //   undefined,
    //   handler,
    //   {
    //     previewModeEncryptionKey: "",
    //     previewModeId: "",
    //     previewModeSigningKey: "",
    //   },
    //   false
    // );
  };

  return request(createServer(listener));
};
