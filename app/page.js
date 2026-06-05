import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

/**
 * Página principal (Landing Page) de ROTULAB.
 * Integra todas las secciones del sitio en un flujo vertical de alto impacto.
 * Estilo visual: Dark Mode Premium con acentos de color neón (cian, naranja) y glassmorphism.
 */
export default function Home() {
  return (
    <>
      {/* Sección 1: Hero */}
      <Hero />
      
      {/* Sección 2: Quiénes Somos */}
      <About />
      
      {/* Sección 3: Servicios */}
      <Services />
      
      {/* Sección 4: Portafolio */}
      <Portfolio />
      
      {/* Sección 5: Formulario de Contacto */}
      <Contact />
    </>
  );
}
