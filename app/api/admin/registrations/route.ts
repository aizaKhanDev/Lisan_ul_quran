import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
  try {
    const registrations = await prisma.registration.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(registrations);
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return NextResponse.json({ message: 'Failed to fetch registrations.' }, { status: 500 });
  }
} 