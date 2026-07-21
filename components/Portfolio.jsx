'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/config/portfolio';
import styles from './Portfolio.module.css';

const LABEL_MAP = {
  'design': 'Diseño',
  'fabrication-3d': 'Fabricación 3D',
  'nfc': 'Tarjetas Inteligentes',
  'dtf': 'DTF',
  'signage': 'Rotulación',
  'audiovisual': 'Audiovisual'
};

// Generar categorías dinámicamente basadas en los proyectos actuales
const uniqueServiceIds = [...new Set(PORTFOLIO_DATA.map(p => p.serviceId))];
const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  ...uniqueServiceIds.map(id => ({ 
    id, 
    label: LABEL_MAP[id] || id 
  }))
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
      </div>
    </section>
  );
}
