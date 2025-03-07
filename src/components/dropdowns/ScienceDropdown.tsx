'use client';

import React from 'react';
import Link from 'next/link';

interface ScienceDropdownProps {
  onMouseLeave: () => void;
}

const ScienceDropdown: React.FC<ScienceDropdownProps> = ({ onMouseLeave }) => {
  return (
    <div 
      className="absolute left-0 right-0 bg-black text-white z-50 shadow-lg animate-fadeIn"
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col space-y-4">
            <h3 className="uppercase text-sm font-medium tracking-wider mb-4">Our biotechnology</h3>
            <Link href="/science/biotechnology" className="text-sm text-gray-300 hover:text-white transition-colors">
              The Pavise® Difference
            </Link>
            <Link href="/science/biotechnology/research" className="text-sm text-gray-300 hover:text-white transition-colors">
              Research & Development
            </Link>
            <Link href="/science/biotechnology/ingredients" className="text-sm text-gray-300 hover:text-white transition-colors">
              Key Ingredients
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="uppercase text-sm font-medium tracking-wider mb-4">Safety</h3>
            <Link href="/science/safety/testing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Testing Standards
            </Link>
            <Link href="/science/safety/clinical" className="text-sm text-gray-300 hover:text-white transition-colors">
              Clinical Results
            </Link>
            <Link href="/science/safety/certifications" className="text-sm text-gray-300 hover:text-white transition-colors">
              Certifications
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="uppercase text-sm font-medium tracking-wider mb-4">Scientific team</h3>
            <Link href="/science/team/founders" className="text-sm text-gray-300 hover:text-white transition-colors">
              Our Founders
            </Link>
            <Link href="/science/team/advisors" className="text-sm text-gray-300 hover:text-white transition-colors">
              Scientific Advisors
            </Link>
            <Link href="/science/team/research" className="text-sm text-gray-300 hover:text-white transition-colors">
              Research Partners
            </Link>
          </div>
        </div>
        
        {/* Versión móvil: botones de navegación rápida */}
        <div className="mt-8 pt-6 border-t border-gray-800 md:hidden">
          <h3 className="uppercase text-sm font-medium tracking-wider mb-4 text-center">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/science/biotechnology">
              <button className="uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 text-xs tracking-wider">
                Biotechnology
              </button>
            </Link>
            <Link href="/science/safety">
              <button className="uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 text-xs tracking-wider">
                Safety
              </button>
            </Link>
            <Link href="/science/team">
              <button className="uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 text-xs tracking-wider">
                Scientific Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceDropdown;
