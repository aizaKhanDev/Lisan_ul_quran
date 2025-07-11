import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    const newSubmission = await prisma.contactSubmission.create({
      data: {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json({ message: 'Submission successful', submission: newSubmission }, { status: 201 });
  } catch (error) {
    console.error('Error saving contact submission:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
} 