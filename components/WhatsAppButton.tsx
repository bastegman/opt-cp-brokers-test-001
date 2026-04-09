'use client';

import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/56964200522?text=Hola%20CP%20Brokers%2C%20me%20gustaría%20cotizar%20un%20seguro"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50" />
        <button className="relative bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.261-1.022 1.024-1.756 2.12-2.261 3.356a9.9 9.9 0 00-.955 4.27 9.968 9.968 0 00.713 3.231l.023.046a9.957 9.957 0 00.595 1.595l.007.011a10.054 10.054 0 001.316 1.957 9.928 9.928 0 003.546 2.684 10.000 10.000 0 005.151 1.427h.004c5.523 0 10-4.477 10-9.998 0-1.334-.26-2.584-.744-3.74A9.935 9.935 0 0012 2.418c-5.523 0-10 4.477-10 10z" />
          </svg>
        </button>
      </div>
    </a>
  );
}