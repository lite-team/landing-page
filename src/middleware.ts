import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;
  
  // Skip internal Next.js requests, API routes, or assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Skip if accessing via IP address
  const isIPAddress = /^(\d{1,3}\.){3}\d{1,3}(:\d+)?$/.test(hostname);
  if (isIPAddress) {
    return NextResponse.next();
  }
  
  // Skip if standard localhost without subdomain
  if (hostname === 'localhost' || hostname.startsWith('localhost:')) {
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
  if (pathname.startsWith(`/${subdomain}`)) {
    return NextResponse.next();
  }
  
  // If on root, rewrite to app page
  if (pathname === '/' || pathname === '') {
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
     * - _next
     * - api
     * - static files with extensions (.svg, .png, .jpg, .ico, etc.)
     */
    '/((?!api|_next|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};
