import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Product } from '../types/product';
import { Modal } from './Modal';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="product-card-image"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
            <ChevronRight className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center space-x-3">
              <product.icon className="h-8 w-8 text-yellow-500" />
              <h3 className="text-2xl font-bold">{product.name}</h3>
            </div>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Especificações:</h4>
            <dl className="space-y-3">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="border-b border-gray-100 pb-2">
                  <dt className="text-sm text-gray-600">{spec.label}</dt>
                  <dd className="text-gray-900 font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <p className="text-xl font-semibold text-navy-900">
                Valor:{' '}
                <span className="text-yellow-500">{product.price}</span>
                {product.price.includes('/m²') && ' por metro quadrado'}
                {product.price === 'Solicitar Orçamento' && (
                  <span className="block text-sm text-gray-600 mt-1">
                   <a href='mailto:divcmcl@graficadoexercito.eb.mil.br'>para mais informações Email: divcmcl@graficadoexercito.eb.mil.br</a> 
                    
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}