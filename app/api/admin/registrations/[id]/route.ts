import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await req.json();
    const { firstName, lastName, email, phone, country, course, message } = data;

    const updatedRegistration = await prisma.registration.update({
      where: { id },
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

    return NextResponse.json(updatedRegistration);
  } catch (error) {
    console.error("Error updating registration:", error);
    return NextResponse.json({ message: 'Failed to update registration.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.registration.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Registration deleted successfully.' });
  } catch (error) {
    console.error("Error deleting registration:", error);
    return NextResponse.json({ message: 'Failed to delete registration.' }, { status: 500 });
  }
} 