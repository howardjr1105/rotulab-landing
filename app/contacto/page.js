import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contacto | ROTULAB',
  description: '¿Tienes un proyecto en mente? Escríbenos a través de nuestro formulario o contáctanos por WhatsApp directamente.',
};

/**
 * Página Contacto (/contacto).
 * Renderiza el formulario de contacto para iniciar proyectos con ROTULAB.
 */
export default function ContactoPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 120px)' }}>
      <Contact />
    </main>
  );
}
