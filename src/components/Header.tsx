import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-serif font-bold">
            <span className={isScrolled ? 'text-[#9F2B68]' : 'text-white'}>Sumant</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'family', 'education', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  isScrolled ? 'text-gray-700 hover:text-[#9F2B68]' : 'text-white hover:text-[#D4AF37]'
                } font-medium capitalize transition-colors`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            {['home', 'about', 'family', 'education', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-[#9F2B68] font-medium capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;