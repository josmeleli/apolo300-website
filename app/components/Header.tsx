'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('INICIO');
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'INICIO', href: '/' },
    { name: 'NOSOTROS', href: '/nosotros' },
    { name: 'SERVICIOS', href: '/servicios', hasDropdown: true },
    { name: 'POLÍTICAS', href: '/politicas' },
    { name: 'ÚNETE A NOSOTROS', href: '/unete-a-nosotros' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACTO', href: '/contacto' },
  ];

  const servicesDropdown = [
    { name: 'Seguridad Privada', href: '/servicios/seguridad-privada' },
    { name: 'Seguridad para Eventos', href: '/servicios/seguridad-eventos' },
    { name: 'Seguridad Corporativa', href: '/servicios/seguridad-corporativa' },
    { name: 'Seguridad de Resguardo', href: '/servicios/seguridad-resguardo' },
    { name: 'Prevención de Pérdidas', href: '/servicios/prevencion-perdidas' },
  ];

  // Hydration effect
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Update active link based on current pathname
  useEffect(() => {
    if (!isHydrated) return;
    
    // Check if we're on any services page (including sub-pages)
    if (pathname.startsWith('/servicios')) {
      setActiveLink('SERVICIOS');
    } else {
      const currentNavItem = navigation.find(item => item.href === pathname);
      if (currentNavItem) {
        setActiveLink(currentNavItem.name);
      } else if (pathname === '/') {
        setActiveLink('INICIO');
      }
    }
  }, [pathname, isHydrated]);

  // Don't render interactive elements until hydrated
  if (!isHydrated) {
    return (
      <header className="fixed w-full top-0 z-50 shadow-lg">
        {/* Top bar - White background with logo and social media */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex justify-between items-center py-3 sm:py-4 md:py-6">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <img 
                    src="/images/apolo300-corporación.webp" 
                    alt="Apolo Security" 
                    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto cursor-pointer"
                  />
                </Link>
              </div>

              {/* Social Media Icons */}
              <div className="hidden lg:flex space-x-4 md:space-x-6">
                <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
                  <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
                  <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Mobile menu button */}
              <button className="lg:hidden text-blue-900 p-1">
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom navbar - Darker blue background with navigation */}
        <div className="bg-blue-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex relative">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className="text-white hover:text-yellow-400 transition-colors font-bold text-sm xl:text-base px-4 xl:px-6 py-3 border-b-2 border-transparent hover:border-red-300 whitespace-nowrap flex items-center"
                  >
                    {item.name}
                    {item.hasDropdown && <span className="ml-1">▼</span>}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed w-full top-0 z-50 shadow-lg">
      {/* Top bar - White background with logo and social media */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center py-3 sm:py-4 md:py-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src="/images/apolo300-corporación.webp" 
                  alt="Apolo Security" 
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="hidden lg:flex space-x-4 md:space-x-6">
              <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-blue-900 p-1"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom navbar - Darker blue background with navigation */}
      <div className="bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex relative">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveLink(item.name);
                  }}
                  className={`text-white hover:text-yellow-400 transition-colors font-bold text-sm xl:text-base px-4 xl:px-6 py-3 border-b-2 whitespace-nowrap flex items-center ${
                    activeLink === item.name 
                      ? 'border-red-500' 
                      : 'border-transparent hover:border-red-300'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <span className="ml-1">▼</span>}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-64 z-50">
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => {
                          setActiveLink('SERVICIOS');
                        }}
                        className={`block px-4 py-3 transition-colors border-b border-gray-100 last:border-b-0 ${
                          pathname === service.href
                            ? 'text-white bg-red-800 font-semibold'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 sm:px-4 pt-2 pb-4 sm:pb-5 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        if (!item.hasDropdown) {
                          setIsMenuOpen(false);
                          setActiveLink(item.name);
                        }
                      }}
                      className={`text-white hover:text-yellow-400 block px-3 py-2 sm:py-3 text-base sm:text-lg font-bold border-l-4 rounded-r ${
                        activeLink === item.name 
                          ? 'border-red-600 bg-red-800 font-semibold' 
                          : 'border-transparent hover:bg-blue-800'
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && <span className="ml-1">▼</span>}
                    </Link>
                    
                    {/* Mobile Dropdown for Services - Always visible */}
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveLink('SERVICIOS');
                            }}
                            className={`block px-3 py-2 text-sm border-l-2 transition-colors ${
                              pathname === service.href
                                ? 'text-white border-red-600 bg-red-800 font-semibold'
                                : 'text-blue-200 border-blue-700 hover:text-yellow-400 hover:border-yellow-400'
                            }`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
