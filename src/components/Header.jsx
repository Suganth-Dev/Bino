import React, { useState } from 'react';
import { Menu, X, MessageCircle, Shield, Star } from 'lucide-react';
import ChatInterface from './ChatInterface';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Bino</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#trust" className="text-gray-600 hover:text-blue-600 transition-colors">Trust & Security</a>
            <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setShowChat(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Try Bino Now</span>
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#trust" className="text-gray-600 hover:text-blue-600 transition-colors">Trust & Security</a>
              <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <button 
                onClick={() => setShowChat(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Try Bino Now</span>
              </button>
            </nav>
          </div>
        )}
      </div>
      </header>
      
      {showChat && <ChatInterface onClose={() => setShowChat(false)} />}
    </>
  );
};

export default Header;