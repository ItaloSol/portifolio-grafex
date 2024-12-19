import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <MapPin className="h-12 w-12 text-yellow-500 mb-4" />
            <a  target="_blank" href='https://maps.app.goo.gl/gD6EwMeK6G2c4CZC9'><h3 className="text-xl font-semibold mb-2">Endereço</h3>
            <p> QGEx - Setor de Garagens - SMU, CEP: 70655-775</p>
            <p>Brasília, DF</p></a>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="h-12 w-12 text-yellow-500 mb-4" />
            <a  target="_blank" href='tel:(61) 3415-5815'><h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p>(61) 3415-5815</p></a>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail className="h-12 w-12 text-yellow-500 mb-4" />
            <a  target="_blank" href='mailto:divcmcl@graficadoexercito.eb.mil.br'><h3 className="text-xl font-semibold mb-2">E-mail</h3>
            <p>divcmcl@graficadoexercito.eb.mil.br</p></a>
          </div>
        </div>
      </div>
    </section>
  );
}