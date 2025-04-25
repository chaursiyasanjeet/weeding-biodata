import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold mb-6">Portfolio</h2>
          
          <div className="flex justify-center space-x-8 mb-8">
            {['Home', 'About', 'Family', 'Education', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.facebook.com/share/1Pd2yS9v9r/" target='_blank' className="text-gray-300 hover:text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/sumant4778?igsh=cGtnNTR4a2Z3YTZk" target='_blank' className="text-gray-300 hover:text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
          
          <div className="text-gray-400 text-sm flex items-center justify-center">
            <span>&copy; {currentYear} Wedding Portfolio. All rights reserved.</span>
            <span className="inline-flex items-center ml-2">
              Made with <Heart size={16} className="mx-1 text-[#9F2B68]" /> for your special day
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;