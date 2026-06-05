'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="nosotros" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Lado Izquierdo: Showcase Técnico */}
          <motion.div
            className={styles.visualPanel}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariants}
          >
            <div className={styles.statGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Precisión</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>NFC</span>
                <span className={styles.statLabel}>Tecnología</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3D</span>
                <span className={styles.statLabel}>Modelado</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>DTF</span>
                <span className={styles.statLabel}>Impresión</span>
              </div>
            </div>
          </motion.div>

          {/* Lado Derecho: Contenido */}
          <motion.div
            className={styles.content}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariants}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.subtitle}>Ecosistema de Fabricación</span>
              <h2 className={styles.title}>¿Quiénes Somos?</h2>
            </div>
            <p className={styles.description}>
              <span className={styles.descriptionHighlight}>Rotulab</span> es una empresa vanguardista especializada en soluciones integrales de publicidad, rotulación y fabricación digital. Nuestro enfoque combina el <span className={styles.descriptionHighlight}>diseño</span> gráfico de alta precisión con tecnología de punta para materializar la identidad visual de marcas y negocios. Desde la conceptualización hasta el producto final, transformamos ideas en piezas tangibles, funcionales y de alto impacto estético.
            </p>
            <p className={styles.description}>
              Destacamos por no ser una agencia de publicidad tradicional; integramos flujos de trabajo modernos, maquinaria de última generación y soluciones interactivas para ofrecer a nuestros clientes productos que no solo se ven bien, sino que conectan con su audiencia en la era digital mediante constante <span className={styles.descriptionHighlight}>innovación</span> y excelente <span className={styles.descriptionHighlight}>calidad</span>.
            </p>
          </motion.div>
        </div>

        {/* Tarjetas de Misión y Visión */}
        <div className={styles.mvGrid}>
          {/* Misión */}
          <motion.div
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            style={{
              '--card-hover-border': 'var(--neon-cyan)',
              '--card-hover-shadow': 'rgba(0, 240, 255, 0.1)',
            }}
          >
            <div className={`${styles.cardIcon} ${styles.cardIconCyan}`}>
              <Target size={24} />
            </div>
            <h3 className={styles.cardTitle}>Misión</h3>
            <p className={styles.cardText}>
              Fusionar el arte del diseño tradicional con las herramientas tecnológicas de fabricación más eficientes y modernas del mercado, garantizando que cada pieza creada cumpla con altos estándares de precisión y conecte significativamente a las marcas con sus audiencias.
            </p>
          </motion.div>
 
          {/* Visión */}
          <motion.div
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            style={{
              '--card-hover-border': 'var(--neon-orange)',
              '--card-hover-shadow': 'rgba(255, 90, 0, 0.1)',
            }}
          >
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <Eye size={24} />
            </div>
            <h3 className={styles.cardTitle}>Visión</h3>
            <p className={styles.cardText}>
              Liderar el sector como el aliado estratégico preferido de empresas y emprendedores en la era digital. Aspiramos a ser el referente en innovación y tecnología en fabricación digital, transformando ideas complejas en realidades físicas y construyendo el futuro del merchandising y la señalización comercial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
