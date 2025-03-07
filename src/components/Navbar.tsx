'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShopDropdown from '@/components/dropdowns/ShopDropdown';
import ScienceDropdown from '@/components/dropdowns/ScienceDropdown';
import LabDropdown from '@/components/dropdowns/LabDropdown';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    // Solo activar el hover en dispositivos de escritorio (ancho > 1024px)
    if (window.innerWidth > 1024) {
      setActiveDropdown(dropdown);
    }
  };

  const handleMobileItemClick = (dropdown: string) => {
    // En móvil, alternar el dropdown al hacer click
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Cerrar cualquier dropdown abierto al cerrar el menú móvil
    if (mobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  return (
    <div className="relative" ref={navbarRef}>
      {/* Main Navbar */}
      <nav className="bg-black text-white h-16 flex items-center justify-between px-4 md:px-6">
        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Left Menu Items (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <div 
            className="nav-item hover:opacity-70 transition-opacity cursor-pointer relative"
            onMouseEnter={() => handleMouseEnter('shop')}
          >
            <span className="uppercase tracking-wider font-medium text-sm">SHOP</span>
          </div>
          <div 
            className="nav-item hover:opacity-70 transition-opacity cursor-pointer"
            onMouseEnter={() => handleMouseEnter('science')}
          >
            <span className="uppercase tracking-wider font-medium text-sm">SCIENCE</span>
          </div>
          <div 
            className="nav-item hover:opacity-70 transition-opacity cursor-pointer"
            onMouseEnter={() => handleMouseEnter('lab')}
          >
            <span className="uppercase tracking-wider font-medium text-sm">IN THE LAB</span>
          </div>
        </div>

        {/* Logo (Center for Desktop, Left for Mobile) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0 lg:left-auto">
          <Link href="/">
            <Image 
              src="https://pavise.com/cdn/shop/files/Layer_1-2_1.png?v=1671175690" 
              alt="Pavise Logo" 
              width={120} 
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Right Menu Items (Desktop) */}
        <div className="hidden lg:flex items-center space-x-5">
          <Link href="/partner-locator" className="hover:opacity-70 transition-opacity">
            <span className="text-sm">Partner Locator</span>
          </Link>
          <Link href="/search" className="hover:opacity-70 transition-opacity">
            <span className="text-sm">Search</span>
          </Link>
          <Link href="/account" className="hover:opacity-70 transition-opacity">
            <span className="text-sm">Account</span>
          </Link>
          <Link href="/cart" className="hover:opacity-70 transition-opacity">
            <span className="text-sm">Cart(0)</span>
          </Link>
        </div>

        {/* Mobile Right Icons */}
        <div className="flex items-center space-x-4 lg:hidden">
          <Link href="/search" className="hover:opacity-70 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <Link href="/cart" className="hover:opacity-70 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black text-white py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <div 
              onClick={() => handleMobileItemClick('shop')}
              className="py-2 border-b border-gray-800"
            >
              <span className="uppercase tracking-wider font-medium text-sm flex justify-between items-center">
                SHOP
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'shop' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            
            <div 
              onClick={() => handleMobileItemClick('science')}
              className="py-2 border-b border-gray-800"
            >
              <span className="uppercase tracking-wider font-medium text-sm flex justify-between items-center">
                SCIENCE
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'science' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            
            <div 
              onClick={() => handleMobileItemClick('lab')}
              className="py-2 border-b border-gray-800"
            >
              <span className="uppercase tracking-wider font-medium text-sm flex justify-between items-center">
                IN THE LAB
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'lab' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            
            <Link href="/partner-locator" className="py-2 border-b border-gray-800">
              <span className="text-sm">Partner Locator</span>
            </Link>
            
            <Link href="/account" className="py-2 border-b border-gray-800">
              <span className="text-sm">Account</span>
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Dropdowns */}
      {!mobileMenuOpen && (
        <>
          {activeDropdown === 'shop' && <ShopDropdown onMouseLeave={() => setActiveDropdown(null)} />}
          {activeDropdown === 'science' && <ScienceDropdown onMouseLeave={() => setActiveDropdown(null)} />}
          {activeDropdown === 'lab' && <LabDropdown onMouseLeave={() => setActiveDropdown(null)} />}
        </>
      )}
    </div>
  );
};

export default Navbar;
