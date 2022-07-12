import nodemailer from 'nodemailer'
function sendEmail(email,subject,message){
        var email = email;
        var subject = subject;
        var message=message;
        var mail = nodemailer.createTransport({
          service:'gmail',
          auth: {
            user: "abc@gmail.com", // Your email id
            pass: "pass", // generated password of app password from  gmail
          },
        });
        var mailOptions = {
          from: "abc@gmail.com", //your email
          to: email,
          subject: subject,
          html:message
        };
        mail.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log(0);
          }
        });
      }
export default sendEmail;