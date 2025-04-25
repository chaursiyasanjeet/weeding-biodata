import React from 'react';
import { ProfileData } from '../types/types';

interface FamilyProps {
  profileData: ProfileData;
}

const Family: React.FC<FamilyProps> = ({ profileData }) => {
  return (
    <section id="family" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          <span className="text-[#9F2B68]">Family</span> Background
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Father */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <h3 className="text-xl font-medium mb-6 text-[#9F2B68]">Father</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-gray-500 font-medium">Name:</span>
                  <span className="text-gray-800 text-right">{profileData.family.father}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500 font-medium">Occupation:</span>
                  <span className="text-gray-800 text-right">{profileData.family.fatherOccupation}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500 font-medium">Contact no.:</span>
                  <span className="text-gray-800 text-right">{profileData.family.fatherContactNo}</span>
                </div>
              </div>
            </div>
            
            {/* Mother */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <h3 className="text-xl font-medium mb-6 text-[#9F2B68]">Mother</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-gray-500 font-medium">Name:</span>
                  <span className="text-gray-800 text-right">{profileData.family.mother}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500 font-medium">Occupation:</span>
                  <span className="text-gray-800 text-right">{profileData.family.motherOccupation}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Siblings */}
          <h3 className="text-xl font-medium mt-12 mb-6 text-[#9F2B68]">Siblings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profileData.family.siblings.map((sibling, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-transform hover:translate-y-[-5px]"
              >
                <h4 className="text-lg font-medium mb-4">{sibling.relation}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-gray-500 font-medium">Name:</span>
                    <span className="text-gray-800 text-right">{sibling.name}</span>
                  </div>
                  {sibling.age && (
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium">Age:</span>
                      <span className="text-gray-800 text-right">{sibling.age} years</span>
                    </div>
                  )}
                  {sibling.occupation && (
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium">Occupation:</span>
                      <span className="text-gray-800 text-right">{sibling.occupation}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Family;