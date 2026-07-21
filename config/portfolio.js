/**
 * @typedef {Object} PortfolioItem
 * @property {string} id - Identificador único del proyecto del portafolio.
 * @property {string} title - Nombre del proyecto o trabajo realizado.
 * @property {string} serviceId - ID del servicio al que pertenece (FK a SERVICES_DATA).
 * @property {string} description - Explicación breve del trabajo realizado.
 * @property {string} sourceDownloadPath - Ruta física original del archivo en la carpeta de descargas del usuario (para scripts de automatización de copia).
 * @property {string} publicUrl - Ruta estática relativa servida por Next.js en el directorio /public.
 * @property {string[]} tags - Etiquetas/palabras clave para filtros adicionales.
 * @property {string} clientName - Nombre del cliente o sector.
 * @property {string} year - Año de realización.
 */

/**
 * Contrato de datos para la galería de trabajos realizados (Portafolio) de ROTULAB.
 * Mapea la relación entre las imágenes originales descargadas y el recurso estático servido por Next.js.
 * @type {PortfolioItem[]}
 */
export const PORTFOLIO_DATA = [
  {
    id: "rotulacion-camioneta",
    title: "Rotulación Vehicular de Camioneta Comercial",
    serviceId: "signage",
    description: "Rotulación vehicular de camioneta en Asheville mediante vinilo premium Avery/3M (letras de corte y cobertura parcial).",
    sourceDownloadPath: "/Users/howardemiliosuarezcerrato/Downloads/TRABAUJOS/2026_05_11_18_16_20_IMG_0469.JPG",
    publicUrl: "/images/portfolio/2026_05_11_18_16_20_IMG_0469.JPG",
    tags: ["Rotulación", "Camioneta", "Asheville"],
    clientName: "Cliente Local",
    year: "2026"
  },
  {
    id: "rotulacion-minivan",
    title: "Rotulación Vehicular de Minivan",
    serviceId: "signage",
    description: "Rotulación comercial de minivan de reparto con diseño y aplicación de vinilo adhesivo de alta durabilidad.",
    sourceDownloadPath: "/Users/howardemiliosuarezcerrato/Downloads/TRABAUJOS/2026_05_11_18_17_32_IMG_0471.JPG",
    publicUrl: "/images/portfolio/2026_05_11_18_17_32_IMG_0471.JPG",
    tags: ["Rotulación", "Minivan", "Publicidad"],
    clientName: "Cliente Local",
    year: "2026"
  },
  {
    id: "llaveros-nfc-logos",
    title: "Llaveros NFC Personalizados con Logotipo",
    serviceId: "nfc",
    description: "Llaveros NFC personalizados con logotipo grabados a láser en acrílico, permitiendo compartir datos de contacto al instante.",
    sourceDownloadPath: "/Users/howardemiliosuarezcerrato/Downloads/TRABAUJOS/IMG_5641.jpg",
    publicUrl: "/images/portfolio/IMG_5641.jpg",
    tags: ["NFC", "Acrílico", "Llaveros"],
    clientName: "Café Estelar",
    year: "2026"
  }
];
