'use client';

import Image from 'next/image';

const reasons = [
  {
    id: 1,
    title: '30+ años de experiencia',
    description: 'Tres décadas trabajando para proteger a familias y empresas chilenas.',
    icon: '⏰',
  },
  {
    id: 2,
    title: 'Asesoramiento personalizado',
    description: 'Cada cliente es único. Creamos soluciones a medida para tus necesidades.',
    icon: '👥',
  },
  {
    id: 3,
    title: 'Mejores cotizaciones',
    description: 'Comparamos opciones de múltiples aseguradoras para ofrecerte lo mejor.',
    icon: '💰',
  },
  {
    id: 4,
    title: 'Atención profesional',
    description: 'Equipo experto disponible para resolver tus consultas y trámites.',
    icon: '🤝',
  },
];

export default function WhyUs() {
  return (
    <section id="por-que-nosotros" className="py-16 md:py-24 bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por qué elegir CP Brokers
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Somos tu aliado confiable en la búsqueda de la mejor protección
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {reasons.map((reason) => (
              <div key={reason.id} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-2xl">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/600/400?random=10"
              alt="CP Brokers - Por qué nosotros"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}