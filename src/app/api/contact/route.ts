
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import * as z from "zod";

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

    // In a real application, you would now:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer.
    // 2. Save the data to a database (e.g., Firebase Firestore, Supabase, etc.).
    // 3. Integrate with a CRM.

    // For now, we're just logging it and returning a success message.
    return NextResponse.json({ message: 'Form submitted successfully!', data: validatedData.data }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    // It's good practice to avoid sending detailed error messages to the client in production
    return NextResponse.json({ message: 'An unexpected error occurred on the server.' }, { status: 500 });
  }
}
