import nodemailer from 'nodemailer';

// Generate OTP
export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };


 export const sendEmailOTP = async (email, otp) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });
  try {
    await transporter.sendMail({
      from: process.env.SENDER_MAIL,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
    });
  } catch (error) {
    console.log(error)
  }
    
  };