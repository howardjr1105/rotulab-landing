import About from '@/components/About';

export const metadata = {
  title: 'Nosotros | ROTULAB',
  description: 'Conoce la historia, misión y visión de ROTULAB. Especialistas vanguardistas en publicidad y fabricación digital en Nicaragua.',
};

/**
 * Página Nosotros (/nosotros).
 * Muestra el propósito corporativo de ROTULAB y los accesos a redes sociales.
 */
export default function NosotrosPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 120px)' }}>
      <About />
    </main>
  );
}
