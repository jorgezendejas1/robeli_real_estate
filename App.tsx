
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Properties from './components/Properties';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Properties />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
