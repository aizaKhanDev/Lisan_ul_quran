import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, country, course, message } = data;

    // Split the full name into first and last names
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || ''; // Handle cases with no last name

    // Save registration data to database
    await prisma.registration.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        country,
        course,
        message,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration API error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 