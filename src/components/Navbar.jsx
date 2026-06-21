import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Insights', href: '#insights' },
    { name: 'Goals', href: '#goals' },
    { name: 'History', href: '#history' },
  ];

  const handleLinkClick = (href, name) => {
    setIsOpen(false);
    setActiveSection(name.toLowerCase());
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-emerald-50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => handleLinkClick('#home', 'Home')}
          >
            <div className="p-1 rounded-xl bg-emerald-50/50 group-hover:bg-emerald-100/50 transition-colors duration-300">
              <img src={logoImg} className="h-8 w-8 object-contain" alt="AnthroCarbon Logo" />
            </div>
            <span className="text-xl font-bold tracking-tight text-emerald-950 font-display">
              Anthro<span className="text-emerald-600">Carbon</span>
            </span>
          </div>


          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href, link.name)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50/80 shadow-sm font-semibold'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/30'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            
            {/* Quick Action Button */}
            <button
              onClick={() => handleLinkClick('#calculator', 'Calculator')}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-medium text-sm rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Calculate Footprint
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-emerald-600 p-2 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-emerald-50 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href, link.name)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-emerald-700 bg-emerald-50 font-semibold border-l-4 border-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-4 px-4">
            <button
              onClick={() => handleLinkClick('#calculator', 'Calculator')}
              className="w-full text-center px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Calculate Footprint
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
