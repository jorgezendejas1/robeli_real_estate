import React, { useState, useMemo } from 'react';
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
  const [filterType, setFilterType] = useState<string>('Todos');
  const [filterLocation, setFilterLocation] = useState<string>('Todas');

  const locations = useMemo(() => {
    const uniqueLocations = new Set(propertiesData.map(p => p.location));
    return ['Todas', ...Array.from(uniqueLocations)];
  }, []);

  const filteredProperties = useMemo(() => {
    return propertiesData.filter(property => {
      const typeMatch = filterType === 'Todos' || property.type === filterType;
      const locationMatch = filterLocation === 'Todas' || property.location === filterLocation;
      return typeMatch && locationMatch;
    });
  }, [filterType, filterLocation]);

  return (
    <section id="alojamientos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nuestros Alojamientos</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explora una selección curada de nuestras mejores propiedades disponibles.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          {/* Type Filter */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="font-medium text-gray-800 mr-2">Filtrar por tipo:</span>
            <div className="flex bg-white p-1 rounded-full shadow-sm border border-gray-200">
              {['Todos', 'Airbnb', 'Alquiler', 'Venta'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none ${filterType === type ? 'bg-[#0b6efd] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
                  aria-pressed={filterType === type}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="location-filter" className="font-medium text-gray-800">Ubicación:</label>
            <div className="relative">
              <select
                id="location-filter"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="appearance-none w-full md:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-8 rounded-full leading-tight focus:outline-none focus:ring-2 focus:ring-[#0b6efd] focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-800">Sin Resultados</h3>
              <p className="text-lg text-gray-600 mt-2">
                No se encontraron propiedades que coincidan con tus filtros.
              </p>
            </div>
        )}
      </div>
    </section>
  );
};

export default Properties;