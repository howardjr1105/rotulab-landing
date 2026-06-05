import Hero from '@/components/Hero';

/**
 * Página principal de inicio (Home) de ROTULAB.
 * En la estructura multipágina directa, esta página actúa como hub de entrada 
 * renderizando únicamente el componente Hero de alto impacto visual.
 */
export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Hero />
    </main>
  );
}
