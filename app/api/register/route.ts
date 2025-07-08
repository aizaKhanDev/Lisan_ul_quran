import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/db';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, country, course, message } = data;

    // Save registration data to database
    await prisma.registration.create({
      data: {
        name,
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