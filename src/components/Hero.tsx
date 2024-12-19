import React from 'react';

export function Hero() {
  return (
    <section id="inicio" className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="src/imagens/interno.png"
          alt="Impressora profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">Soluções Gráficas Profissionais</h1>
          <p className="text-xl mb-8">Qualidade e excelência em impressão para todas as suas necessidades</p>
          <a
            href="#produtos"
            className="bg-yellow-500 text-navy-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
          >
            Conheça Nossos Produtos
          </a>
        </div>
      </div>
    </section>
  );
}