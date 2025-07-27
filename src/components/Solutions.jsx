import React from 'react';
import { CheckCircle, Globe, Shield, Zap, Star, MessageSquare } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      problem: "Platform Dependence on WhatsApp",
      icon: <Globe className="w-6 h-6" />,
      color: "blue",
      solutions: [
        "Progressive Web App (PWA) with chat history and deep WhatsApp linking",
        "Email and SMS fallback options when WhatsApp is unavailable",
        "API layer for businesses to embed Bino widgets on their websites",
        "Multi-channel booking system ensures 99.9% uptime"
      ]
    },
    {
      problem: "User Trust & Security Concerns",
      icon: <Shield className="w-6 h-6" />,
      color: "green",
      solutions: [
        "Verified vendor badges with green-tick and gold-tick verification levels",
        "In-chat review system with 1-5 star quick replies after service completion",
        "Secure UPI/payment gateway integration within WhatsApp chat flow",
        "Transparent vendor profiles with ratings, reviews, and business verification"
      ]
    },
    {
      problem: "Discovery & Onboarding Friction",
      icon: <Zap className="w-6 h-6" />,
      color: "purple",
      solutions: [
        "Smart prompts for new users with sample questions like 'Need veg lunch in Indiranagar under ₹200'",
        "Interactive demo flow and guided walkthrough via WhatsApp",
        "Simplified vendor onboarding bot with quick message-based registration",
        "AI-powered suggestion engine for better query matching"
      ]
    },
    {
      problem: "Scalability for Real-time Responses",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "orange",
      solutions: [
        "Hybrid search logic with catalog-based fallback for slow vendor responses",
        "Bino Assistant auto-replies with similar vendor suggestions while waiting",
        "Push notification system to keep vendors active and responsive",
        "Load balancing across multiple vendor pools for instant matching"
      ]
    },
    {
      problem: "Limited Visual Browsing Experience",
      icon: <Star className="w-6 h-6" />,
      color: "pink",
      solutions: [
        "Rich media carousels using WhatsApp's multi-image and button features",
        "'Bino View' web links for detailed browsing with filters, images, and maps",
        "Visual catalog integration that maintains conversation continuity",
        "Interactive product galleries with booking directly from visuals"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
      green: "from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
      orange: "from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200",
      pink: "from-pink-500 to-pink-600 bg-pink-50 text-pink-600 border-pink-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solutions to Every Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've identified and solved the key challenges facing modern booking platforms. 
            Here's how Bino addresses each concern with innovative solutions.
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(solution.color).split(' ')[2]} ${getColorClasses(solution.color).split(' ')[3]}`}>
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {solution.problem}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r ${getColorClasses(solution.color).split(' ')[0]} ${getColorClasses(solution.color).split(' ')[1]} rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {solution.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{sol}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;