'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
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
          Fabricación Digital de Vanguardia
        </motion.div>

        {/* Título Principal */}
        <motion.h1 className={styles.title} variants={itemVariants}>
          ROTULAB
          <span className={styles.titleHighlight}>
            Innovación en Publicidad
          </span>
        </motion.h1>

        {/* Subtítulo descriptivo */}
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Materializamos la identidad visual de tu marca mediante{' '}
          <span className={styles.subtitleHighlight}>innovación visual</span> y{' '}
          <span className={styles.subtitleHighlight}>
            soluciones tecnológicas de vanguardia
          </span>
          . Desde diseño digital hasta piezas físicas interactivas en 3D, NFC y corte láser.
        </motion.p>

        {/* CTAs */}
        <motion.div className={styles.ctaContainer} variants={itemVariants}>
          <a href="#servicios" className={`${styles.btn} ${styles.btnCyan}`}>
            Ver Servicios
            <ArrowRight size={18} />
          </a>
          <a href="#contacto" className={`${styles.btn} ${styles.btnOutline}`}>
            Contáctanos
            <MessageSquare size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
