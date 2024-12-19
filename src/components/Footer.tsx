import React from 'react';
import { Printer } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img
              src="src/imagens/GrafexLogo.png"
              alt="Logo da Gráfica"
              className="w-16 h-16"
            />
            <span className="text-xl font-bold">GRAF Ex</span>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} GRAF Ex - Gráfica do Exército</p>
            <p className="text-sm text-gray-400">Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}