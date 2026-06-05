# ROTULAB - Landing Page Premium

## Descripción del Negocio
* ROTULAB es una empresa especializada en servicios de rotulación, personalización y soluciones visuales técnicas de alto impacto que fusiona la manufactura física y las tecnologías digitales interactivas.
* Ofrece servicios que abarcan desde métodos tradicionales con maquinaria moderna hasta integraciones de hardware inteligente:
  * Impresión DTF (Direct to Film): Personalización textil de alta durabilidad con colores vibrantes en algodón, poliéster, nylon y mezclas de fibras utilizando tintas certificadas ecológicas.
  * Soluciones NFC (Near Field Communication): Fabricación de tarjetas de presentación de acrílico premium grabadas a láser y cartelería inteligente con integración de chips de contacto rápido (13.56 MHz, NTAG213/215) para enlaces digitales.
  * Impresión y Prototipado 3D: Modelado y fabricación tridimensional mediante procesos FDM (filamentos PLA, ABS, PETG, TPU) y SLA (resina de alta definición para detalles milimétricos y móviles).
  * Corte y Grabado Láser: Cortes ultra precisos y grabados permanentes sobre acrílico, madera natural, MDF, cuero y cartón por medio de tecnología láser CO2 de alta potencia.
  * Señalización Corporativa: Diseño, estructuración e instalación de paneles exteriores de aluminio compuesto (ACM), letras corporativas en 3D e iluminación LED de bajo consumo certificada para la intemperie.
  * Producción Audiovisual: Creación de contenido multimedia de alta resolución (hasta 4K/6K), tomas aéreas avanzadas con drones y postproducción digital para campañas promocionales.

## Stack Tecnológico Empleado
* Next.js: Versión 14.2.3, operando bajo el modelo de enrutamiento nativo basado en directorios (App Router) para optimización de renderizado.
* React: Versión 18.3.1 para la construcción de interfaces de usuario interactivas basadas en componentes reactivos y eficientes.
* JavaScript (ES6+): Lenguaje base implementado con modularización limpia y desacoplada de la interfaz lógica.
* CSS Modules: Estilización encapsulada localmente para cada componente (ej. `[Nombre].module.css`), previniendo colisiones de estilos y mejorando el mantenimiento.
* Framer Motion: Librería de animación para crear transiciones fluidas de entrada y salida de elementos, reordenamiento dinámico del portafolio y loops de movimiento infinitos.
* Lucide Icons: Sistema de iconografía vectorial limpia y consistente cargado a través del paquete `@/lucide-react`.

## Arquitectura y Estructura del Proyecto
* `__tests__/`: Directorio central que contiene toda la suite de pruebas unitarias y de integración del proyecto (como `Home.test.js`, `Portfolio.test.js`, `Navbar.test.js`, etc.).
* `app/`: Directorio raíz del App Router de Next.js:
  * `layout.jsx`: Diseño principal global del sitio. Inyecta fuentes web, variables CSS de base y estructura de página.
  * `page.jsx`: Página de inicio principal que orquesta y renderiza cada una de las secciones de la landing page.
* `components/`: Componentes modulares de React con sus hojas de estilo específicas de CSS Modules:
  * `Navbar.jsx` / `Navbar.module.css`: Menú de navegación flotante adaptativo con estados de scroll e interactividad móvil.
  * `Hero.jsx` / `Hero.module.css`: Sección principal de bienvenida con animaciones, subtítulos neón y llamadas a la acción (CTA).
  * `Services.jsx` / `Services.module.css`: Presentación modular del catálogo de servicios con pestañas interactivas y especificaciones técnicas.
  * `Portfolio.jsx` / `Portfolio.module.css`: Galería de proyectos filtrable en tiempo real, conectada con el carrusel de identidad de logos de marca.
  * `About.jsx` / `About.module.css`: Sección de historia corporativa, valores, estadísticas y detalles de manufactura.
  * `Contact.jsx` / `Contact.module.css`: Formulario interactivo de contacto y cotización con validaciones visuales.
  * `Footer.jsx` / `Footer.module.css`: Pie de página estructurado con enlaces legales y redes sociales corporativas.
