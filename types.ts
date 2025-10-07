
export interface Property {
  id: number;
  type: 'Airbnb' | 'Alquiler' | 'Venta';
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  buttonText: 'Reservar' | 'Ver detalles' | 'Solicitar visita';
}
