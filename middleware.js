import { NextResponse } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'en';

/**
 * Middleware para la gestión de rutas i18n y seguridad en el lado del servidor de Next.js.
 */
export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  let response;

  if (!pathnameHasLocale) {
    // Redirect si no hay locale
    const locale = defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    response = NextResponse.redirect(request.nextUrl);
  } else {
    response = NextResponse.next();
  }

  // Cabeceras de seguridad adicionales (Security Headers)
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'none';"
  );

  return response;
}

/**
 * Configuración del Matcher del Middleware.
 */
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
