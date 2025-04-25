import React from 'react';
import { ProfileData } from '../types/types';

interface EducationProps {
  profileData: ProfileData;
}

const Education: React.FC<EducationProps> = ({ profileData }) => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          <span className="text-[#9F2B68]">Education</span> & Career
        </h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-xl font-medium mb-8 text-[#9F2B68]">Education</h3>
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#9F2B68]/60 before:via-[#9F2B68]/20 before:to-transparent">
              {profileData.educations.map((edu, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#9F2B68] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {index + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <time className="text-sm text-gray-500">{edu.year}</time>
                    </div>
                    <div className="text-gray-700">{edu.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Career Information */}
          <div>
            <h3 className="text-xl font-medium mb-8 text-[#9F2B68]">Career</h3>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Current Occupation</h4>
                  <p className="text-gray-700">{profileData.occupation}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Annual Income</h4>
                  <p className="text-gray-700">{profileData.income}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Skills & Expertise</h4>
                  <ul className="list-disc list-inside text-gray-700 pl-4 space-y-1">
                    <li>Strategic Marketing Planning</li>
                    <li>Team Leadership</li>
                    <li>Digital Marketing</li>
                    <li>Project Management</li>
                    <li>Client Relationship Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;