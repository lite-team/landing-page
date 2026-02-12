import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Extract subdomain from hostname
  const subdomain = hostname.split('.')[0];
 
    // If already on the app path, allow it
    if (request.nextUrl.pathname.startsWith(`/${subdomain}`)) {
      return NextResponse.next();
    }
    
    // If on root, rewrite to app page
    if (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '') {
      const url = request.nextUrl.clone();
      url.pathname = `/${subdomain}`;
      return NextResponse.rewrite(url);
    }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
