'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getBusinessConfig } from '@/config/business';
import styles from './Hero.module.css';

const DICT = {
  es: {
    badge: 'Fabricación Digital de Vanguardia',
    titleHighlight: 'Innovación en Publicidad',
    btnServices: 'Ver Servicios',
    btnContact: 'Contáctanos'
  },
  en: {
    badge: 'State-of-the-art Digital Fabrication',
    titleHighlight: 'Innovation in Advertising',
    btnServices: 'View Services',
    btnContact: 'Contact Us'
  }
};

export default function Hero({ lang = 'es' }) {
  const t = DICT[lang] || DICT['es'];
  const businessConfig = getBusinessConfig(lang);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="inicio" className={styles.hero}>
      {/* Nebulosas neón difusas */}
      <div className={`${styles.neonBlob} ${styles.blobCyan}`}></div>
      <div className={`${styles.neonBlob} ${styles.blobOrange}`}></div>

      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge superior */}
        <motion.div className={styles.badge} variants={itemVariants}>
          {t.badge}
        </motion.div>

        {/* Logo gigante centrado */}
        <motion.div className={styles.heroLogo} variants={itemVariants}>
          <motion.div
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            variants={{
              idle: { scale: 1 },
              hover: { scale: 1.08 },
              tap: { scale: 0.95 }
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ cursor: 'pointer', position: 'relative', display: 'inline-block' }}
          >
            {/* Capa de Resplandor (Glow Orgánico) */}
            <motion.div
              variants={{
                idle: { opacity: 0.3, filter: "blur(12px) brightness(1.2)" },
                hover: { opacity: 0.9, filter: "blur(18px) brightness(1.8)" },
                tap: { opacity: 0.5, filter: "blur(8px) brightness(1.4)" }
              }}
              style={{ position: 'absolute', top: 0, left: 0, mixBlendMode: 'screen', zIndex: 1 }}
            >
              <Image 
                src="/images/logos/2026_01_05_16_30_33_IMG_0054.PNG" 
                alt="Glow ROTULAB" 
                width={400} 
                height={174}
                style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
              />
            </motion.div>

            {/* Capa Frontal (Logo Principal sin fondo negro) */}
            <motion.div style={{ mixBlendMode: 'screen', position: 'relative', zIndex: 2 }}>
              <Image 
                src="/images/logos/2026_01_05_16_30_33_IMG_0054.PNG" 
                alt="Logotipo de ROTULAB" 
                width={400} 
                height={174}
                style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          className={styles.title} 
          variants={itemVariants}
          aria-label={`${businessConfig.name} ${t.titleHighlight}`}
        >
          <span className={styles.titleHighlight} aria-hidden="true">
            {t.titleHighlight}
          </span>
        </motion.h1>

        {/* Subtítulo descriptivo */}
        <motion.p className={styles.subtitle} variants={itemVariants}>
          {businessConfig.tagline} {businessConfig.description}
        </motion.p>

        {/* CTAs */}
        <motion.div className={styles.ctaContainer} variants={itemVariants}>
          <Link href={`/${lang}/servicios`} className={`${styles.btn} ${styles.btnCyan}`}>
            {t.btnServices}
            <ArrowRight size={18} />
          </Link>
          <Link href={`/${lang}/contacto`} className={`${styles.btn} ${styles.btnOutline}`}>
            {t.btnContact}
            <MessageSquare size={18} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
