const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "jamesmulligansocial@gmail.com",
    subject: "Thanks for signing up!",
    text: `Welcome to the app, ${name}. Let me know how you find using the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "jamesmulligansocial@gmail.com",
    subject: "Account Cancellation",
    text: `Sorry to see you leave, ${name}. Let me know how it could be improved.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
