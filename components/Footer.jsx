'use client';

import Image from 'next/image';
import { Facebook, Instagram, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Columna Marca */}
        <div className={styles.brandCol}>
          <a href="#inicio" className={styles.logoContainer}>
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
          </a>
          <p className={styles.brandDesc}>
            Innovación en publicidad, rotulación y fabricación digital de alta precisión. Materializamos tus ideas.
          </p>
        </div>

        {/* Columna Enlaces Rápidos */}
        <div>
          <h4 className={styles.title}>Navegación</h4>
          <ul className={styles.links}>
            <li>
              <a href="#inicio" className={styles.link}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className={styles.link}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#servicios" className={styles.link}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#portafolio" className={styles.link}>
                Portafolio
              </a>
            </li>
            <li>
              <a href="#contacto" className={styles.link}>
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Columna Contacto & Redes */}
        <div>
          <h4 className={styles.title}>Redes Sociales</h4>
          <div className={styles.socialLinks}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Facebook de Rotulab"
              style={{
                '--social-hover-bg': 'rgba(24, 119, 242, 0.1)',
                '--social-hover-border': '#1877f2',
                '--social-hover-shadow': '0 0 15px rgba(24, 119, 242, 0.3)',
              }}
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram de Rotulab"
              style={{
                '--social-hover-bg': 'rgba(225, 48, 108, 0.1)',
                '--social-hover-border': '#e1306c',
                '--social-hover-shadow': '0 0 15px rgba(225, 48, 108, 0.3)',
              }}
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/50588888888"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Whatsapp de Rotulab"
              style={{
                '--social-hover-bg': 'rgba(37, 211, 102, 0.1)',
                '--social-hover-border': '#25d366',
                '--social-hover-shadow': '0 0 15px rgba(37, 211, 102, 0.3)',
              }}
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className={styles.bottomBar}>
        <span className={styles.copyright}>
          &copy; {currentYear} <span style={{ color: '#ffffff', fontWeight: 600 }}>ROTULAB</span>. Todos los derechos reservados.
        </span>
        <span className={styles.copyright} style={{ fontSize: '0.8rem' }}>
          Diseño e Innovación Digital
        </span>
      </div>
    </footer>
  );
}
