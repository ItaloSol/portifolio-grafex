import React from 'react';
import { Printer, Menu } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-navy-900 text-white fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
          <img
              src="src/imagens/GrafexLogo.png"
              alt="Logo da Gráfica"
              className="w-16 h-16"
            />
            <span className="text-2xl font-bold">GRAF EX</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="hover:text-yellow-500 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('produtos')} className="hover:text-yellow-500 transition-colors">
              Produtos
            </button>
            <button onClick={() => scrollToSection('tutorial')} className="hover:text-yellow-500 transition-colors">
              Como Pedir
            </button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-yellow-500 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-yellow-500 transition-colors">
              Contato
            </button>
          </nav>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}