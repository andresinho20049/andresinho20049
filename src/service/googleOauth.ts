"use server";

import * as google from "googleapis";   
const OAuth2 = google.Auth.OAuth2Client;

export const getGoogleAccessToken = async () => {
  const oauth2Client = new OAuth2(
    process.env.GCP_CLIENT_ID,
    process.env.GCP_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GCP_REFRESH_TOKEN,
    scope: "https://mail.google.com/",
  });

//   const accessToken = (await oauth2Client.getAccessToken()).token;

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.error("*ERR: ", err);
          reject(err);
        }
        resolve(token);
      });
    });

    if (typeof accessToken === 'string') {
        return accessToken
    } else {
        throw new Error("Google getAcessToken failed!");
    }
};
