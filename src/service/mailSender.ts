import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/smtp-pool";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporterOpt: SMTPTransport.Options = {
  host: process.env.NEXT_APP_SMTP_HOST,
  port: parseInt(process.env.NEXT_APP_SMTP_PORT || "587"),
  secure: true,
  auth: {
    user: process.env.NEXT_APP_EMAIL,
    pass: process.env.NEXT_APP_PASSWORD
  },
};

const transporter = nodemailer.createTransport(transporterOpt);

export interface ISendMailProps {
    name: string;
    email: string;
    subject: string;
    msg: string;
}

export const sendMailContact = async ({
    name,
    email,
    subject,
    msg
}:ISendMailProps) => {


    const htmlMsg = `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact</title>


        <style>
            .flex-container {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
                font-family: monospace;
                max-width: 1024px;
            }

            .flex-container h1 {
                font-weight: bold;
            }

            .flex-container h3 {
                font-weight: 800;
            }

            .flex-container img {
                max-width: 640px;
            }

            .block-mail {
                border: 2px solid #222;
                padding: 5px 20px;
                width: auto;
            }

            .block-mail h3 {
                text-align: center;
            }

            .signature {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: .0rem;
                margin-top: 2rem;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }

            .signature h1, .signature h3, .signature p {
                margin: 0px;
            }

            .signature-link {
                border-top: 1px solid #222;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: .5rem;
                padding: .5rem;
                margin-top: .5rem;
            }


        </style>

    </head>

    <body>

        <section class="flex-container">

            <img src="cid:Logo_extended" alt="Logo Andresinho20049">
            <h1>Portfolio - E-Mail</h1>
            <h3>This is an automatic email, please do not reply</h3>

            <p>We received a message from your Portfolio's contact page. Here is the message and the sender's contact
                information.</p>

            <div class="block-mail">
                <h3>Contact info</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Msg:</strong> ${msg}</p>
            </div>

            <p>Thank you for contacting us. We will get back to you as soon as possible.</p>

        </section>

        <div class="signature">
            <h1>André Carlos</h1>
            <h3>Developer</h3>
            <div class="signature-link">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"
                    viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M160 459 c-56 -25 -86 -53 -111 -101 -21 -41 -23 -48 -11 -48 5 0 16
                        15 25 34 15 33 17 34 47 23 25 -9 30 -17 27 -34 -3 -15 1 -23 9 -23 8 0 14 10
                        14 21 0 17 4 20 23 15 12 -3 30 -6 40 -6 9 0 17 -7 17 -15 0 -8 5 -15 10 -15
                        6 0 10 7 10 15 0 8 8 15 18 15 9 0 27 3 40 6 18 5 22 2 22 -15 0 -11 6 -21 14
                        -21 8 0 12 8 9 23 -3 17 2 25 27 34 30 11 32 10 47 -23 9 -19 20 -34 25 -34
                        12 0 10 7 -11 48 -53 104 -184 149 -291 101z m80 -49 c0 -45 -2 -50 -22 -50
                        -13 0 -29 4 -37 9 -21 13 21 79 57 90 1 1 2 -21 2 -49z m71 3 c24 -38 16 -53
                        -28 -53 -21 0 -23 5 -23 50 0 58 16 59 51 3z m-142 2 c-21 -35 -34 -41 -57
                        -27 -13 9 3 28 43 50 33 18 35 14 14 -23z m174 24 c41 -21 59 -42 45 -51 -23
                        -14 -36 -8 -57 27 -22 38 -21 41 12 24z" />
                        <path d="M34 274 c3 -9 9 -27 12 -40 8 -31 32 -31 40 1 3 14 10 25 14 25 4 0
                        11 -11 14 -25 10 -38 32 -30 44 15 6 26 6 40 0 40 -5 0 -12 -9 -15 -20 -3 -11
                        -9 -20 -13 -20 -4 0 -10 9 -13 20 -3 11 -10 20 -17 20 -7 0 -14 -9 -17 -20 -3
                        -11 -9 -20 -13 -20 -4 0 -10 9 -13 20 -3 11 -11 20 -17 20 -7 0 -10 -7 -6 -16z" />
                        <path d="M184 274 c3 -9 9 -27 12 -40 8 -31 32 -31 40 1 3 14 10 25 14 25 4 0
                        11 -11 14 -25 10 -38 32 -30 44 16 7 29 7 39 -1 36 -6 -2 -14 -14 -18 -28 l-6
                        -24 -11 28 c-13 32 -32 35 -39 7 -3 -11 -9 -20 -13 -20 -4 0 -10 9 -13 20 -3
                        11 -11 20 -17 20 -7 0 -10 -7 -6 -16z" />
                        <path d="M334 274 c3 -9 9 -27 12 -40 8 -31 32 -31 40 1 3 14 10 25 14 25 4 0
                        11 -11 14 -25 8 -32 32 -32 40 -1 3 13 9 32 13 41 4 13 2 16 -8 13 -7 -2 -16
                        -15 -20 -29 l-6 -24 -11 28 c-13 32 -32 35 -39 7 -3 -11 -9 -20 -13 -20 -4 0
                        -10 9 -13 20 -3 11 -11 20 -17 20 -7 0 -10 -7 -6 -16z" />
                        <path d="M30 185 c0 -15 41 -83 62 -102 109 -102 292 -71 359 59 21 41 23 48
                        11 48 -5 0 -16 -15 -25 -34 -15 -33 -17 -34 -47 -23 -21 8 -30 18 -30 34 0 13
                        -4 23 -10 23 -5 0 -10 -10 -10 -21 0 -17 -4 -20 -22 -15 -13 3 -31 6 -40 6
                        -10 0 -18 7 -18 15 0 8 -4 15 -10 15 -5 0 -10 -7 -10 -15 0 -8 -8 -15 -17 -15
                        -10 0 -28 -3 -40 -6 -19 -5 -23 -2 -23 15 0 11 -6 21 -14 21 -8 0 -12 -8 -9
                        -23 3 -17 -2 -25 -27 -34 -30 -11 -32 -10 -47 23 -14 29 -33 46 -33 29z m210
                        -95 c0 -58 -16 -59 -51 -3 -24 38 -16 53 29 53 20 0 22 -5 22 -50z m79 41 c11
                        -7 10 -15 -8 -44 -35 -56 -51 -55 -51 3 0 45 2 50 23 50 12 0 28 -4 36 -9z
                        m-150 -46 c22 -38 21 -41 -12 -24 -41 21 -59 42 -45 51 23 14 36 8 57 -27z
                        m220 26 c10 -7 4 -15 -25 -35 -51 -35 -57 -33 -33 9 21 36 34 41 58 26z" />
                    </g>
                </svg>
                <a href="https://www.andresinho20049.com.br/">https://www.andresinho20049.com.br/</a>
            </div>
        </div>

    </body>

    </html>`;

    const MailOpt: MailOptions = {
    to: [{
        name: name,
        address: email
    }],
    bcc: [
        {
            name: "Andre Carlos",
            address: "andre.andresinho2009@hotmail.com"
        }
    ],
    subject: subject,
      html: htmlMsg,
      attachments: [
        {
          filename: "Logo",
          path: "/Logo_extended.png",
          cid: "Logo_extended",
        },
      ],
    };

    return await transporter.sendMail(MailOpt);

}