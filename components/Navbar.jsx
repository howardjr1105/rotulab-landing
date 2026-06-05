'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
        <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
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
          {businessConfig.navigation.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path}>
                <Link 
                  href={link.path} 
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Botón de Menú Móvil */}
        <button
          onClick={toggleMenu}
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls="mobile-menu-nav"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú de Navegación Móvil */}
        {isOpen && (
          <div id="mobile-menu-nav" className={`${styles.mobileMenu} ${styles.mobileMenuOpen}`}>
            <ul className={styles.mobileNavLinks}>
              {businessConfig.navigation.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
