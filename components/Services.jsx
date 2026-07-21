'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, Cpu, Layers, Scissors, MapPin, Video, X, Check, Activity, Palette } from 'lucide-react';
import { getServices } from '@/config/services';
import styles from './Services.module.css';

// Mapeo de strings de iconos a componentes reales de Lucide
const getIcon = (iconName, color = 'currentColor') => {
  const props = { size: 24, stroke: color };
  switch (iconName) {
    case 'Shirt': return <Shirt {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'Scissors': return <Scissors {...props} />;
    case 'MapPin': return <MapPin {...props} />;
    case 'Video': return <Video {...props} />;
    case 'Palette': return <Palette {...props} />;
    default: return <Cpu {...props} />;
  }
};

// Mapeo de colores neón por servicio
const getNeonColors = (serviceId) => {
  return {
    accent: '#e30613', // Rojo oficial de ROTULAB
    bgOpacity: 'rgba(227, 6, 19, 0.1)',
    glow: 'rgba(227, 6, 19, 0.25)',
  };
};

const DICT = {
  es: {
    subtitle: 'Lo Que Ofrecemos',
    title: 'Nuestros Servicios',
    btnSpecs: 'Ver especificaciones',
    modalAriaClose: 'Cerrar modal',
    specsTitle: 'Especificaciones Técnicas',
    featuresTitle: 'Características del Servicio'
  },
  en: {
    subtitle: 'What We Offer',
    title: 'Our Services',
    btnSpecs: 'View specifications',
    modalAriaClose: 'Close modal',
    specsTitle: 'Technical Specifications',
    featuresTitle: 'Service Features'
  }
};

export default function Services({ lang = 'es' }) {
  const t = DICT[lang] || DICT['es'];
  const servicesData = getServices(lang);
  
  const [activeService, setActiveService] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="servicios" className={styles.services} data-testid="services-section">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>{t.subtitle}</span>
          <h2 className={styles.title}>{t.title}</h2>
        </div>

        {/* Grid de Tarjetas */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {servicesData.map((service) => {
            const colors = getNeonColors(service.id);
            return (
              <motion.article
                key={service.id}
                className={styles.card}
                variants={cardVariants}
                style={{
                  '--card-hover-border': colors.accent,
                  '--card-hover-shadow': `0 10px 30px ${colors.glow}`,
                  '--btn-border': 'rgba(255, 255, 255, 0.1)',
                  '--btn-hover-bg': colors.bgOpacity,
                  '--btn-hover-border': colors.accent,
                  '--btn-hover-shadow': `0 0 15px ${colors.glow}`,
                }}
              >
                {/* Icono con fondo neón */}
                <div
                  className={styles.cardIcon}
                  style={{
                    backgroundColor: colors.bgOpacity,
                    color: colors.accent,
                    boxShadow: `0 0 10px ${colors.glow}`,
                  }}
                >
                  {getIcon(service.icon, colors.accent)}
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.shortDescription}</p>

                <button
                  className={styles.btnSpecs}
                  onClick={() => setActiveService(service)}
                >
                  {t.btnSpecs}
                </button>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Modal de Especificaciones */}
        <AnimatePresence>
          {activeService && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
            >
              <motion.div
                className={styles.modalContent}
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={styles.modalHeader}>
                  <h3 className={styles.modalTitle}>
                    <span
                      style={{
                        color: getNeonColors(activeService.id).accent,
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      {getIcon(activeService.icon, getNeonColors(activeService.id).accent)}
                    </span>
                    {activeService.title}
                  </h3>
                  <button
                    className={styles.modalCloseBtn}
                    onClick={() => setActiveService(null)}
                    aria-label={t.modalAriaClose}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className={styles.modalBody}>
                  <p className={styles.modalDesc}>
                    {activeService.detailedDescription}
                  </p>

                  {/* Especificaciones Técnicas */}
                  <h4 className={styles.specsTitle}>
                    <Activity size={18} style={{ color: getNeonColors(activeService.id).accent }} />
                    {t.specsTitle}
                  </h4>
                  <ul className={styles.specsList}>
                    {activeService.specifications.map((spec, i) => (
                      <li key={i} className={styles.specItem}>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  {/* Características */}
                  <h4 className={styles.featuresTitle}>{t.featuresTitle}</h4>
                  <ul className={styles.featuresList}>
                    {activeService.features.map((feature, i) => (
                      <li key={i} className={styles.featureItem}>
                        <Check
                          size={16}
                          className={styles.featureBullet}
                          style={{ color: getNeonColors(activeService.id).accent }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
