
import React from 'react';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const typeColors = {
    Airbnb: 'bg-pink-500',
    Alquiler: 'bg-indigo-500',
    Venta: 'bg-green-500',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={property.imageUrl} alt={`Vista de ${property.title}`} />
        <div className={`absolute top-0 right-0 mt-4 mr-4 text-white text-xs font-bold uppercase px-3 py-1 rounded-full ${typeColors[property.type]}`}>
          {property.type}
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-1">{property.location}</p>
        <h3 className="text-2xl font-serif font-bold mb-2 text-gray-900">{property.title}</h3>
        <p className="text-lg font-semibold text-[#0b6efd] mb-4">{property.price}</p>
        <button className="w-full bg-[#0b6efd] text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          {property.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
