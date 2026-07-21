'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!pathname) return null;

  const currentLang = pathname.split('/')[1];

  const switchLanguage = (newLang) => {
    if (newLang === currentLang) {
      setIsOpen(false);
      return;
    }
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    setIsOpen(false);
    router.push(newPath);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button 
        className={`${styles.button} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Seleccionar idioma"
      >
        <Globe size={18} className={styles.globeIcon} />
        {currentLang.toUpperCase()}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.dropdown}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button 
              className={`${styles.option} ${currentLang === 'es' ? styles.selected : ''}`}
              onClick={() => switchLanguage('es')}
            >
              Español 🇪🇸
            </button>
            <button 
              className={`${styles.option} ${currentLang === 'en' ? styles.selected : ''}`}
              onClick={() => switchLanguage('en')}
            >
              English 🇺🇸
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
