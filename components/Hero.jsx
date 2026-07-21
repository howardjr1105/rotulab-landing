'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { businessConfig } from '@/config/business';
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
          {businessConfig.name}
          <span className={styles.titleHighlight}>
            Innovación en Publicidad
          </span>
        </motion.h1>

        {/* Subtítulo descriptivo */}
        <motion.p className={styles.subtitle} variants={itemVariants}>
          {businessConfig.tagline} {businessConfig.description}
        </motion.p>

        {/* CTAs */}
        <motion.div className={styles.ctaContainer} variants={itemVariants}>
          <Link href="/servicios" className={`${styles.btn} ${styles.btnCyan}`}>
            Ver Servicios
            <ArrowRight size={18} />
          </Link>
          <Link href="/contacto" className={`${styles.btn} ${styles.btnOutline}`}>
            Contáctanos
            <MessageSquare size={18} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
