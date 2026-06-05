/**
 * @typedef {Object} ServiceItem
 * @property {string} id - Identificador único del servicio (usado en URLs y selectores).
 * @property {string} title - Nombre comercial del servicio.
 * @property {string} shortDescription - Resumen para tarjetas de presentación.
 * @property {string} detailedDescription - Explicación detallada para modal o sección individual.
 * @property {string[]} features - Ventajas competitivas y características técnicas clave.
 * @property {string[]} specifications - Especificaciones técnicas del servicio.
 * @property {string} icon - Nombre del icono de lucide-react a renderizar.
 * @property {string} fallbackImage - Imagen de respaldo del servicio.
 */

/**
 * Contrato de datos para los servicios ofrecidos por ROTULAB.
 * Cumple con principios SOLID al encapsular la configuración desacoplada de la interfaz gráfica.
 * @type {ServiceItem[]}
 */
export const SERVICES_DATA = [
  {
    id: "dtf",
    title: "Impresión DTF",
    shortDescription: "Personalización textil de alta durabilidad con colores vibrantes en cualquier tejido.",
    detailedDescription: "La tecnología Direct to Film (DTF) permite transferir impresiones a color de calidad fotográfica sobre una amplia variedad de textiles sin importar su color o composición. Ideal para merchandising, uniformes corporativos y moda urbana.",
    features: [
      "Alta resistencia a lavados continuos sin agrietarse ni perder color.",
      "Aplicable en algodón, poliéster, nylon y mezclas de fibras.",
      "Tacto suave, elástico y cómodo al vestir.",
      "Sin límites de colores o detalles finos en el diseño."
    ],
    specifications: [
      "Resolución máxima de impresión: 1440x1440 DPI",
      "Ancho de bobina útil: 60 cm",
      "Compatibilidad textil: Algodón, Poliéster, Mezclas, Cuero",
      "Tinta certificada ecológica con estándar Oeko-Tex"
    ],
    icon: "Shirt",
    fallbackImage: "/images/services/dtf.jpg"
  },
  {
    id: "nfc",
    title: "Soluciones NFC",
    shortDescription: "Tarjetas de presentación y cartelería inteligente con interacción sin contacto.",
    detailedDescription: "Integramos chips Near Field Communication (NFC) en soportes físicos como tarjetas de presentación premium, displays acrílicos de mesa y cartelería comercial. Conecta tus soportes impresos directamente a enlaces web, menús, redes sociales o información de contacto digital en un solo toque.",
    features: [
      "Lectura instantánea sin necesidad de escanear códigos QR.",
      "Chips de memoria NTAG213 / NTAG215 de larga duración.",
      "Encapsulado resistente al agua y al desgaste diario.",
      "Programación dinámica de enlaces y contenidos remotos."
    ],
    specifications: [
      "Frecuencia de operación: 13.56 MHz",
      "Distancia de lectura óptima: 0 a 3 cm",
      "Material del soporte: PVC reciclado, Madera, Acrílico Premium",
      "Ciclo de vida del chip: Más de 100,000 lecturas"
    ],
    icon: "Cpu",
    fallbackImage: "/images/services/nfc.jpg"
  },
  {
    id: "3d-printing",
    title: "Impresión 3D",
    shortDescription: "Prototipado rápido y fabricación de piezas personalizadas en múltiples materiales.",
    detailedDescription: "Modelamos y fabricamos objetos tridimensionales bajo demanda mediante procesos FDM y SLA. Ideal para diseñadores, ingenieros y creadores que requieren prototipos funcionales, maquetas detalladas o tiradas cortas de producción de piezas personalizadas.",
    features: [
      "Prototipado rápido con tolerancias milimétricas.",
      "Variedad de filamentos según la aplicación (PLA, ABS, PETG, TPU flexible).",
      "Modelado en resina de alta definición para miniaturas y detalles ultra finos.",
      "Acabado y post-procesado opcional (lijado, pintado, sellado)."
    ],
    specifications: [
      "Volumen máximo de construcción FDM: 300 x 300 x 400 mm",
      "Resolución de capa SLA: Hasta 25 micras",
      "Materiales disponibles: PLA, ABS, PETG, TPU, Resinas de ingeniería",
      "Formatos de archivo aceptados: STL, OBJ, STEP, 3MF"
    ],
    icon: "Layers",
    fallbackImage: "/images/services/3d-printing.jpg"
  },
  {
    id: "laser-cutting",
    title: "Corte y Grabado Láser",
    shortDescription: "Cortes ultra precisos y grabados personalizados sobre madera, acrílico y cuero.",
    detailedDescription: "Utilizamos tecnología láser de CO2 de alta potencia para cortar y grabar formas complejas con bordes limpios y terminaciones profesionales. Transformamos materiales rígidos y flexibles en piezas de diseño, señalética, packaging y regalos personalizados.",
    features: [
      "Precisión quirúrgica en curvas cerradas y textos pequeños.",
      "Grabados de alta fidelidad que no se borran con el paso del tiempo.",
      "Optimización de material mediante software de anidado inteligente.",
      "Acabado pulido natural en los cantos del acrílico."
    ],
    specifications: [
      "Área de trabajo máxima: 1300 x 900 mm",
      "Espesores de corte soportados: Hasta 15 mm en acrílico, 12 mm en madera",
      "Materiales aptos: Acrílico, MDF, Madera natural, Cuero, Cartón, Vidrio (solo grabado)",
      "Tolerancia posicional del cabezal: +/- 0.05 mm"
    ],
    icon: "Scissors",
    fallbackImage: "/images/services/laser-cutting.jpg"
  },
  {
    id: "signage",
    title: "Señalización Corporativa",
    shortDescription: "Diseño, fabricación e instalación de letreros luminosos y señalética de seguridad.",
    detailedDescription: "Creamos la identidad espacial de tu empresa a través de señalización interior y exterior. Desde letreros luminosos LED de bajo consumo, letras corporativas en 3D (acero, acrílico, PVC) hasta sistemas completos de señalética de evacuación y seguridad industrial.",
    features: [
      "Resistencia a condiciones climáticas exteriores (filtros UV y anticorrosivos).",
      "Uso de iluminación LED de alta eficiencia y bajo consumo energético.",
      "Instalación certificada con anclajes de seguridad estructural.",
      "Cumplimiento de normativas de protección civil y accesibilidad universal."
    ],
    specifications: [
      "Materiales de soporte: Aluminio compuesto (ACM), Acero inoxidable, Acrílico",
      "Iluminación: Módulos LED SMD con certificación IP67 contra humedad",
      "Técnicas de rotulación: Vinilo autoadhesivo de alta performance, Impresión directa UV",
      "Durabilidad exterior estimada: Mayor a 5 años"
    ],
    icon: "MapPin",
    fallbackImage: "/images/services/signage.jpg"
  },
  {
    id: "audiovisual",
    title: "Producción Audiovisual",
    shortDescription: "Creación de contenido multimedia de alto impacto, video corporativo y cobertura de eventos.",
    detailedDescription: "Desarrollamos proyectos audiovisuales integrales que conectan con tu audiencia. Desde la conceptualización de guiones, storyboards, grabación profesional en alta definición (4K/8K), tomas aéreas con drones homologados, hasta la postproducción de color, sonido y motion graphics.",
    features: [
      "Equipamiento de cine digital y estabilizadores de última generación.",
      "Tomas aéreas de alta resolución bajo regulaciones de aeronavegabilidad.",
      "Edición dinámica orientada a la plataforma final (Web, TV, Redes sociales).",
      "Diseño sonoro avanzado y locución profesional multilingüe."
    ],
    specifications: [
      "Resolución máxima de captura: 4K a 120 FPS / 6K RAW",
      "Equipamiento aéreo: Drones DJI Mavic con sensores multiespectrales",
      "Software de postproducción: DaVinci Resolve Studio & Adobe After Effects",
      "Formatos de entrega optimizados: MP4 (H.264 / HEVC), ProRes 422"
    ],
    icon: "Video",
    fallbackImage: "/images/services/audiovisual.jpg"
  }
];
