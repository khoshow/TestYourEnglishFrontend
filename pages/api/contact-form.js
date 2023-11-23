const mail = require("@sendgrid/mail");
import { SENDGRID_API_KEY } from "../../config";
mail.setApiKey(SENDGRID_API_KEY);

async function Contact(req, res) {
  const body = JSON.parse(req.body);
  // console.log(body);
  // console.log(process.env.customKey);

  const message = `
  <p>Hi Khoshow, please contact the following person looking for your service.</p>
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject:${body.subject}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    from: `khoshow.developer@gmail.com`,
    personalizations: [
      {
        to: [
          {
            email: "khoshow@gmail.com",
          },
        ],
        bcc: [
          {
            email: "khoshow.official@gmail.com",
          },
        ],
      },
    ],

    subject: `Test My English Online New message from ${body.name} via website`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });
  return res.status(200).json({ status: "OK" });
}

export default Contact;
