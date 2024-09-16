// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-8">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-lg">&copy; 2024 WEL-TUB. Todos los derechos reservados.</p>
        <p>
          <a href="#contact" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300">
            Contáctanos
          </a> 
          para reservas y promociones.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

  