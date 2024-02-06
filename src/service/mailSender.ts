"use server";

import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/smtp-pool";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { getGoogleAccessToken } from "./googleOauth";

const createTransport = async () => {
  const accessToken = await getGoogleAccessToken();

  const transporterOpt: SMTPTransport.Options = {
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.NEXT_APP_EMAIL,
      accessToken: accessToken,
      clientId: process.env.GCP_CLIENT_ID,
      clientSecret: process.env.GCP_CLIENT_SECRET,
      refreshToken: process.env.GCP_REFRESH_TOKEN,
    },
  };
  const transporter = nodemailer.createTransport(transporterOpt);
  return transporter;
};

export interface ISendMailProps {
  name: string;
  email: string;
  subject: string;
  msg: string;
}

export const sendMailContact = async (props: ISendMailProps) => {

  const MailOpt: MailOptions = {
    to: [
      {
        name: props.name,
        address: props.email,
      },
    ],
    subject: props.subject,
    text: props.msg,
  };

  const transporter = await createTransport();
  return await transporter.sendMail(MailOpt);
};