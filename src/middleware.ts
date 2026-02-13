import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Skip if accessing via IP address (contains only numbers and dots)
  const isIPAddress = /^(\d{1,3}\.){3}\d{1,3}(:\d+)?$/.test(hostname);
  if (isIPAddress) {
    return NextResponse.next();
  }
  
  // Skip if localhost
  if (hostname.startsWith('localhost')) {
    return NextResponse.next();
  }
  
  // Extract subdomain from hostname
  const subdomain = hostname.split('.')[0];
  
  // Skip if no subdomain or if it's www or the main domain
  if (!subdomain || subdomain === 'www' || subdomain === 'liteteam' || !hostname.includes('.')) {
    return NextResponse.next();
  }
  
  // Accept any subdomain and try to route to it
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
