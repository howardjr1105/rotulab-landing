/**
 * Configuración de negocio centralizada para ROTULAB.
 * Contiene información de contacto, enlaces a redes sociales y mapa de rutas.
 */
export const businessConfig = {
  name: 'ROTULAB',
  legalName: 'ROTULAB LLC',
  tagline: 'Somos especialistas en imagen comercial y publicidad visual para tiendas y empresas.',
  description: 'Convertimos fachadas y vitrinas en herramientas de venta.',
  contact: {
    phone: '+1 (828) 636-8793',
    whatsapp: 'https://wa.me/18286368793',
    email: 'roulan628@gmail.com',
    address: 'Asheville, Carolina del Norte, USA',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM | Sábados: 8:00 AM - 12:00 PM',
  },
  social: {
    facebook: {
      url: 'https://www.facebook.com/profile.php?id=61585802559341',
      label: 'Facebook de Rotulab',
      colors: {
        hoverBg: 'rgba(24, 119, 242, 0.1)',
        hoverBorder: '#1877f2',
        hoverShadow: '0 0 15px rgba(24, 119, 242, 0.3)',
      }
    },
    instagram: {
      url: 'https://www.instagram.com/rotu.lab',
      label: 'Instagram de Rotulab',
      colors: {
        hoverBg: 'rgba(225, 48, 108, 0.1)',
        hoverBorder: '#e1306c',
        hoverShadow: '0 0 15px rgba(225, 48, 108, 0.3)',
      }
    },
    whatsapp: {
      url: 'https://wa.me/18286368793',
      label: 'Whatsapp de Rotulab',
      colors: {
        hoverBg: 'rgba(37, 211, 102, 0.1)',
        hoverBorder: '#25d366',
        hoverShadow: '0 0 15px rgba(37, 211, 102, 0.3)',
      }
    },
    tiktok: {
      url: 'https://www.tiktok.com/@rotulab6?_r=1&_t=ZT-96v7ldQJ',
      label: 'TikTok de Rotulab',
      colors: {
        hoverBg: 'rgba(255, 255, 255, 0.08)',
        hoverBorder: '#ffffff',
        hoverShadow: '0 0 15px rgba(255, 255, 255, 0.4), -3px -3px 5px rgba(0, 242, 254, 0.3), 3px 3px 5px rgba(254, 9, 121, 0.3)',
      }
    }
  },
  navigation: [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Portafolio', path: '/portafolio' },
    { name: 'Contacto', path: '/contacto' },
  ]
};
