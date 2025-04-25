import React from 'react';
import { ProfileData } from '../types/types';

interface HeroProps {
  profileData: ProfileData;
}

const Hero: React.FC<HeroProps> = ({ profileData }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src={profileData.profileImage} 
          alt={profileData.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fadeIn">
            {profileData.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-white mb-8 font-light">
            {profileData.occupation} | {profileData.height}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#9F2B68] hover:bg-[#7D2352] text-white px-8 py-3 rounded-full transition-colors duration-300 font-medium"
            >
              View Profile
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-full transition-colors duration-300 font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-1 h-16 mx-auto relative overflow-hidden">
            <div className="h-8 w-1 bg-white absolute animate-scrollDown"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;