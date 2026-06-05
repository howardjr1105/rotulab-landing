import { NextResponse } from 'next/server';

/**
 * Middleware para la gestión de rutas y seguridad en el lado del servidor de Next.js.
 * Intercepta peticiones entrantes para aplicar políticas de enrutamiento y cabeceras de seguridad.
 * Excluye explícitamente archivos estáticos, imágenes del sistema y APIs del procesamiento.
 */
export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Lista de rutas válidas programadas en la aplicación
  const PROGRAMMED_ROUTES = ['/', '/nosotros', '/servicios', '/portafolio', '/contacto'];

  // 1. Redirecciones de alias antiguos y de cualquier ruta no programada a la raíz
  if (pathname === '/inicio' || !PROGRAMMED_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 2. Cabeceras de seguridad adicionales (Security Headers) para rutas válidas
  const response = NextResponse.next();
  
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
 * Define con precisión qué rutas activan el middleware, previniendo sobrecarga en el renderizado
 * al omitir explícitamente archivos de optimización, estáticos y assets de Next.js.
 */
export const config = {
  matcher: [
    /*
     * Coincidir con todas las rutas de solicitud excepto para:
     * - api (rutas de API de Next.js)
     * - _next/static (archivos estáticos compilados)
     * - _next/image (servicios de optimización de imágenes)
     * - images (directorio público de imágenes y assets del proyecto)
     * - favicon.ico, robots.txt, sitemap.xml (archivos raíz del motor de búsqueda)
     */
    '/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
