const nodemailer = require("nodemailer");
const emailsettings = require("./emailsettings");

const SendEmail = async (nameOfAddresse, email, code) => {
  try {
    const transporter = await nodemailer.createTransport(
      emailsettings.emailAuth
    );
    //Send Email to client
    transporter.sendMail(
      emailsettings.email(nameOfAddresse, email, code),
      (error, info) => {
        if (error) console.log(error.message);
        else console.log("Email sent: " + info.response);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = { SendEmail };
