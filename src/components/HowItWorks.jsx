import React, { useState } from 'react';
import { MessageCircle, Search, Users, CheckCircle, Play, Smartphone, Globe, Mail } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Start Conversation",
      description: "Send a message to Bino on WhatsApp with what you need",
      example: "Need veg lunch in Indiranagar under ₹200",
      color: "blue"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "AI Matches Vendors",
      description: "Our AI instantly finds and matches relevant verified vendors",
      example: "Found 8 restaurants • 3 available now",
      color: "green"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Get Real Responses",
      description: "Receive live responses from multiple vendors with pricing",
      example: "₹180 thali at Raja Restaurant • Available in 20 mins",
      color: "purple"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Book & Enjoy",
      description: "Choose your preferred option and confirm booking instantly",
      example: "Booking confirmed! Table reserved for 2",
      color: "orange"
    }
  ];

  const platforms = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "WhatsApp",
      description: "Primary platform with full features",
      status: "Active"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Web App",
      description: "PWA with chat history and visual browsing",
      status: "Available"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      name: "SMS",
      description: "Fallback option for basic booking",
      status: "Backup"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      description: "Confirmation and detailed receipts",
      status: "Support"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500 border-blue-500 text-blue-600 bg-blue-50",
      green: "bg-green-500 border-green-500 text-green-600 bg-green-50",
      purple: "bg-purple-500 border-purple-500 text-purple-600 bg-purple-50",
      orange: "bg-orange-500 border-orange-500 text-orange-600 bg-orange-50"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Bino Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From request to booking in just 4 simple steps. Experience the fastest way to find and book local services.
          </p>
          
          <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            <Play className="w-5 h-5 mr-2" />
            Watch 30s Demo Video
          </button>
        </div>

        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-4 p-6 rounded-xl cursor-pointer transition-all duration-300 mb-4 ${
                      activeStep === index 
                        ? 'bg-white shadow-lg transform scale-105' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeStep === index 
                        ? `${getColorClasses(step.color).split(' ')[0]} text-white` 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700 font-mono">
                        {step.example}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Multi-Platform Access</h3>
                <p className="text-gray-600 mb-6">
                  Never miss a booking with our multi-channel approach. Start on WhatsApp, 
                  continue on web, get confirmations via email.
                </p>
                
                <div className="space-y-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          {platform.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{platform.name}</h4>
                          <p className="text-sm text-gray-600">{platform.description}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        platform.status === 'Active' ? 'bg-green-100 text-green-800' :
                        platform.status === 'Available' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {platform.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Try These Sample Queries
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Need veg lunch in Indiranagar under ₹200",
              "Book hotel in Goa for 2 nights next weekend",
              "Find AC repair service in Koramangala",
              "Book cab from airport to Whitefield",
              "Need catering for 50 people tomorrow",
              "Find gym membership near HSR Layout"
            ].map((query, index) => (
              <button 
                key={index}
                className="text-left p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                  <span className="text-gray-700 group-hover:text-blue-700">{query}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;