* `config/`: Archivos de configuración de datos estructurados para desacoplar el contenido de la lógica de interfaz:
  * `portfolio.js`: Define el listado de proyectos reales ejecutados por ROTULAB, su metainformación y rutas físicas de origen.
  * `services.js`: Define el listado completo de servicios, ventajas competitivas, iconos de Lucide asignados y fichas técnicas.
* `design-system/`: Pautas y especificaciones detalladas del sistema de diseño visual de la aplicación (almacenado en `rotulab/MASTER.md`).
* `public/`: Directorio de archivos estáticos servidos públicamente por Next.js (imágenes de portafolio, logotipos de la marca, etc.).
* `styles/`: Contiene `globals.css`, donde se declaran las variables raíz del tema oscuro, fuentes, clases de utilidad y efectos neón/glassmorphism.
* Archivos de Configuración en la Raíz:
  * `package.json` y `package-lock.json`: Controlan las dependencias del ecosistema npm y los scripts del ciclo de vida del desarrollo.
  * `jest.config.js` y `jest.setup.js`: Definen las directrices de Jest, el entorno de DOM virtual y los mocks de APIs del navegador.
  * `jsconfig.json`: Define alias de rutas (como `@/*` apuntando a la raíz) para facilitar importaciones absolutas limpias.

## Especificaciones del Diseño Visual
* Dark Mode Premium por Defecto:
  * Color de Fondo Primario: `#07090e` (`--bg-dark-primary`) que ofrece un lienzo oscuro y elegante para destacar el contenido.
  * Color de Fondo Secundario: `#0f131a` (`--bg-dark-secondary`) para áreas de separación y contraste visual.
  * Fondo de Tarjetas: `rgba(18, 24, 38, 0.6)` (`--bg-card-dark`) con desenfoque de fondo.
  * Bordes Finos: `rgba(255, 255, 255, 0.08)` (`--border-card-dark`) para una apariencia sutil.
* Acentos de Luz Neón:
  * Cian Neón: `#00f0ff` (`--color-cyan-neon` / `--neon-cyan`) con una sombra de resplandor de `rgba(0, 240, 255, 0.15)` (`--color-cyan-glow`) para destacar categorías activas y elementos interactivos secundarios.
  * Naranja Neón: `#ff6a00` (`--color-orange-neon` / `--neon-orange`) con una sombra de resplandor de `rgba(255, 106, 0, 0.15)` (`--color-orange-glow`) para botones principales de conversión y llamadas a la acción (CTA).
* Efectos de Glassmorphism:
  * Clases `.glass-panel` que incorporan `backdrop-filter: blur(12px)` para crear una sensación de capas de cristal sobre el fondo oscuro.
  * Interactividad premium con `.glass-panel-hover` que añade una transición de color de fondo a `rgba(24, 32, 51, 0.8)`, altera el borde a cian neón y añade un sombreado resplandeciente difuminado en cian.
* Accesibilidad Web Integrada:
  * Alto Contraste de Texto: El texto primario de color `#f8fafc` (`--text-primary`) y el secundario `#94a3b8` (`--text-secondary`) garantizan una legibilidad de contraste superior a 4.5:1.
  * Navegación por Teclado Completa: Elementos interactivos con focos visibles claros. Los botones del filtro de portafolio usan el atributo HTML `aria-pressed` para anunciar su estado a tecnologías asistivas.
  * Movimiento Reducido: Respeto estricto del sistema mediante CSS y configuraciones de animación que deshabilitan o simplifican las transiciones si la opción de movimiento reducido del sistema está activa.

## Instrucciones de Instalación y Levantamiento
* Requisitos Previos:
  * Tener instalado Node.js (versión 18.0.0 o superior recomendada) en la máquina de desarrollo.
  * Tener configurado npm en el entorno de línea de comandos.
