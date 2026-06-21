import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Insights', href: '/insights' },
    { name: 'Goals', href: '/goals' },
    { name: 'History', href: '/history' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
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
          <Link 
            to="/"
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="p-1 rounded-xl bg-emerald-50/50 group-hover:bg-emerald-100/50 transition-colors duration-300">
              <img src={logoImg} className="h-8 w-8 object-contain" alt="AnthroCarbon Logo" />
            </div>
            <span className="text-xl font-bold tracking-tight text-emerald-950 font-display">
              Anthro<span className="text-emerald-600">Carbon</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider font-sans transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-emerald-700 bg-emerald-50/80 shadow-sm border border-emerald-100/50'
                    : 'text-gray-500 hover:text-emerald-600 hover:bg-gray-50/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Persistent CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/calculator"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md shadow-emerald-600/10 hover:shadow-emerald-500/20 transition-all cursor-pointer"
            >
              Calculate Footprint
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <Link
              to="/calculator"
              className="inline-flex items-center justify-center px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-xs font-bold rounded-lg shadow-sm"
            >
              Calculate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-emerald-600 p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-emerald-50 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-2xl text-sm font-extrabold uppercase tracking-wider ${
                isActive(link.href)
                  ? 'text-emerald-700 bg-emerald-50 border border-emerald-100'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
