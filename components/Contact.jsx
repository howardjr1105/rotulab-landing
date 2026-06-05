'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Correo no es válido';
      }
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
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
      const textMessage = `Hola Rotulab, mi nombre es ${formData.name}. Email: ${formData.email}. Mensaje: ${formData.message}`;
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
          <span className={styles.subtitle}>Comencemos Tu Proyecto</span>
          <h2 className={styles.title}>Contáctanos</h2>
        </div>

        <div className={styles.grid}>
          {/* Columna de Información */}
          <div className={styles.infoColumn}>
            <h3 className={styles.infoTitle}>¿Tienes una idea en mente?</h3>
            <p className={styles.infoText}>
              Ponte en contacto con nosotros hoy mismo. Ya sea para uniformes en DTF,
              llaveros interactivos NFC, corte láser preciso, impresión 3D o producción audiovisual,
              estamos listos para fabricar tus ideas con la mayor calidad y tecnología.
            </p>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Phone size={20} />
              </div>
              <div className={styles.infoDetail}>
                <span className={styles.infoLabel}>WhatsApp / Teléfono</span>
                <span className={styles.infoValue}>{businessConfig.contact.phone}</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Mail size={20} />
              </div>
              <div className={styles.infoDetail}>
                <span className={styles.infoLabel}>Correo Electrónico</span>
                <span className={styles.infoValue}>{businessConfig.contact.email}</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPin size={20} />
              </div>
              <div className={styles.infoDetail}>
                <span className={styles.infoLabel}>Ubicación</span>
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
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder="Tu nombre completo"
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
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder="tu@correo.com"
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
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  placeholder="Describe las especificaciones de tu proyecto..."
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
                Enviar por WhatsApp
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
