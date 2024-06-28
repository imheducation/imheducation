// app/api/contact/route.js

import connectDatabase from '@/lib/db2';
import mongoose from 'mongoose';
// import nodemailer from 'nodemailer';
import Contact from '@/models/Contact';

export const POST = async (req) => {
  try {
    const { name, email, tel, message } = await req.json();

    // Connect to the database
    await connectDatabase();

    // Save to MongoDB
    const contact = new Contact({ name, email, tel, message });
    await contact.save();

    // // Send Email
    // let transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_ID,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // });

    // let mailOptions = {
    //   from: process.env.EMAIL_ID,
    //   to: email,
    //   subject: 'Thank you for contacting us',
    //   text: `Hi ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nS.K. Smart Hub`,
    // };

    // await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error:', error); // Log error
    return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), { status: 500 });
  }
};
