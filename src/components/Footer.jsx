import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Globe, Shield, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Bino</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The fastest way to book local services. From restaurants to hotels, 
              from repairs to rentals - get instant responses from verified vendors.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 bg-green-600 px-4 py-2 rounded-lg">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp Ready</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Bot</span>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Web App</span>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>SMS Support</span>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email Updates</span>
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Restaurants & Food</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hotels & Stay</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Local Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel & Transport</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events & Catering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Trust & Safety</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Verified Vendors</span>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Reviews & Ratings</span>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Secure Payments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Available in 50+ Indian Cities</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageCircle className="w-4 h-4" />
                <span>50,000+ Happy Users</span>
              </div>
            </div>
            <div className="text-gray-400">
              <p>&copy; 2025 Bino. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;