import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { authOptions } from '../../../auth/[...nextauth]/route';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = params;
    const { firstName, lastName, email, subject, message } = await req.json();

    const updatedSubmission = await prisma.contactSubmission.update({
      where: { id },
      data: {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json(updatedSubmission, { status: 200 });
  } catch (error) {
    console.error('Error updating contact submission:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = params;
    await prisma.contactSubmission.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Submission deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
} 