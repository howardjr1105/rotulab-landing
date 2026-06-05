'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#inicio" className={styles.logoContainer} onClick={closeMenu}>
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
        </a>

        {/* Enlaces de Navegación de Escritorio */}
        <ul className={styles.navLinks}>
          <li>
            <a href="#inicio" className={styles.navLink}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#nosotros" className={styles.navLink}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#servicios" className={styles.navLink}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#portafolio" className={styles.navLink}>
              Portafolio
            </a>
          </li>
          <li>
            <a href="#contacto" className={styles.navLink}>
              Contacto
            </a>
          </li>
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

        {/* Menú de Navegación Móvil (Condicionado para evitar duplicación de enlaces en el DOM inicial) */}
        {isOpen && (
          <div id="mobile-menu-nav" className={`${styles.mobileMenu} ${styles.mobileMenuOpen}`}>
            <ul className={styles.mobileNavLinks}>
              <li>
                <a href="#inicio" className={styles.mobileNavLink} onClick={closeMenu}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className={styles.mobileNavLink} onClick={closeMenu}>
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className={styles.mobileNavLink} onClick={closeMenu}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portafolio" className={styles.mobileNavLink} onClick={closeMenu}>
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#contacto" className={styles.mobileNavLink} onClick={closeMenu}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
