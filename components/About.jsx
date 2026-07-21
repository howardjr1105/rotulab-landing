'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/icons/SocialIcons';
import { getBusinessConfig } from '@/config/business';
import styles from './About.module.css';

const DICT = {
  es: {
    statPrecision: 'Precisión',
    statTech: 'Tecnología',
    statMod: 'Modelado',
    statPrint: 'Impresión',
    title: '¿Quiénes Somos?',
    desc1: 'es una empresa vanguardista especializada en soluciones integrales de publicidad, rotulación y fabricación digital. Nuestro enfoque combina el ',
    desc2: ' gráfico de alta precisión con tecnología de punta para materializar la identidad visual de marcas y negocios. Desde la conceptualización hasta el producto final, transformamos ideas en piezas tangibles, funcionales y de alto impacto estético.',
    desc3: 'Destacamos por no ser una agencia de publicidad tradicional; integramos flujos de trabajo modernos, maquinaria de última generación y soluciones interactivas para ofrecer a nuestros clientes productos que no solo se ven bien, sino que conectan con su audiencia en la era digital mediante constante ',
    desc4: ' y excelente ',
    wordDesign: 'diseño',
    wordInnovation: 'innovación',
    wordQuality: 'calidad',
    missionTitle: 'Misión',
    missionText: 'Fusionar el arte del diseño tradicional con las herramientas tecnológicas de fabricación más eficientes y modernas del mercado, garantizando que cada pieza creada cumpla con altos estándares de precisión y conecte significativamente a las marcas con sus audiencias.',
    visionTitle: 'Visión',
    visionText: 'Liderar el sector como el aliado estratégico preferido de empresas y emprendedores en la era digital. Aspiramos a ser el referente en innovación y tecnología en fabricación digital, transformando ideas complejas en realidades físicas y construyendo el futuro del merchandising y la señalización comercial.',
    socialTitle: 'Conecta Con Nosotros'
  },
  en: {
    statPrecision: 'Precision',
    statTech: 'Technology',
    statMod: 'Modeling',
    statPrint: 'Printing',
    title: 'Who Are We?',
    desc1: 'is a state-of-the-art company specialized in comprehensive advertising, signage, and digital fabrication solutions. Our approach combines high-precision graphic ',
    desc2: ' with cutting-edge technology to materialize the visual identity of brands and businesses. From conceptualization to the final product, we transform ideas into tangible, functional, and highly aesthetic pieces.',
    desc3: 'We stand out by not being a traditional advertising agency; we integrate modern workflows, latest-generation machinery, and interactive solutions to offer our clients products that not only look good, but connect with their audience in the digital age through constant ',
    desc4: ' and excellent ',
    wordDesign: 'design',
    wordInnovation: 'innovation',
    wordQuality: 'quality',
    missionTitle: 'Mission',
    missionText: 'To merge the art of traditional design with the most efficient and modern technological manufacturing tools on the market, ensuring that each piece created meets high precision standards and meaningfully connects brands with their audiences.',
    visionTitle: 'Vision',
    visionText: 'To lead the sector as the preferred strategic ally of companies and entrepreneurs in the digital age. We aspire to be the benchmark for innovation and technology in digital manufacturing, transforming complex ideas into physical realities and building the future of merchandising and commercial signage.',
    socialTitle: 'Connect With Us'
  }
};

export default function About({ lang = 'es' }) {
  const t = DICT[lang] || DICT['es'];
  const businessConfig = getBusinessConfig(lang);
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
                <span className={styles.statLabel}>{t.statPrecision}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>NFC</span>
                <span className={styles.statLabel}>{t.statTech}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3D</span>
                <span className={styles.statLabel}>{t.statMod}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>DTF</span>
                <span className={styles.statLabel}>{t.statPrint}</span>
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
              <h2 className={styles.title}>{t.title}</h2>
            </div>
            <p className={styles.description}>
              <span className={styles.descriptionHighlight}>Rotulab</span> {t.desc1}<span className={styles.descriptionHighlight}>{t.wordDesign}</span>{t.desc2}
            </p>
            <p className={styles.description}>
              {t.desc3}<span className={styles.descriptionHighlight}>{t.wordInnovation}</span>{t.desc4}<span className={styles.descriptionHighlight}>{t.wordQuality}</span>.
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
              '--card-hover-shadow': 'rgba(227, 6, 19, 0.2)',
            }}
          >
            <div className={`${styles.cardIcon} ${styles.cardIconCyan}`}>
              <Target size={24} />
            </div>
            <h3 className={styles.cardTitle}>{t.missionTitle}</h3>
            <p className={styles.cardText}>
              {t.missionText}
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
              '--card-hover-shadow': 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className={`${styles.cardIcon} ${styles.cardIconOrange}`}>
              <Eye size={24} />
            </div>
            <h3 className={styles.cardTitle}>{t.visionTitle}</h3>
            <p className={styles.cardText}>
              {t.visionText}
            </p>
          </motion.div>
        </div>

        {/* Sección de Redes Sociales del Negocio */}
        <motion.div
          className={styles.socialSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
          <h3 className={styles.socialTitle}>{t.socialTitle}</h3>
          <div className={styles.socialLinks}>
            {/* Instagram */}
            <a
              href={businessConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={businessConfig.social.instagram.label}
              style={{
                '--social-hover-bg': businessConfig.social.instagram.colors.hoverBg,
                '--social-hover-border': businessConfig.social.instagram.colors.hoverBorder,
                '--social-hover-shadow': businessConfig.social.instagram.colors.hoverShadow,
              }}
            >
              <InstagramIcon size={20} />
              Instagram
            </a>

            {/* Facebook */}
            <a
              href={businessConfig.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={businessConfig.social.facebook.label}
              style={{
                '--social-hover-bg': businessConfig.social.facebook.colors.hoverBg,
                '--social-hover-border': businessConfig.social.facebook.colors.hoverBorder,
                '--social-hover-shadow': businessConfig.social.facebook.colors.hoverShadow,
              }}
            >
              <FacebookIcon size={20} />
              Facebook
            </a>

            {/* TikTok */}
            <a
              href={businessConfig.social.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={businessConfig.social.tiktok.label}
              style={{
                '--social-hover-bg': businessConfig.social.tiktok.colors.hoverBg,
                '--social-hover-border': businessConfig.social.tiktok.colors.hoverBorder,
                '--social-hover-shadow': businessConfig.social.tiktok.colors.hoverShadow,
              }}
            >
              <TikTokIcon size={20} />
              TikTok
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
