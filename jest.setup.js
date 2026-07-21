import '@testing-library/jest-dom';

// Mock de next/image para evitar errores de renderizado en Jest
jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage({ src, alt, width, height, fill, priority, ...props }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} width={width} height={height} {...props} />;
  },
}));

// Mock de framer-motion con Proxy dinámico para soportar cualquier etiqueta semántica y limpiar props de animación
jest.mock('framer-motion', () => {
  const React = require('react');
  const mockMotion = new Proxy({}, {
    get: (target, property) => {
      return function MockComponent({ children, ...props }) {
        const Tag = property;
        // Filtramos props específicas de framer-motion para evitar warnings en el DOM de pruebas
        const motionProps = [
          'initial', 'animate', 'exit', 'variants', 'transition', 
          'whileHover', 'whileTap', 'viewport', 'whileInView', 'layout'
        ];
        const cleanProps = {};
        Object.keys(props).forEach((key) => {
          if (!motionProps.includes(key)) {
            cleanProps[key] = props[key];
          }
        });
        return React.createElement(Tag, cleanProps, children);
      };
    }
  });
  return {
    motion: mockMotion,
    useReducedMotion: () => false,
    AnimatePresence: ({ children }) => <>{children}</>,
  };
});
