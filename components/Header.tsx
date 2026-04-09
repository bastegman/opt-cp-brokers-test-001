'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CP</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">CP Brokers</h1>
              <p className="text-xs text-primary">Corredora de Seguros</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-700 hover:text-primary transition">
              Servicios
            </a>
            <a href="#por-que-nosotros" className="text-gray-700 hover:text-primary transition">
              Por qué nosotros
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-primary transition">
              Contacto
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 md:hidden">
              <nav className="container-max flex flex-col py-4 space-y-2">
                <a href="#servicios" className="text-gray-700 hover:text-primary transition py-2">
                  Servicios
                </a>
                <a href="#por-que-nosotros" className="text-gray-700 hover:text-primary transition py-2">
                  Por qué nosotros
                </a>
                <a href="#contacto" className="text-gray-700 hover:text-primary transition py-2">
                  Contacto
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}