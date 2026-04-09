'use client';

import Image from 'next/image';

const services = [
  {
    id: 1,
    name: 'Seguro de Garantía de Arriendo',
    description: 'Protege tu inversión inmobiliaria con cobertura completa para arrendatarios.',
    icon: '🏠',
    image: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: 2,
    name: 'Seguro para PYME',
    description: 'Soluciones integrales para proteger tu pequeña y mediana empresa.',
    icon: '💼',
    image: 'https://picsum.photos/400/300?random=3',
  },
  {
    id: 3,
    name: 'Seguro de Auto',
    description: 'Cobertura completa para tu vehículo con atención 24/7.',
    icon: '🚗',
    image: 'https://picsum.photos/400/300?random=4',
  },
  {
    id: 4,
    name: 'Seguro de Incendio y Terremoto',
    description: 'Protección contra desastres naturales y siniestros por fuego.',
    icon: '🔥',
    image: 'https://picsum.photos/400/300?random=5',
  },
  {
    id: 5,
    name: 'Seguro de Hogar',
    description: 'Tranquilidad total para ti y tu familia con cobertura integral.',
    icon: '🛡️',
    image: 'https://picsum.photos/400/300?random=6',
  },
  {
    id: 6,
    name: 'Seguro de Responsabilidad Civil',
    description: 'Protección contra demandas y reclamaciones por responsabilidad.',
    icon: '⚖️',
    image: 'https://picsum.photos/400/300?random=7',
  },
  {
    id: 7,
    name: 'Seguro de Ingeniería',
    description: 'Cobertura especializada para proyectos constructivos y obras.',
    icon: '🏗️',
    image: 'https://picsum.photos/400/300?random=8',
  },
  {
    id: 8,
    name: 'Seguro de Transporte',
    description: 'Protección integral para carga y flota de vehículos comerciales.',
    icon: '🚛',
    image: 'https://picsum.photos/400/300?random=9',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ofertas de seguros completas y personalizadas para todos tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary transition duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}