import React, { useState } from 'react';
import { ProfileData } from '../types/types';
import { X } from 'lucide-react';

interface GalleryProps {
  profileData: ProfileData;
}

const Gallery: React.FC<GalleryProps> = ({ profileData }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const currentImage = profileData.gallery.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          <span className="text-[#9F2B68]">Photo</span> Gallery
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.gallery.map((photo) => (
            <div 
              key={photo.id}
              onClick={() => openModal(photo.id)}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md aspect-[4/3] transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
              <img 
                src={photo.url} 
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium text-sm">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {selectedImage !== null && currentImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white z-10 bg-black/50 rounded-full p-1"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div className="relative aspect-video sm:aspect-[16/9]">
                <img 
                  src={currentImage.url} 
                  alt={currentImage.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-medium text-gray-800">{currentImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;