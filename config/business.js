/**
 * Configuración de negocio centralizada para ROTULAB.
 * Contiene información de contacto, enlaces a redes sociales y mapa de rutas.
 */

const staticData = {
  name: 'ROTULAB',
  legalName: 'ROTULAB LLC',
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE || '+1 (828) 636-8793',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || 'https://wa.me/18286368793',
    email: process.env.NEXT_PUBLIC_EMAIL || 'rotulab28@gmail.com',
  },
  social: {
    facebook: {
      url: process.env.NEXT_PUBLIC_FACEBOOK || 'https://www.facebook.com/profile.php?id=61585802559341',
      colors: {
        hoverBg: 'rgba(24, 119, 242, 0.1)',
        hoverBorder: '#1877f2',
        hoverShadow: '0 0 15px rgba(24, 119, 242, 0.3)',
      }
    },
    instagram: {
      url: process.env.NEXT_PUBLIC_INSTAGRAM || 'https://www.instagram.com/rotu.lab',
      colors: {
        hoverBg: 'rgba(225, 48, 108, 0.1)',
        hoverBorder: '#e1306c',
        hoverShadow: '0 0 15px rgba(225, 48, 108, 0.3)',
      }
    },
    whatsapp: {
      url: process.env.NEXT_PUBLIC_WHATSAPP || 'https://wa.me/18286368793',
      colors: {
        hoverBg: 'rgba(37, 211, 102, 0.1)',
        hoverBorder: '#25d366',
        hoverShadow: '0 0 15px rgba(37, 211, 102, 0.3)',
      }
    },
    tiktok: {
      url: process.env.NEXT_PUBLIC_TIKTOK || 'https://www.tiktok.com/@rotulab6?_r=1&_t=ZT-96v7ldQJ',
      colors: {
        hoverBg: 'rgba(255, 255, 255, 0.08)',
        hoverBorder: '#ffffff',
        hoverShadow: '0 0 15px rgba(255, 255, 255, 0.4), -3px -3px 5px rgba(0, 242, 254, 0.3), 3px 3px 5px rgba(254, 9, 121, 0.3)',
      }
    }
  }
};

const i18nData = {
  es: {
    tagline: 'Somos especialistas en imagen comercial y publicidad visual para tiendas y empresas.',
    description: 'Convertimos fachadas y vitrinas en herramientas de venta.',
    address: 'Asheville, Carolina del Norte, USA',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM | Sábados: 8:00 AM - 12:00 PM',
    socialLabels: {
      facebook: 'Facebook de Rotulab',
      instagram: 'Instagram de Rotulab',
      whatsapp: 'Whatsapp de Rotulab',
      tiktok: 'TikTok de Rotulab'
    },
    navigation: [
      { name: 'Inicio', path: '/' },
      { name: 'Nosotros', path: '/nosotros' },
      { name: 'Servicios', path: '/servicios' },
      { name: 'Portafolio', path: '/portafolio' },
      { name: 'Contacto', path: '/contacto' },
    ]
  },
  en: {
    tagline: 'We are specialists in commercial image and visual advertising for stores and businesses.',
    description: 'We turn facades and windows into sales tools.',
    address: 'Asheville, North Carolina, USA',
    schedule: 'Monday to Friday: 8:00 AM - 5:00 PM | Saturdays: 8:00 AM - 12:00 PM',
    socialLabels: {
      facebook: 'Rotulab Facebook',
      instagram: 'Rotulab Instagram',
      whatsapp: 'Rotulab Whatsapp',
      tiktok: 'Rotulab TikTok'
    },
    navigation: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/nosotros' },
      { name: 'Services', path: '/servicios' },
      { name: 'Portfolio', path: '/portafolio' },
      { name: 'Contact', path: '/contacto' },
    ]
  }
};

export const getBusinessConfig = (lang = 'es') => {
  const data = i18nData[lang] || i18nData['es'];
  return {
    ...staticData,
    tagline: data.tagline,
    description: data.description,
    contact: {
      ...staticData.contact,
      address: data.address,
      schedule: data.schedule,
    },
    social: {
      facebook: { ...staticData.social.facebook, label: data.socialLabels.facebook },
      instagram: { ...staticData.social.instagram, label: data.socialLabels.instagram },
      whatsapp: { ...staticData.social.whatsapp, label: data.socialLabels.whatsapp },
      tiktok: { ...staticData.social.tiktok, label: data.socialLabels.tiktok },
    },
    navigation: data.navigation,
  };
};
