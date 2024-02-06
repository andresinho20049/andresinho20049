# Portfolio
This is my portfolio repository, here I will share with you the technologies used and how to start a new repository using this one as an example.

## Requirements
This project was developed in NodeJs with the NextJs framework, so before starting, make sure you have the necessary requirements installed on your machine.
 - NodeJs -> [Click aqui](https://nodejs.org/en/download/current)

 ## Getting Started
 1. Start a new NextJs project using this repository as an example.
 ```bash
npx create-next-app --example https://github.com/andresinho20049/andresinho20049/tree/boilerplate my-portfolio
 ```

 2. Go to your project folder and started:
 ```bash
npm run dev
 ```

3. Open browser: [http://localhost:3000/](http://localhost:3000/)

## Nodemailer e Google Oauth
Google has disabled use by less secure Apps, it is not possible to create the email service using username and password.

To use the email sending service, follow the following steps:

### GCP Console
1. Go to [Google Developer Console](https://console.cloud.google.com/) and create a new project

2. Select your project and go to tab **API & Services**

3. Select a screen `Auth consent screen` dropdown
    - select `external` and click `create`
    - Fill in the information from your APP and click on `Save and continue`
    - In `scops`, click on `Save and continue`
    - In `Test users`, enter the email address you would like to use to send emails

4. Click on `credentials` in the side menu
    - select `Auth client ID` dropdown
    - select the type of your app
    - In `Authorised redirect URIs` add URI `developers.google.com/oauthplayground`
    - Copy and save your client ID and client secret

5. Now go to [https://developers.google.com/oauthplayground/](https://developers.google.com/oauthplayground/)
    - In the upper right side menu, click on the settings icon
        - Mark `Use your own OAuth credentials`
        - Complete your Client and Secret.
    - Now on the left side look for `Gmail API v1`
    - select `mail.google.com`
    - Click `Authorise APIs`
    - Select your account (which you've added as Test user in the Google developer console)
    - Now, click on `Exchange authorise code for tokens`
    - Copy and save your Refresh Token

6. Populate the information in the `.env` file, like this:
```properties
NEXT_APP_EMAIL=your_email

GCP_CLIENT_ID=your_client_id
GCP_CLIENT_SECRET=your_client_secret
GCP_REFRESH_TOKEN=your_refresh_token
```

> That's it, the googleOauth and mailSender services are already configured correctly, with the correct completion of the environment variables, you can now test the email sending functionality!

```ts
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
```

# Considerations
This is a boilerplate for creating a portfolio, but we do not encourage just copying it, it is interesting to use it as a base and study, however your portfolio must be exclusive and unique, bringing its particularities.

> **André Carlos** \
> Developer