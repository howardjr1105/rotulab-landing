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

const servicesDict = {
  es: [
    {
      id: "design",
      title: "Diseño Gráfico y Vectorización Avanzada",
      shortDescription: "Creación de logotipos, identidad corporativa y vectorización de archivos para corte e impresión.",
      detailedDescription: "Desarrollamos piezas gráficas de alta calidad y preparamos archivos vectoriales listos para cualquier proceso de producción industrial. Optimizamos tus logos e ilustraciones para garantizar nitidez total sin importar el tamaño de reproducción.",
      features: [
        "Vectorización manual de alta fidelidad desde imágenes en baja resolución.",
        "Diseño de manuales de identidad corporativa y guías de marca.",
        "Preparación técnica de archivos para corte láser, routers CNC e impresión a gran formato.",
        "Formatos limpios y escalables en SVG, PDF, AI y EPS."
      ],
      specifications: [
        "Software de diseño: Adobe Illustrator y CorelDRAW Suite",
        "Modo de color: CMYK para impresión física y RGB para pantallas digitales",
        "Salida digital con capas organizadas y contornos trazados",
        "Soporte de archivos vectoriales listos para producción"
      ],
      icon: "Palette",
      fallbackImage: "/images/services/design.jpg"
    },
    {
      id: "fabrication-3d",
      title: "Fabricación Digital y Modelado 3D",
      shortDescription: "Modelado 3D, prototipado rápido, piezas personalizadas e ingeniería de producto.",
      detailedDescription: "Diseñamos y fabricamos piezas tridimensionales mediante tecnologías FDM y SLA de alta resolución. Creamos carcasas de electrónica, repuestos descontinuados, engranajes técnicos y prototipos funcionales con tolerancias exactas.",
      features: [
        "Prototipado rápido con tolerancias mecánicas precisas.",
        "Selección de filamentos funcionales (PLA, PETG, ABS, TPU elástico) y resinas premium.",
        "Ingeniería inversa para réplica y mejora de piezas desgastadas.",
        "Asesoramiento en diseño óptimo para fabricación aditiva (DfAM)."
      ],
      specifications: [
        "Volumen máximo de impresión FDM: 300 x 300 x 400 mm",
        "Precisión de capa SLA: Hasta 25 micras",
        "Formatos de archivo: STL, OBJ, STEP, IGES",
        "Resistencia térmica e impacto según material de ingeniería elegido"
      ],
      icon: "Layers",
      fallbackImage: "/images/services/3d-printing.jpg"
    },
    {
      id: "nfc",
      title: "Tarjetas de Presentación Inteligentes (NFC)",
      shortDescription: "Tarjetas de presentación y cartelería inteligente con interacción sin contacto.",
      detailedDescription: "Integramos tecnología Near Field Communication (NFC) en artículos promocionales exclusivos. Conecta instantáneamente a tus clientes con tu menú digital, catálogo, redes sociales o información de contacto con solo acercar un teléfono móvil.",
      features: [
        "Chips de última generación NTAG213 / NTAG215 embebidos y protegidos.",
        "Enlaces dinámicos reconfigurables en la nube en cualquier momento.",
        "Materiales premium como madera grabada, acrílico pulido o resina de alta durabilidad.",
        "Diseños totalmente personalizados con tu logotipo grabado a láser o impreso en alta definición."
      ],
      specifications: [
        "Frecuencia de operación estándar: 13.56 MHz",
        "Distancia de lectura recomendada: 0 a 3 cm",
        "Ciclo de vida útil superior a 100,000 lecturas",
        "Materiales base: Madera natural, acrílico cast y PVC premium"
      ],
      icon: "Cpu",
      fallbackImage: "/images/services/nfc.jpg"
    },
    {
      id: "dtf",
      title: "Personalización Textil (Impresión DTF)",
      shortDescription: "Estampado textil de alta durabilidad con colores vibrantes en cualquier prenda y tejido.",
      detailedDescription: "La impresión Direct to Film (DTF) es la solución ideal para transferir diseños a todo color y con gran detalle sobre cualquier textil sin importar la composición del tejido o su color. Perfecto para uniformes, marcas de moda y merchandising corporativo.",
      features: [
        "Acabado ultra flexible y suave al tacto que estira con la prenda.",
        "Resistencia insuperable a lavados y fricción sin cuartearse.",
        "Compatibilidad total con algodón, poliéster, nylon y mezclas sintéticas.",
        "Colores vibrantes e impresión de detalles ultra finos."
      ],
      specifications: [
        "Resolución de impresión física: 1440x1440 DPI",
        "Ancho de bobina útil de transferencia: 60 cm",
        "Tintas certificadas ecológicas Oeko-Tex",
        "Transferencia térmica de precisión a temperatura controlada"
      ],
      icon: "Shirt",
      fallbackImage: "/images/services/dtf.jpg"
    },
    {
      id: "signage",
      title: "Rotulación y Señalización Comercial",
      shortDescription: "Rotulación de vehículos comerciales, vitrinas comerciales y letreros en vinilo.",
      detailedDescription: "Aumenta la visibilidad de tu negocio con sistemas de rotulación profesional y señalización corporativa. Diseñamos, producimos e instalamos viniles adhesivos en vitrinas, rotulación integral o parcial de vehículos comerciales y letreros luminosos que destacan.",
      features: [
        "Viniles de grado automotriz y comercial con resistencia a la intemperie.",
        "Filtro de protección UV para evitar la decoloración del sol.",
        "Rotulación vehicular precisa que se adapta a las curvas de tu camioneta o auto.",
        "Instalación limpia sin burbujas ni arrugas."
      ],
      specifications: [
        "Materiales: Vinilos de alta performance Avery y 3M",
        "Durabilidad exterior garantizada: 3 a 5 años según exposición solar",
        "Acabados disponibles: Mate, Brillante y Microperforado para vitrinas",
        "Métodos de corte por plotter digital de alta precisión"
      ],
      icon: "MapPin",
      fallbackImage: "/images/services/signage.jpg"
    },
    {
      id: "audiovisual",
      title: "Producción Audiovisual para Marcas",
      shortDescription: "Videos publicitarios de alto impacto, fotografía de producto y cobertura digital de proyectos.",
      detailedDescription: "Creamos contenido de video y fotografía profesional adaptado a las necesidades de marketing de tu marca. Desde tomas en taller mostrando el proceso de fabricación hasta videos comerciales optimizados para tus campañas en Instagram y TikTok.",
      features: [
        "Producción y postproducción de video en alta definición y formatos dinámicos.",
        "Tomas de detalle y fotografía de producto para tiendas online y redes sociales.",
        "Edición ágil y moderna alineada con las tendencias de las plataformas digitales.",
        "Animaciones gráficas (motion graphics) incorporadas para mayor dinamismo."
      ],
      specifications: [
        "Resolución de grabación digital: 4K a alta tasa de bits",
        "Software de postproducción: Suite profesional de edición de video y corrección de color",
        "Formatos optimizados para móviles y plataformas web",
        "Audio premium libre de regalías para campañas comerciales"
      ],
      icon: "Video",
      fallbackImage: "/images/services/audiovisual.jpg"
    }
  ],
  en: [
    {
      id: "design",
      title: "Graphic Design and Advanced Vectorization",
      shortDescription: "Creation of logos, corporate identity, and file vectorization for cutting and printing.",
      detailedDescription: "We develop high-quality graphic pieces and prepare vector files ready for any industrial production process. We optimize your logos and illustrations to ensure total sharpness regardless of reproduction size.",
      features: [
        "High-fidelity manual vectorization from low-resolution images.",
        "Design of corporate identity manuals and brand guidelines.",
        "Technical preparation of files for laser cutting, CNC routers, and large-format printing.",
        "Clean and scalable formats in SVG, PDF, AI, and EPS."
      ],
      specifications: [
        "Design software: Adobe Illustrator and CorelDRAW Suite",
        "Color mode: CMYK for physical printing and RGB for digital screens",
        "Digital output with organized layers and traced outlines",
        "Support for vector files ready for production"
      ],
      icon: "Palette",
      fallbackImage: "/images/services/design.jpg"
    },
    {
      id: "fabrication-3d",
      title: "Digital Fabrication and 3D Modeling",
      shortDescription: "3D modeling, rapid prototyping, custom parts, and product engineering.",
      detailedDescription: "We design and manufacture three-dimensional parts using high-resolution FDM and SLA technologies. We create electronics enclosures, discontinued spare parts, technical gears, and functional prototypes with exact tolerances.",
      features: [
        "Rapid prototyping with precise mechanical tolerances.",
        "Selection of functional filaments (PLA, PETG, ABS, flexible TPU) and premium resins.",
        "Reverse engineering for replication and improvement of worn parts.",
        "Consulting in optimal design for additive manufacturing (DfAM)."
      ],
      specifications: [
        "Maximum FDM print volume: 300 x 300 x 400 mm",
        "SLA layer accuracy: Up to 25 microns",
        "File formats: STL, OBJ, STEP, IGES",
        "Thermal and impact resistance depending on chosen engineering material"
      ],
      icon: "Layers",
      fallbackImage: "/images/services/3d-printing.jpg"
    },
    {
      id: "nfc",
      title: "Smart Business Cards (NFC)",
      shortDescription: "Smart business cards and signage with contactless interaction.",
      detailedDescription: "We integrate Near Field Communication (NFC) technology into exclusive promotional items. Instantly connect your customers to your digital menu, catalog, social networks, or contact information with just a tap of a mobile phone.",
      features: [
        "Embedded and protected next-generation NTAG213 / NTAG215 chips.",
        "Dynamic links reconfigurable in the cloud at any time.",
        "Premium materials such as engraved wood, polished acrylic, or highly durable resin.",
        "Fully customized designs with your logo laser engraved or printed in high definition."
      ],
      specifications: [
        "Standard operating frequency: 13.56 MHz",
        "Recommended reading distance: 0 to 3 cm",
        "Life cycle of over 100,000 reads",
        "Base materials: Natural wood, cast acrylic, and premium PVC"
      ],
      icon: "Cpu",
      fallbackImage: "/images/services/nfc.jpg"
    },
    {
      id: "dtf",
      title: "Custom Apparel (DTF Printing)",
      shortDescription: "High-durability textile printing with vibrant colors on any garment and fabric.",
      detailedDescription: "Direct to Film (DTF) printing is the ideal solution for transferring full-color and highly detailed designs onto any textile regardless of the fabric composition or color. Perfect for uniforms, fashion brands, and corporate merchandise.",
      features: [
        "Ultra-flexible and soft-touch finish that stretches with the garment.",
        "Unbeatable resistance to washing and friction without cracking.",
        "Full compatibility with cotton, polyester, nylon, and synthetic blends.",
        "Vibrant colors and printing of ultra-fine details."
      ],
      specifications: [
        "Physical print resolution: 1440x1440 DPI",
        "Useful transfer roll width: 60 cm",
        "Oeko-Tex certified eco-friendly inks",
        "Precision thermal transfer at controlled temperature"
      ],
      icon: "Shirt",
      fallbackImage: "/images/services/dtf.jpg"
    },
    {
      id: "signage",
      title: "Commercial Signage and Lettering",
      shortDescription: "Lettering for commercial vehicles, storefront windows, and vinyl signs.",
      detailedDescription: "Increase your business visibility with professional lettering systems and corporate signage. We design, produce, and install adhesive vinyls on windows, full or partial wrap of commercial vehicles, and striking illuminated signs.",
      features: [
        "Automotive and commercial grade vinyls with weather resistance.",
        "UV protection filter to prevent sun fading.",
        "Precise vehicle lettering that adapts to the curves of your truck or car.",
        "Clean installation without bubbles or wrinkles."
      ],
      specifications: [
        "Materials: Avery and 3M high-performance vinyls",
        "Guaranteed outdoor durability: 3 to 5 years depending on sun exposure",
        "Available finishes: Matte, Gloss, and Micro-perforated for windows",
        "High-precision digital plotter cutting methods"
      ],
      icon: "MapPin",
      fallbackImage: "/images/services/signage.jpg"
    },
    {
      id: "audiovisual",
      title: "Audiovisual Production for Brands",
      shortDescription: "High-impact promotional videos, product photography, and digital project coverage.",
      detailedDescription: "We create professional video and photography content tailored to your brand's marketing needs. From workshop shots showing the manufacturing process to commercial videos optimized for your campaigns on Instagram and TikTok.",
      features: [
        "Video production and post-production in high definition and dynamic formats.",
        "Detail shots and product photography for online stores and social media.",
        "Agile and modern editing aligned with digital platform trends.",
        "Incorporated motion graphics for greater dynamism."
      ],
      specifications: [
        "Digital recording resolution: 4K at high bit rate",
        "Post-production software: Professional video editing and color correction suite",
        "Optimized formats for mobile and web platforms",
        "Royalty-free premium audio for commercial campaigns"
      ],
      icon: "Video",
      fallbackImage: "/images/services/audiovisual.jpg"
    }
  ]
};

/**
 * Retorna los servicios basados en el idioma.
 * @param {string} lang Idioma ('es' o 'en')
 * @returns {ServiceItem[]} Arreglo de servicios traducidos.
 */
export const getServices = (lang = 'es') => {
  return servicesDict[lang] || servicesDict['es'];
};
