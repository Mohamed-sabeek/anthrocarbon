import React from 'react';
import { Heart } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-8 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-emerald-900/60">
          
          {/* Logo & Mission */}
          <div className="md:col-span-6 space-y-4 text-left">
            <div 
              className="flex items-center space-x-2.5 cursor-pointer w-fit"
              onClick={handleScrollToTop}
            >
              <div className="p-1 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300">
                <img src={logoImg} className="h-7 w-7 object-contain" alt="AnthroCarbon Logo" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-display">
                Anthro<span className="text-emerald-400">Carbon</span>
              </span>
            </div>

            
            <p className="text-emerald-200 text-sm max-w-sm leading-relaxed">
              Empowering individuals to make sustainable choices through carbon awareness and actionable environmental insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-left space-y-3">
            <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs font-display">
              Sections
            </h4>
            <ul className="space-y-2 text-xs font-medium text-emerald-100">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">Calculator</a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">Insights</a>
              </li>
            </ul>
          </div>

          {/* Sustainability Message & Socials */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs font-display">
              Sustainability Message
            </h4>
            <p className="text-xs text-emerald-200 leading-relaxed italic">
              "We do not inherit the Earth from our ancestors; we borrow it from our children."
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 bg-emerald-900 hover:bg-emerald-800 rounded-lg text-emerald-300 hover:text-white transition-all" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-emerald-900 hover:bg-emerald-800 rounded-lg text-emerald-300 hover:text-white transition-all" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-emerald-900 hover:bg-emerald-800 rounded-lg text-emerald-300 hover:text-white transition-all" aria-label="GitHub">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-emerald-300 gap-4">
          <div className="flex items-center space-x-1 font-medium">
            <span>&copy; {currentYear} AnthroCarbon. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-1 font-semibold text-emerald-200">
            <span>Designed for a greener future with</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
