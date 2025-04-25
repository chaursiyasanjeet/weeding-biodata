import React from 'react';
import { ProfileData } from '../types/types';

interface AboutProps {
  profileData: ProfileData;
}

const About: React.FC<AboutProps> = ({ profileData }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          <span className="text-[#9F2B68]">About</span> Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Image (only visible on small screens) */}
          <div className="lg:hidden">
            <div className="rounded-lg overflow-hidden shadow-md h-80 w-full">
              <img 
                src={profileData.profileImage} 
                alt={profileData.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Personal Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-medium mb-6 text-[#9F2B68]">Personal Details</h3>
              <div className="space-y-4">
                {[
                  { label: 'Full Name', value: profileData.name },
                  { label: 'Height', value: profileData.height },
                  { label: 'Date of Birth', value: profileData.dateOfBirth },
                  { label: 'Birth Place', value: profileData.birthPlace },
                  { label: 'Marital Status', value: profileData.maritalStatus },
                  { label: 'Religion', value: profileData.religion },
                  { label: 'Caste', value: profileData.caste },
                  { label: 'Subcaste', value: profileData.subCaste },
                  { label: 'Gotra', value: profileData.Gotra },
                  { label: 'Rashi', value: profileData.rashi },
                  { label: 'Total brothers', value: profileData.totalBrothers },
                  { label: 'Total sisters', value: profileData.totalSisters },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="text-gray-500 font-medium">{item.label}:</span>
                    <span className="text-gray-800 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Profile Image (only visible on large screens) */}
          <div className="hidden lg:block">
            <div className="rounded-lg overflow-hidden shadow-md h-full">
              <img 
                src={profileData.profileImage} 
                alt={profileData.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* About Me and Hobbies */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h3 className="text-xl font-medium mb-6 text-[#9F2B68]">About Me</h3>
              <p className="text-gray-700 leading-relaxed">
                {profileData.about}
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-6 text-[#9F2B68]">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-3">
                {profileData.hobbies.map((hobby, index) => (
                  <span 
                    key={index} 
                    className="bg-white px-4 py-2 rounded-full text-sm border border-[#9F2B68]/20 text-[#9F2B68]"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;