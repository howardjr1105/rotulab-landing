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
    id: "camisetas-corp-dtf",
    title: "Camisetas Corporativas Premium",
    serviceId: "dtf",
    description: "Impresión DTF de alta definición con tintas ecológicas sobre camisetas de algodón orgánico negro.",
    sourceDownloadPath: "/Users/howardemiliosuarezcerrato/Downloads/TRABAUJOS/IMG_3414.jpg",
    publicUrl: "/images/portfolio/IMG_3414.jpg",
    tags: ["Textil", "Corporativo", "Merchandising"],
    clientName: "TechHub Nicaragua",
    year: "2025"
  },
  {
    id: "tarjetas-premium-nfc",
    title: "Tarjetas de Presentación Inteligentes NFC",
    serviceId: "nfc",
    description: "Fabricación de tarjetas acrílicas negro mate grabadas a láser con integración de chip NFC de contacto rápido.",
    sourceDownloadPath: "/Users/howardemiliosuarezcerrato/Downloads/TRABAUJOS/IMG_5641.jpg",
    publicUrl: "/images/portfolio/IMG_5641.jpg",
    tags: ["NFC", "Acrílico", "Premium"],
    clientName: "Estudio Legal Asesores",
    year: "2026"
  },
  {
    id: "prototipo-motor-3d",
    title: "Prototipo Funcional de Motor Rotativo",
    serviceId: "3d-printing",
    description: "Impresión 3D en resina de alta definición (SLA) para piezas móviles transparentes y filamento PETG para el bloque.",
    sourceDownloadPath: "/Users/howardemiliosuarezcerrato/Downloads/TRABAUJOS/IMG_5455.jpg",
    publicUrl: "/images/portfolio/IMG_5455.jpg",
    tags: ["Resina", "Ingeniería", "Prototipado"],
    clientName: "Facultad de Ingeniería Mecánica",
    year: "2025"
  },
  {
    id: "letrero-luminoso-led-laser",
    title: "Señalización Luminosa LED & Corte Láser",
    serviceId: "laser-cutting",
    description: "Letrero de interiores fabricado en MDF de 9mm cortado a láser, retroiluminado con tiras LED cian neón.",
    sourceDownloadPath: "/Users/howardemiliosuarezcerrato/Downloads/TRABAUJOS/2026_05_11_18_16_56_IMG_0470.JPG",
    publicUrl: "/images/portfolio/2026_05_11_18_16_56_IMG_0470.JPG",
    tags: ["Corte Láser", "LED", "MDF"],
    clientName: "Gamer Zone E-Sports",
    year: "2026"
  },
  {
    id: "rotulo-fachada-acm",
    title: "Rótulo de Fachada en Aluminio Compuesto",
    serviceId: "signage",
    description: "Diseño, estructuración e instalación de panel exterior ACM con letras 3D de acero inoxidable iluminadas por detrás.",
    sourceDownloadPath: "/Users/howardemiliosuarezcerrato/Downloads/TRABAUJOS/2026_05_11_18_17_32_IMG_0471.JPG",
    publicUrl: "/images/portfolio/2026_05_11_18_17_32_IMG_0471.JPG",
    tags: ["Señalización", "ACM", "Exteriores"],
    clientName: "Clínica Odontológica DentalCare",
    year: "2025"
  },
  {
    id: "video-promocional-dron",
    title: "Video Promocional y Tomas Aéreas",
    serviceId: "audiovisual",
    description: "Producción audiovisual completa incluyendo tomas aéreas 4K con dron para la campaña de verano de complejo turístico.",
    sourceDownloadPath: "/Users/howardemiliosuarezcerrato/Downloads/TRABAUJOS/2026_05_11_18_18_56_IMG_0473.JPG",
    publicUrl: "/images/portfolio/2026_05_11_18_18_56_IMG_0473.JPG",
    tags: ["Video", "Dron", "4K", "Promocional"],
    clientName: "Resort Selva Azul",
    year: "2025"
  }
];
