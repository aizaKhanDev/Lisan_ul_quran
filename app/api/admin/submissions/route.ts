import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const submissions = await prisma.contactSubmission.findMany();
    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
} 