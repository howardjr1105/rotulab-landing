'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/config/portfolio';
import styles from './Portfolio.module.css';

// Categorías de filtro
const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'dtf', label: 'DTF' },
  { id: 'nfc', label: 'NFC' },
  { id: '3d-printing', label: 'Impresión 3D' },
  { id: 'laser-cutting', label: 'Corte Láser' },
  { id: 'signage', label: 'Señalización' },
  { id: 'audiovisual', label: 'Audiovisual' },
];

// Lista de logos de implementaciones de Rotulab para el carrusel
const BRAND_LOGOS = [
  { src: '/images/logos/2026_01_03_09_41_33_IMG_0013.PNG', alt: 'Logo de Rotulab Versión 1' },
  { src: '/images/logos/2026_01_03_11_00_47_IMG_0014.JPG', alt: 'Logo de Rotulab Versión 2' },
  { src: '/images/logos/2026_01_03_11_01_06_IMG_0015.PNG', alt: 'Logo de Rotulab Versión 3' },
  { src: '/images/logos/2026_01_03_11_12_27_IMG_0016.JPG', alt: 'Logo de Rotulab Versión Alta Resolución' },
  { src: '/images/logos/2026_01_03_11_14_38_IMG_0017.PNG', alt: 'Logo de Rotulab Versión Redonda' },
  { src: '/images/logos/2026_01_03_11_15_00_IMG_0018.PNG', alt: 'Logo de Rotulab Oficial Transparente' },
  { src: '/images/logos/2026_01_05_16_30_29_IMG_0053.PNG', alt: 'Logo de Rotulab Concepto Líneas' },
  { src: '/images/logos/2026_01_05_16_30_33_IMG_0054.PNG', alt: 'Logo de Rotulab Concepto Placa' },
  { src: '/images/logos/2026_01_05_16_30_41_IMG_0055.PNG', alt: 'Logo de Rotulab Concepto Sello' },
  { src: '/images/logos/2026_01_05_16_34_57_IMG_0056.PNG', alt: 'Logo de Rotulab Variación Oscura' },
  { src: '/images/logos/2026_01_05_16_35_32_IMG_0057.PNG', alt: 'Logo de Rotulab Variación Neón' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('todos');

  // Filtrado de proyectos
  const filteredProjects = filter === 'todos' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(project => project.serviceId === filter);

  return (
    <section id="portafolio" className={styles.portfolio} data-testid="portfolio-section">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Casos De Éxito</span>
          <h2 className={styles.title}>Portafolio de Trabajos</h2>
        </div>

        {/* Botones de Filtro */}
        <div className={styles.filterContainer}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`${styles.filterBtn} ${filter === cat.id ? styles.filterBtnActive : ''}`}
              aria-pressed={filter === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Imagen del proyecto */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.publicUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.projectImage}
                    priority={project.id === 'camisetas-corp-dtf'}
                  />
                </div>

                {/* Contenido de la Tarjeta */}
                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  <div className={styles.cardFooter}>
                    <span className={styles.clientName}>{project.clientName}</span>
                    <span className={styles.projectYear}>{project.year}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Sección Carrusel de Logos */}
        <div className={styles.carouselSection}>
          <h3 className={styles.carouselTitle}>Nuestra Identidad Visual</h3>
          
          <div className={styles.carouselWrapper} data-testid="brand-carousel">
            <div className={styles.carouselTrack}>
              {/* Primer set de logos */}
              {BRAND_LOGOS.map((logo, index) => (
                <div key={`logo-1-${index}`} className={styles.logoItem}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="120px"
                    className={styles.logoImg}
                  />
                </div>
              ))}
              {/* Set duplicado para loop infinito */}
              {BRAND_LOGOS.map((logo, index) => (
                <div key={`logo-2-${index}`} className={styles.logoItem}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="120px"
                    className={styles.logoImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
