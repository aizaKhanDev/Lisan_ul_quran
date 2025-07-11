import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('admin-session');
  const { pathname } = request.nextUrl;

  // If accessing an admin route and no session cookie is found, redirect to login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && !sessionCookie) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Allow the request to proceed if not an admin route or if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
}; 