* Pasos para Levantar el Servidor en Local:
  * Abrir la consola o terminal del sistema operativo.
  * Acceder al directorio del proyecto: `cd /Users/howardemiliosuarezcerrato/Code/rotulab-landing`
  * Ejecutar el comando de instalación de dependencias del proyecto: `npm install`
  * Iniciar el servidor local de desarrollo de Next.js: `npm run dev`
  * Abrir el navegador web en la dirección local correspondiente: `http://localhost:3000`
* Comandos de Producción:
  * Construir la aplicación optimizada para producción: `npm run build`
  * Levantar el servidor local ejecutando la compilación optimizada: `npm run start`

## Configuración y Ejecución de Pruebas (TDD)
* La suite de testing está integrada con Jest y React Testing Library para soportar ciclos de desarrollo basados en pruebas (TDD - Test Driven Development).
* Comandos de Ejecución de Pruebas:
  * Ejecutar el conjunto completo de pruebas unitarias y de integración: `npm run test`
  * Iniciar el modo interactivo de pruebas que reacciona a cambios en los archivos (watch mode): `npm run test:watch`
* Estructura y Funcionamiento Técnico de la Suite de Pruebas:
  * Entorno JSdom: Configurado en `jest.config.js` mediante la propiedad `testEnvironment: 'jest-environment-jsdom'` para simular el comportamiento del DOM del navegador web en entorno NodeJS.
  * Configuración de Alias: Soporte nativo en pruebas para la resolución de rutas mediante alias `@/` mapeados a las carpetas locales de Next.js.
  * Configuraciones Globales (`jest.setup.js`):
    * Importación automática de los matchers de aserción ampliados `@testing-library/jest-dom` para simplificar afirmaciones del tipo `.toBeInTheDocument()` o `.toBeVisible()`.
    * Mock de `next/image` para anular la optimización estática de imágenes de Next.js y renderizar un tag normal `<img>` en el entorno virtual de Node, evitando warnings y fallas de compilación en pruebas.
    * Mock Avanzado de Framer Motion: Desarrollado a través de un Proxy dinámico que intercepta cualquier tag de animación (como `motion.div` o `motion.article`) y lo procesa como un elemento HTML regular de React, eliminando los atributos propios de animación de Framer Motion para eludir advertencias de propiedades no estándar en el DOM simulado de las pruebas.

## Contratos de Datos e Integración Dinámica
* El proyecto promueve un desarrollo modular separando estrictamente la definición de contenidos de los componentes que los renderizan.
* Contrato del Portafolio (`PORTFOLIO_DATA`):
  * Ubicado en `/config/portfolio.js`.
  * Estructurado como un arreglo de objetos que mapea la información de cada proyecto realizado:
    * `id`: Identificador tipo string único por proyecto.
    * `title`: Nombre o título descriptivo del trabajo.
    * `serviceId`: Relación o clave foránea con las categorías de servicios (ej. `dtf`, `nfc`, `3d-printing`, etc.).
    * `description`: Explicación detallada de la técnica, soporte y materiales empleados.
    * `sourceDownloadPath`: Ruta local original del archivo en la carpeta de descargas del desarrollador, lo cual facilita scripts de automatización e importación.
    * `publicUrl`: Ruta estática relativa servida en la carpeta `/public` que usa Next.js para renderizar la imagen real del proyecto.
    * `tags`: Arreglo de palabras clave descriptivas secundarias (ej. `["Textil", "Premium", "Laser"]`).
    * `clientName`: Nombre de la empresa, institución o cliente que solicitó la obra.
    * `year`: Año de realización del proyecto.
* Integración del Carrusel de Logos de Marca (`BRAND_LOGOS`):
  * Definido en `/components/Portfolio.jsx` como una lista que contiene las diferentes variaciones históricas y neón del logo de ROTULAB.
  * Para asegurar una experiencia fluida de bucle infinito en el frontend, el componente duplica programáticamente la lista de logotipos en el DOM, aplicando animaciones CSS horizontales continuas para evitar saltos o parpadeos cuando la fila de imágenes se desplaza en bucle.
