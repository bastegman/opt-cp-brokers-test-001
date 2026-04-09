'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CP</span>
              </div>
              <span className="font-bold text-lg">CP Brokers</span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu corredor de seguros de confianza en Santiago con 30+ años de experiencia.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-primary transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#por-que-nosotros" className="text-gray-400 hover:text-primary transition">
                  Por qué nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-primary transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Seguros de Arriendo</li>
              <li className="text-gray-400">Seguros PYME</li>
              <li className="text-gray-400">Seguros de Auto</li>
              <li className="text-gray-400">Seguros de Hogar</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://wa.me/56964200522" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                  +56 9 6420 0522
                </a>
              </li>
              <li>
                <a href="mailto:contacto@cpbrokers.cl" className="hover:text-primary transition">
                  contacto@cpbrokers.cl
                </a>
              </li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 CP Brokers Corredores de Seguros. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Desarrollado con profesionalismo y confianza
          </p>
        </div>
      </div>
    </footer>
  );
}