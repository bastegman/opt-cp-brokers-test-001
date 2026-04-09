'use client';

import Image from 'next/image';

export default function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola, me gustaría cotizar un seguro');
    window.location.href = `https://wa.me/56964200522?text=${message}`;
  };

  return (
    <section className="min-h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container-max relative z-10 grid md:grid-cols-2 gap-8 items-center min-h-[600px] py-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tu Corredor de Seguros de Confianza en Santiago
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Con más de 30 años de experiencia, CP Brokers te ofrece soluciones de seguros personalizadas para proteger lo que más importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              Cotiza tu seguro gratis
            </button>
            <a
              href="#contacto"
              className="border-2 border-primary text-primary hover:bg-primary/5 font-bold py-4 px-8 rounded-lg transition duration-300"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://picsum.photos/600/400?random=1"
            alt="CP Brokers - Corredora de Seguros"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}