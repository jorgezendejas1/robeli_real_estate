
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('');
    
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xqkrdzrk', { // Replace with your Formspree form ID
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Mensaje enviado con éxito.');
        form.reset();
      } else {
        const responseData = await response.json();
        if (Object.prototype.hasOwnProperty.call(responseData, 'errors')) {
          setStatus(responseData["errors"].map((error: { message: string }) => error["message"]).join(", "));
        } else {
          setStatus('Oops! Hubo un problema al enviar tu formulario.');
        }
      }
    } catch (error) {
      setStatus('Oops! Hubo un problema al enviar tu formulario.');
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Contáctanos</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres agendar una visita? Envíanos un mensaje.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b6efd]" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b6efd]" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b6efd]"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" disabled={submitting} className="w-full bg-[#0b6efd] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-300">
                {submitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
          </form>
          {status && <p className={`mt-4 text-center ${status.includes('éxito') ? 'text-green-600' : 'text-red-600'}`}>{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
