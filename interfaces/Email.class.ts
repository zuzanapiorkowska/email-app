import nodemailerSendgrid from "nodemailer-sendgrid";
import nodemailer from "nodemailer";
import { envConfig } from "../config/envConfig";
import { htmlEmail } from "../email";
import { objToString } from "../utils/objToString";
import EmailProviders from "./EmailProviders";
import { NextApiResponse } from "next";
import { Confirmation } from "./Survey";

export class Email {
  email!: string;
  transport!: any;
  emailDetails!: {
    from: string;
    to: string;
    subject: string;
    html: string;
  };

  setEmailAddress(email: string) {
    this.email = email;
    return this;
  }

  getEmailAddress() {
    return this.email;
  }

  createTransport(provider: EmailProviders | string) {
    let transportConfig: any;

    if ((provider = EmailProviders.mailDev)) {
      transportConfig = {
        host: "localhost",
        port: 1025,
        secure: false,
        auth: {
          user: "username",
          pass: "password",
        },
      };
    } else if (provider == EmailProviders.sendGrind) {
      transportConfig = nodemailerSendgrid({
        apiKey: String(process.env.SENDGRID_API_KEY),
      });
    }

    this.transport = nodemailer.createTransport(transportConfig);
    return this;
  }

  getTransport() {
    return this.transport;
  }

  createEmailMessage(subject: string, html: string) {
    this.emailDetails = {
      from: envConfig.senderEmail,
      to: this.email,
      subject,
      html,
    };
    return this;
  }

  async sendEmailMessage(): Promise<Confirmation> {
    try {
      const response = await this.transport.sendMail(this.emailDetails);
      return {
        statusCode: 200,
        message: response.response,
      };
    } catch (error) {
      console.log("Errors occurred, failed to deliver message", error);
      return {
        statusCode: 500,
        message: objToString(error),
      };
    }
  }
}
