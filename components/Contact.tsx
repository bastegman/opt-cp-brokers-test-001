'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Consulta de seguros - ${formData.name}`;
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Servicio: ${formData.service}

Mensaje:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:contacto@cpbrokers.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contáctanos hoy
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Solicita tu cotización gratuita y descubre cómo podemos proteger lo que más importa
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Servicio de Interés *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Seguro de Garantía de Arriendo">Seguro de Garantía de Arriendo</option>
                  <option value="Seguro para PYME">Seguro para PYME</option>
                  <option value="Seguro de Auto">Seguro de Auto</option>
                  <option value="Seguro de Incendio y Terremoto">Seguro de Incendio y Terremoto</option>
                  <option value="Seguro de Hogar">Seguro de Hogar</option>
                  <option value="Seguro de Responsabilidad Civil">Seguro de Responsabilidad Civil</option>
                  <option value="Seguro de Ingeniería">Seguro de Ingeniería</option>
                  <option value="Seguro de Transporte">Seguro de Transporte</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Mensaje *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                placeholder="Cuéntanos sobre tu necesidad de seguros..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              Enviar Cotización
            </button>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-primary mb-2">+56 9 6420 0522</p>
              <p className="text-gray-700">WhatsApp</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary mb-2">contacto@cpbrokers.cl</p>
              <p className="text-gray-700">Email</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary mb-2">Santiago, Chile</p>
              <p className="text-gray-700">Ubicación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}