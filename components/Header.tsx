
import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#alojamientos', label: 'Alojamientos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#inicio" className={`text-2xl font-bold font-serif transition-colors ${isScrolled || isOpen ? 'text-gray-900' : 'text-white'}`}>
            ROBELI
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#0b6efd] ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`transition-colors ${isScrolled || isOpen ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
        <nav className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium uppercase tracking-wider hover:text-[#0b6efd]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
