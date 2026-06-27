'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { imagekitUrl } from '../../lib/imagekit';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logoSrc = process.env.NEXT_PUBLIC_IMAGEKIT_URL
    ? imagekitUrl('/logo.png')
    : '/logo.png';

  return (
    <div className="relative">
      <div 
        className="absolute w-full h-px bg-white z-50"
        style={{
          top: isScrolled ? '74px' : '98px',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
        }}
      />
      <nav 
        className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold text-white">
          <Image src={logoSrc} alt="Logo" width={200} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#" onClick={closeMenu}>Home</NavLink>
          <NavLink href="#" onClick={closeMenu}>Things To Do</NavLink>
          <NavLink href="/places-to-stay" onClick={closeMenu}>Places To Stay</NavLink>
          <NavLink href="#" onClick={closeMenu}>About</NavLink>
          <NavLink href="#" onClick={closeMenu}>Blog</NavLink>
          <NavLink href="#" onClick={closeMenu}>Contact</NavLink>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          ) : (
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
          )}
        </button>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-out transform ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          } md:hidden`}
        >
          {/* Logo - positioned at top center */}
          <div className={`absolute top-8 transform transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
              <Link href="/" onClick={closeMenu} className="block">
              <Image 
                src={logoSrc} 
                alt="Logo" 
                width={160} 
                height={40} 
                className="w-auto h-10 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Close button - positioned at top right */}
          <button 
            onClick={closeMenu}
            className={`absolute top-6 right-6 p-2 text-white hover:text-orange-400 transition-all duration-300 transform ${
              isMenuOpen ? 'rotate-0 scale-100' : 'rotate-90 scale-90 opacity-0'
            }`}
            aria-label="Close menu"
          >
            <svg 
              className="w-10 h-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M6 18L18 6M6 6l12 12" 
                className="transition-all duration-300"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className={`flex flex-col items-center space-y-8 text-white text-xl transform transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <NavLink href="#" onClick={closeMenu}>Home</NavLink>
            <NavLink href="#" onClick={closeMenu}>Things To Do</NavLink>
            <NavLink href="/places-to-stay" onClick={closeMenu}>Places To Stay</NavLink>
            <NavLink href="#" onClick={closeMenu}>About</NavLink>
            <NavLink href="#" onClick={closeMenu}>Blog</NavLink>
            <NavLink href="#" onClick={closeMenu}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}


function NavLink({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className="text-white hover:text-orange-400 transition-colors duration-200 px-4 py-2"
    >
      {children}
    </Link>
  );
}
