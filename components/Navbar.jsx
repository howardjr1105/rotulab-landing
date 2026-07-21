'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { getBusinessConfig } from '@/config/business';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';

const DICT = {
  es: {
    closeMenu: 'Cerrar menú',
    openMenu: 'Abrir menú'
  },
  en: {
    closeMenu: 'Close menu',
    openMenu: 'Open menu'
  }
};

export default function Navbar({ lang = 'es' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = DICT[lang] || DICT['es'];

  // Load config dynamically based on language
  const config = getBusinessConfig(lang);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo de la Marca */}
        <Link href={`/${lang}`} className={styles.logoContainer} onClick={closeMenu}>
          <Image
            src="/images/logos/2026_01_03_11_15_00_IMG_0018.PNG"
            alt="Logo de Rotulab"
            width={40}
            height={40}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>
            ROTULAB
          </span>
        </Link>

        {/* Enlaces de Navegación de Escritorio */}
        <ul className={styles.navLinks}>
          {config.navigation.map((link) => {
            const localizedPath = link.path === '/' ? `/${lang}` : `/${lang}${link.path}`;
            const isActive = pathname === localizedPath || pathname === `${localizedPath}/`;
            return (
              <li key={link.path}>
                <Link 
                  href={localizedPath} 
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        {/* Botón de Menú Móvil */}
        <button
          onClick={toggleMenu}
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls="mobile-menu-nav"
          aria-label={isOpen ? t.closeMenu : t.openMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú de Navegación Móvil */}
        {isOpen && (
          <div id="mobile-menu-nav" className={`${styles.mobileMenu} ${styles.mobileMenuOpen}`}>
            <ul className={styles.mobileNavLinks}>
              {config.navigation.map((link) => {
                const localizedPath = link.path === '/' ? `/${lang}` : `/${lang}${link.path}`;
                const isActive = pathname === localizedPath || pathname === `${localizedPath}/`;
                return (
                  <li key={link.path}>
                    <Link
                      href={localizedPath}
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className={styles.mobileNavLink}>
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
