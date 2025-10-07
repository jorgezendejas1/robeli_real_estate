
import React from 'react';
import type { Property } from '../types';
import PropertyCard from './PropertyCard';

const propertiesData: Property[] = [
  {
    id: 1,
    type: 'Airbnb',
    title: 'Loft Moderno en el Centro',
    location: 'Ciudad Cosmopolita',
    price: '$120 / noche',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    buttonText: 'Reservar',
  },
  {
    id: 2,
    type: 'Alquiler',
    title: 'Apartamento Familiar con Vistas',
    location: 'Zona Residencial Tranquila',
    price: '$1,500 / mes',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    buttonText: 'Ver detalles',
  },
  {
    id: 3,
    type: 'Venta',
    title: 'Villa de Lujo con Piscina',
    location: 'Exclusiva Comunidad Privada',
    price: '$850,000',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    buttonText: 'Solicitar visita',
  },
];

const Properties: React.FC = () => {
  return (
    <section id="alojamientos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nuestros Alojamientos</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explora una selección curada de nuestras mejores propiedades disponibles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
