import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Gmail SMTP server
      port: 587,
      secure: false, // TLS
      auth: {
        user: "mariaasghar75@gmail.com", // aapka email
        pass: "Pak@.com",     // Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "contact@arm-interior.net", 
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent!" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Email failed!" }), {
      status: 500,
    });
  }
}
