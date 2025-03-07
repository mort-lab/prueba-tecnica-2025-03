'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ShopDropdownProps {
  onMouseLeave: () => void;
}

const ShopDropdown: React.FC<ShopDropdownProps> = ({ onMouseLeave }) => {
  return (
    <div 
      className="absolute left-0 right-0 bg-black text-white z-50"
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto py-12">
        <div className="flex gap-12 max-w-7xl mx-auto px-4">
          {/* Left side - Text and Shop All button */}
          <div className="w-64 flex flex-col justify-center">
            <h2 className="text-3xl font-light mb-6 leading-tight">
              Unparalleled skin regeneration at your fingertips
            </h2>
            <Link href="/shop">
              <button className="border border-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 w-fit">
                SHOP ALL
              </button>
            </Link>
          </div>

          {/* Right side - Product grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Dynamic Age Defense */}
            <Link href="/shop/dynamic-age-defense" className="group">
              <div className="relative transition-transform duration-300 hover:scale-105">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="https://pavise.com/cdn/shop/files/GAP-with-AwardSeal-updated_8b20d0db-85db-4801-bba3-3f7bd0b40531.png?v=1738705766&width=400"
                    alt="Dynamic Age Defense"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xs uppercase font-light text-center tracking-widest text-white/90 group-hover:text-white transition-colors duration-300">Dynamic Age Defense</h3>
              </div>
            </Link>

            {/* Bioadaptive Stress Repair */}
            <Link href="/shop/bioadaptive-stress-repair" className="group">
              <div className="relative transition-transform duration-300 hover:scale-105">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="https://pavise.com/cdn/shop/files/BSR-with-AwardSeals-updated-2.png?v=1738341500&width=400"
                    alt="Bioadaptive Stress Repair"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xs uppercase font-light text-center tracking-widest text-white/90 group-hover:text-white transition-colors duration-300">Bioadaptive Stress Repair</h3>
              </div>
            </Link>

            {/* Gentle Amino Powerwash */}
            <Link href="/shop/gentle-amino-powerwash" className="group">
              <div className="relative transition-transform duration-300 hover:scale-105">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="https://pavise.com/cdn/shop/files/Screen_Shot_2023-03-09_at_12.40.22_AM.png?v=1678340525&width=400"
                    alt="Gentle Amino Powerwash"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xs uppercase font-light text-center tracking-widest text-white/90 group-hover:text-white transition-colors duration-300">Gentle Amino Powerwash</h3>
              </div>
            </Link>

            {/* Dynamic Age Defense Refill */}
            <Link href="/shop/dynamic-age-defense-refill" className="group">
              <div className="relative transition-transform duration-300 hover:scale-105">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="https://pavise.com/cdn/shop/files/GAP-with-AwardSeal-updated_8b20d0db-85db-4801-bba3-3f7bd0b40531.png?v=1738705766&width=400"
                    alt="Dynamic Age Defense Refill"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xs uppercase font-light text-center tracking-widest text-white/90 group-hover:text-white transition-colors duration-300">Dynamic Age Defense Refill</h3>
              </div>
            </Link>

            {/* Bioadaptive Stress Repair Refill */}
            <Link href="/shop/bioadaptive-stress-repair-refill" className="group">
              <div className="relative transition-transform duration-300 hover:scale-105">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="https://pavise.com/cdn/shop/files/BSR-with-AwardSeals-updated-2.png?v=1738341500&width=400"
                    alt="Bioadaptive Stress Repair Refill"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xs uppercase font-light text-center tracking-widest text-white/90 group-hover:text-white transition-colors duration-300">Bioadaptive Stress Repair Refill</h3>
              </div>
            </Link>

            {/* UV Camera */}
            <Link href="/shop/uv-camera" className="group">
              <div className="relative transition-transform duration-300 hover:scale-105">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="https://pavise.com/cdn/shop/files/UVC-with-AwardSeals-updated_2.png?v=1738171430&width=400"
                    alt="UV Camera"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xs uppercase font-light text-center tracking-widest text-white/90 group-hover:text-white transition-colors duration-300">UV Camera</h3>
              </div>
            </Link>
          </div>
        </div>

        {/* iPhone compatibility buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="bg-black text-white border border-white rounded-full px-8 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
            iPhones 14 and below
          </button>
          <button className="bg-black text-white border border-white rounded-full px-8 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
            iPhones 15 and up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopDropdown;
