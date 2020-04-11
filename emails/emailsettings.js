const emailer = "YourEmailHere@EmailDomain.com";
const emailerPassword = "YourPasswordToYourEmail";

const generateMessage = (code) => {
  return `
  Here is your code to confirm your email address: ${code}
  `;
};

const generateGreeting = (name) => {
  return `Hi ${name},<br/><br/>
  Thank you for subscribing to my Newsletter! 
  `;
};

// Depending on how you set this up, you might need to open your email to OAuth.
const emailAuth = {
  host: "smtp.gmail.com",
  auth: {
    user: emailer,
    pass: emailerPassword,
  },
};

const email = (toAddress, nameOfAddresse, code) => {
  return {
    from: emailer,
    to,
    subject: "Welcome to My Awesome Newsletter!",
    html: emailMessage(nameOfAddresse, toAddress, code),
    attachments: [
      {
        path: __dirname + "/images/MyAvatar.png",
        cid: "MyAvatar",
      },
    ],
  };
};

const emailMessage = (nameOfAddresse, email, code) => {
  return `
    ${generateGreeting(name)}
    ${generateMessage(code)}
    ${signature}
  `;
};

const signature = `
Warmly, <br/><br/>
Nick <br/>
An Awesome Dude <br/>
<img src="cid:MyAvatar" alt="Nick" />
`;

module.exports = { email, emailAuth, emailer, emailerPassword, recordSignUp };
