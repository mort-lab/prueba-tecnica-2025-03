'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LabDropdownProps {
  onMouseLeave: () => void;
}

const LabDropdown: React.FC<LabDropdownProps> = ({ onMouseLeave }) => {
  return (
    <div 
      className="absolute left-0 right-0 bg-black text-white z-50 shadow-lg animate-fadeIn"
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col space-y-4">
            <h3 className="uppercase text-sm font-medium tracking-wider mb-4">Browse by Category</h3>
            <Link href="/lab/skin-aging" className="text-sm text-gray-300 hover:text-white transition-colors">
              ROS & Skin Aging
            </Link>
            <Link href="/lab/technology" className="text-sm text-gray-300 hover:text-white transition-colors">
              Science & Technology
            </Link>
            <Link href="/lab/industry" className="text-sm text-gray-300 hover:text-white transition-colors">
              Industry Guidelines & Regulations
            </Link>
            
            <div className="mt-6 pt-4">
              <Link href="/lab/articles">
                <button className="uppercase border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300 text-sm tracking-wider">
                  Read all articles
                </button>
              </Link>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8 md:mt-0">
            <h3 className="uppercase text-sm font-medium tracking-wider mb-6">Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Article 1 */}
              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <Image 
                    src="https://pavise.com/cdn/shop/files/GAP-with-AwardSeal-updated_8b20d0db-85db-4801-bba3-3f7bd0b40531.png?v=1738705766&width=400" 
                    alt="What is Photoaging?" 
                    width={300} 
                    height={200}
                    className="object-cover transition-transform duration-500 hover:scale-105 mx-auto"
                  />
                </div>
                <h4 className="uppercase text-xs font-medium tracking-wider mb-2 text-center md:text-left">WHAT IS PHOTOAGING?</h4>
                <div className="hidden md:block">
                  <p className="text-xs text-gray-400 mb-3">Understand the science behind UV-induced skin damage and how to protect your skin.</p>
                  <Link href="/lab/articles/photoaging" className="text-xs text-gray-300 hover:text-white underline">
                    Read more
                  </Link>
                </div>
              </div>

              {/* Article 2 */}
              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <Image 
                    src="https://pavise.com/cdn/shop/files/BSR-with-AwardSeals-updated-2.png?v=1738341500&width=400" 
                    alt="How Oxidative Stress Contributes to Photoaging" 
                    width={300} 
                    height={200}
                    className="object-cover transition-transform duration-500 hover:scale-105 mx-auto"
                  />
                </div>
                <h4 className="uppercase text-xs font-medium tracking-wider mb-2 text-center md:text-left">ROS: HOW OXIDATIVE STRESS CONTRIBUTES TO PHOTOAGING</h4>
                <div className="hidden md:block">
                  <p className="text-xs text-gray-400 mb-3">Learn about reactive oxygen species and their impact on skin aging.</p>
                  <Link href="/lab/articles/oxidative-stress" className="text-xs text-gray-300 hover:text-white underline">
                    Read more
                  </Link>
                </div>
              </div>

              {/* Article 3 */}
              <div className="flex flex-col">
                <div className="mb-4 overflow-hidden">
                  <Image 
                    src="https://pavise.com/cdn/shop/files/Screen_Shot_2023-03-09_at_12.40.22_AM.png?v=1678340525&width=400" 
                    alt="Melasma: What to Look For and What to Do" 
                    width={300} 
                    height={200}
                    className="object-cover transition-transform duration-500 hover:scale-105 mx-auto"
                  />
                </div>
                <h4 className="uppercase text-xs font-medium tracking-wider mb-2 text-center md:text-left">MELASMA: WHAT TO LOOK FOR AND WHAT TO DO</h4>
                <div className="hidden md:block">
                  <p className="text-xs text-gray-400 mb-3">Discover the causes, symptoms, and treatments for melasma.</p>
                  <Link href="/lab/articles/melasma" className="text-xs text-gray-300 hover:text-white underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botones móviles para acceso rápido */}
        <div className="mt-8 pt-6 border-t border-gray-800 md:hidden">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/lab/articles/photoaging">
              <button className="uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 text-xs tracking-wider">
                Photoaging
              </button>
            </Link>
            <Link href="/lab/articles/oxidative-stress">
              <button className="uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 text-xs tracking-wider">
                Oxidative Stress
              </button>
            </Link>
            <Link href="/lab/articles/melasma">
              <button className="uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 text-xs tracking-wider">
                Melasma
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDropdown;
