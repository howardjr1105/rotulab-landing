'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { getBusinessConfig } from '@/config/business';
import styles from './Contact.module.css';

const DICT = {
  es: {
    subtitle: 'Comencemos Tu Proyecto',
    title: 'Contáctanos',
    infoTitle: '¿Tienes una idea en mente?',
    infoText: 'Ponte en contacto con nosotros hoy mismo. Ya sea para uniformes en DTF, llaveros interactivos NFC, corte láser preciso, impresión 3D o producción audiovisual, estamos listos para fabricar tus ideas con la mayor calidad y tecnología.',
    labelPhone: 'WhatsApp / Teléfono',
    labelEmail: 'Correo Electrónico',
    labelLocation: 'Ubicación',
    labelName: 'Nombre',
    labelMessage: 'Mensaje',
    placeholderName: 'Tu nombre completo',
    placeholderEmail: 'tu@correo.com',
    placeholderMessage: 'Describe las especificaciones de tu proyecto...',
    btnSubmit: 'Enviar por WhatsApp',
    errName: 'El nombre es obligatorio',
    errEmailReq: 'El correo es obligatorio',
    errEmailInv: 'Correo no es válido',
    errMessage: 'El mensaje es obligatorio',
    msgPrefix: 'Hola Rotulab, mi nombre es'
  },
  en: {
    subtitle: 'Let\'s Start Your Project',
    title: 'Contact Us',
    infoTitle: 'Do you have an idea in mind?',
    infoText: 'Get in touch with us today. Whether for DTF uniforms, interactive NFC keychains, precise laser cutting, 3D printing, or audiovisual production, we are ready to manufacture your ideas with the highest quality and technology.',
    labelPhone: 'WhatsApp / Phone',
    labelEmail: 'Email',
    labelLocation: 'Location',
    labelName: 'Name',
    labelMessage: 'Message',
    placeholderName: 'Your full name',
    placeholderEmail: 'you@email.com',
    placeholderMessage: 'Describe the specifications of your project...',
    btnSubmit: 'Send via WhatsApp',
    errName: 'Name is required',
    errEmailReq: 'Email is required',
    errEmailInv: 'Invalid email',
    errMessage: 'Message is required',
    msgPrefix: 'Hello Rotulab, my name is'
  }
};

export default function Contact({ lang = 'es' }) {
  const t = DICT[lang] || DICT['es'];
  const businessConfig = getBusinessConfig(lang);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t.errName;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.errEmailReq;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = t.errEmailInv;
      }
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t.errMessage;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      const whatsappUrl = new URL(businessConfig.contact.whatsapp);
      const textMessage = `${t.msgPrefix} ${formData.name}. Email: ${formData.email}. Mensaje: ${formData.message}`;
      const encodedText = encodeURIComponent(textMessage);
      const targetUrl = `${whatsappUrl.href}?text=${encodedText}`;
      
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>{t.subtitle}</span>
          <h2 className={styles.title}>{t.title}</h2>
        </div>

        <div className={styles.grid}>
          {/* Columna de Información */}
          <div className={styles.infoColumn}>
            <h3 className={styles.infoTitle}>{t.infoTitle}</h3>
            <p className={styles.infoText}>
              {t.infoText}
            </p>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Phone size={20} />
              </div>
              <div className={styles.infoDetail}>
                <span className={styles.infoLabel}>{t.labelPhone}</span>
                <span className={styles.infoValue}>{businessConfig.contact.phone}</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Mail size={20} />
              </div>
              <div className={styles.infoDetail}>
                <span className={styles.infoLabel}>{t.labelEmail}</span>
                <span className={styles.infoValue}>{businessConfig.contact.email}</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPin size={20} />
              </div>
              <div className={styles.infoDetail}>
                <span className={styles.infoLabel}>{t.labelLocation}</span>
                <span className={styles.infoValue}>{businessConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Columna de Formulario */}
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {/* Campo Nombre */}
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  {t.labelName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder={t.placeholderName}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className={styles.errorText} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>
 
              {/* Campo Correo */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  {t.labelEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder={t.placeholderEmail}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className={styles.errorText} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
 
              {/* Campo Mensaje */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  {t.labelMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  placeholder={t.placeholderMessage}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span id="message-error" className={styles.errorText} role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Botón de Enviar */}
              <button 
                type="submit" 
                className={styles.btnSubmit}
              >
                {t.btnSubmit}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
