const nodemailer = require("nodemailer");

export const sendEmail = async (emailAddress, emailData) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailBody = {
            from:process.env.EMAIL_USER,
            to: emailAddress,
            subject: emailData?.subject,
            html: `<p>${emailData?.message}</p>`,
        };

     await transporter.sendMail(mailBody,(err,info)=>{
          if (err) {
            console.log(err);
          }
          console.log("email sent",info.response);
        });

    } catch (error) {
        console.error("Error sending email:", error);
    }
};