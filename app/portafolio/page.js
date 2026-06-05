import Portfolio from '@/components/Portfolio';

export const metadata = {
  title: 'Portafolio | ROTULAB',
  description: 'Descubre los proyectos y trabajos reales realizados por ROTULAB. Visualiza nuestra galería de corte láser, impresión 3D, NFC, DTF y más.',
};

/**
 * Página Portafolio (/portafolio).
 * Muestra el showcase de casos de éxito y el carrusel de marcas clientes de ROTULAB.
 */
export default function PortafolioPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 120px)' }}>
      <Portfolio />
    </main>
  );
}
