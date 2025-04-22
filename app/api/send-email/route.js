import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message , phone , subject } = await request.json();


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'zulkaifkhan183@gmail.com',
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhoneNumber : ${phone}\nSubject : ${subject}\nMessage: ${message}`,
    });

    return  NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return  NextResponse.json({ success: false }, { status: 400 });
  }
}
