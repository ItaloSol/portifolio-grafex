import React from 'react';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="src/imagens/grafica_do_exercito.jpeg"
              alt="Interior da gráfica"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Sobre a GRAF Ex</h2>
            <p className="text-gray-600 mb-4">
              A GRAF Ex (Gráfica do Exército) é uma instituição de excelência em serviços gráficos,
              comprometida com a qualidade e precisão em cada projeto.
            </p>
            <p className="text-gray-600 mb-4">
              Com equipamentos de última geração e uma equipe altamente qualificada,
              oferecemos soluções completas em impressão para atender às mais diversas necessidades.
            </p>
            <p className="text-gray-600">
              Nossa missão é entregar produtos gráficos de alta qualidade, respeitando prazos
              e superando as expectativas dos nossos clientes.
            </p>
            <h2 className="text-3xl font-bold mt-6">MISSÃO DE GRANDEZA, SERVIR!</h2>
          </div>
        </div>
      </div>
    </section>
  );
}