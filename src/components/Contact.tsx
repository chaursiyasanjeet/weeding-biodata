import React, { useState } from 'react';
import { ProfileData } from '../types/types';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  profileData: ProfileData;
}

const Contact: React.FC<ContactProps> = ({ profileData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          <span className="text-[#9F2B68]">Contact</span> Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-medium mb-8 text-[#9F2B68]">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#9F2B68]/10 p-3 rounded-full mr-4">
                  <Mail className="text-[#9F2B68]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href={`mailto:${profileData.contactEmail}`} className="text-gray-700 hover:text-[#9F2B68] transition-colors">
                    {profileData.contactEmail}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#9F2B68]/10 p-3 rounded-full mr-4">
                  <Phone className="text-[#9F2B68]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href={`tel:${profileData.contactPhone}`} className="text-gray-700 hover:text-[#9F2B68] transition-colors">
                    {profileData.contactPhone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#9F2B68]/10 p-3 rounded-full mr-4">
                  <MapPin className="text-[#9F2B68]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-700">{profileData.address}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-4 text-[#9F2B68]">Connect With Me</h3>
              <p className="text-gray-700 mb-4">
                Feel free to reach out if you'd like to know more about me or if you think we might be a good match.
              </p>
              
              <div className="flex space-x-4 mt-6">
                {/* These are placeholders - in a real app, you'd link to actual social profiles */}
                <a href="https://www.facebook.com/share/1Pd2yS9v9r/" target='_blank' className="bg-[#9F2B68] text-white p-3 rounded-full hover:bg-[#7D2352] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/sumant4778?igsh=cGtnNTR4a2Z3YTZk" target='_blank' className="bg-[#9F2B68] text-white p-3 rounded-full hover:bg-[#7D2352] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          {/* <div>
            <h3 className="text-xl font-medium mb-8 text-[#9F2B68]">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F2B68]/50 focus:border-[#9F2B68]"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F2B68]/50 focus:border-[#9F2B68]"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F2B68]/50 focus:border-[#9F2B68]"
                  placeholder="I'd like to know more about you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#9F2B68] hover:bg-[#7D2352] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitSuccess && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg mt-4">
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;