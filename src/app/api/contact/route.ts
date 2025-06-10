
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import * as z from "zod";
import nodemailer from 'nodemailer';

// Define the schema for validation, mirroring the client-side schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();

    // Validate the data against the schema
    const validatedData = formSchema.safeParse(requestBody);

    if (!validatedData.success) {
      return NextResponse.json({ message: 'Invalid form data', errors: validatedData.error.flatten().fieldErrors }, { status: 400 });
    }

    const { name, email, company, message } = validatedData.data;

    // Log the data to the server console
    console.log('Contact form data received on server:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company);
    console.log('Message:', message);

    // --- Email Sending Logic (using Nodemailer) ---
    // 1. Configure your email transporter using environment variables for security.
    //    Store credentials in .env.local (for development) or your hosting provider's settings.
    //    Example .env.local content:
    //    SMTP_HOST="smtp.example.com"
    //    SMTP_PORT="587"
    //    SMTP_USER="your-email@example.com"
    //    SMTP_PASS="your-email-password"
    //    CONTACT_FORM_TO_EMAIL="info@barnowlanalytics.com"
    //    CONTACT_FORM_FROM_EMAIL="noreply@yourdomain.com" (Must be a verified sender with your email provider)

    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: parseInt(process.env.SMTP_PORT || "587", 10) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.CONTACT_FORM_FROM_EMAIL}>`, // Sender address (can be your app's no-reply address)
      replyTo: email, // Set reply-to to the user's email
      to: process.env.CONTACT_FORM_TO_EMAIL, // List of receivers (your info@barnowlanalytics.com)
      subject: `New Contact Form Submission from ${name}`, // Subject line
      text: `You have a new contact form submission:
      Name: ${name}
      Email: ${email}
      Company: ${company}
      Message: ${message || 'No message provided.'}`, // Plain text body
      html: `<p>You have a new contact form submission:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Company:</strong> ${company}</li>
        <li><strong>Message:</strong> ${message || 'No message provided.'}</li>
      </ul>`, // HTML body
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      // Return success response after email is sent
      return NextResponse.json({ message: 'Form submitted successfully! We will be in touch.', data: validatedData.data }, { status: 200 });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Return an error response if email sending fails
      return NextResponse.json({ message: 'Form data received, but failed to send email notification.' }, { status: 500 });
    }
    */

    // For now, we're just logging it and returning a success message.
    // Remove this line and uncomment the email sending block above once configured.
    return NextResponse.json({ message: 'Form submitted successfully! (Email sending not yet configured)', data: validatedData.data }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    // It's good practice to avoid sending detailed error messages to the client in production
    return NextResponse.json({ message: 'An unexpected error occurred on the server.' }, { status: 500 });
  }
}
