import Services from '@/components/Services';

export const metadata = {
  title: 'Servicios | ROTULAB',
  description: 'Explora nuestro catálogo completo de servicios: Impresión DTF, soluciones inteligentes NFC, impresión 3D FDM/SLA, corte y grabado láser, señalización y producción audiovisual.',
};

/**
 * Página Servicios (/servicios).
 * Renderiza el catálogo interactivo de servicios de ROTULAB.
 */
export default function ServiciosPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 120px)' }}>
      <Services />
    </main>
  );
}
