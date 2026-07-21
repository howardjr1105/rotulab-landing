'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from '@/components/icons/SocialIcons';
import { businessConfig } from '@/config/business';
import styles from './Footer.module.css';

// Mapeador de iconos para redes sociales
const getSocialIcon = (platform, size = 20) => {
  switch (platform) {
    case 'facebook': return <FacebookIcon size={size} />;
    case 'instagram': return <InstagramIcon size={size} />;
    case 'whatsapp': return <WhatsAppIcon size={size} />;
    case 'tiktok': return <TikTokIcon size={size} />;
    default: return null;
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Columna Marca */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logoContainer}>
            <Image
              src="/images/logos/2026_01_03_11_15_00_IMG_0018.PNG"
              alt="Logo de Rotulab"
              width={35}
              height={35}
              className={styles.logoImage}
            />
            <span className={styles.logoText}>
              ROTU<span className={styles.logoTextSpan}>LAB</span>
            </span>
          </Link>
          <p className={styles.brandDesc}>
            {businessConfig.tagline}
          </p>
        </div>

        {/* Columna Enlaces Rápidos */}
        <div>
          <h4 className={styles.title}>Navegación</h4>
          <ul className={styles.links}>
            {businessConfig.navigation.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className={styles.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna Contacto */}
        <div>
          <h4 className={styles.title}>Contacto</h4>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <span>{businessConfig.contact.phone}</span>
            </li>
            <li className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <a href={`mailto:${businessConfig.contact.email}`} className={styles.contactLink}>
                {businessConfig.contact.email}
              </a>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <span>{businessConfig.contact.address}</span>
            </li>
          </ul>
        </div>

        {/* Columna Redes Sociales */}
        <div>
          <h4 className={styles.title}>Redes Sociales</h4>
          <div className={styles.socialLinks}>
            {Object.keys(businessConfig.social).map((platform) => {
              const socialData = businessConfig.social[platform];
              return (
                <a
                  key={platform}
                  href={socialData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={socialData.label}
                  style={{
                    '--social-hover-bg': socialData.colors.hoverBg,
                    '--social-hover-border': socialData.colors.hoverBorder,
                    '--social-hover-shadow': socialData.colors.hoverShadow,
                  }}
                >
                  {getSocialIcon(platform, 20)}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className={styles.bottomBar}>
        <span className={styles.copyright}>
          &copy; {currentYear} <span style={{ color: '#ffffff', fontWeight: 600 }}>{businessConfig.legalName}</span>. Todos los derechos reservados.
        </span>
        <span className={styles.copyright} style={{ fontSize: '0.8rem' }}>
          Diseño e Innovación Digital
        </span>
      </div>
    </footer>
  );
}
