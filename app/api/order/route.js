import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    let payload = await request.json();
    const { Fname, Lname, city, phone, email, country, pin, address, message, products, quantity, colors } = payload;

    let quantitys = Object.entries(quantity).map(([item, qty]) => `${item} : ${qty}`);
    let productsColor = Object.entries(colors).map(([item, color]) => `${item} : ${color}`);


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "zulkaifkhan183@gmail.com",
        subject: `New Order from ${Fname} ${Lname}`,
        replyTo: email,
        html: `
            <p><b>Name:</b> ${Fname} ${Lname}</p>
            <p><b>City:</b> ${city}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Country:</b> ${country}</p>
            <p><b>PIN Code:</b> ${pin}</p>
            <p><b>Address:</b> ${address}</p>
            <p><b>Message:</b> ${message}</p>
            <br/>
            <p><b>Ordered Products:</b> ${products?.join(", ")}</p>
            <p><b>Quantity:</b> ${quantitys?.join(",  ")}</p>
            <p><b>Colors:</b> ${productsColor?.join(",  ")}</p>    
            <br/>       `
        ,
    });

    return NextResponse.json({ success: true }, { status: 200 });
}
