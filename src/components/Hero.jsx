import React from 'react';
import { useState } from 'react';
import { MessageCircle, Zap, Shield, Globe } from 'lucide-react';
import ChatInterface from './ChatInterface';

const Hero = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Book Anything in 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500"> 90 Seconds</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bino connects you with local vendors instantly through WhatsApp. From restaurants to hotels, 
            from services to bookings – get real-time responses and verified providers at your fingertips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => setShowChat(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Try Bino Now</span>
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-3">
              <Globe className="w-5 h-5" />
              <span>Try Web Version</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get responses from multiple vendors in under 90 seconds</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Vendors</h3>
              <p className="text-gray-600">All vendors are verified with reviews and trust badges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Platform</h3>
              <p className="text-gray-600">WhatsApp, Web, SMS, and Email - never miss a booking</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      {showChat && <ChatInterface onClose={() => setShowChat(false)} />}
    </>
  );
};

export default Hero;