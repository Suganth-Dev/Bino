import React from 'react';
import { Shield, Star, CheckCircle, Award, Lock, Users } from 'lucide-react';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Vendors",
      description: "All vendors undergo thorough verification with business licenses, reviews, and quality checks",
      badge: "Gold Verified"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Real User Reviews",
      description: "Authentic reviews from real customers with verified booking history and photo evidence",
      badge: "5-Star System"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Payments",
      description: "End-to-end encrypted payment processing with instant confirmation and refund protection",
      badge: "Bank Grade Security"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Trust",
      description: "Join thousands of satisfied customers who trust Bino for their daily booking needs",
      badge: "50K+ Users"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Food Blogger",
      rating: 5,
      text: "Found the perfect Bali restaurant in 2 minutes! The vendor was verified and the experience was exactly as described.",
      location: "Bangalore"
    },
    {
      name: "Rajesh Kumar",
      role: "Business Traveler", 
      rating: 5,
      text: "Booked hotels across 5 cities using Bino. Every vendor was legitimate, responsive, and delivered quality service.",
      location: "Mumbai"
    },
    {
      name: "Anita Desai",
      role: "Event Planner",
      rating: 5,
      text: "The review system helped me choose the right caterer. Post-service feedback was seamless through WhatsApp.",
      location: "Delhi"
    }
  ];

  return (
    <section id="trust" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built on Trust & Security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safety and satisfaction are our top priorities. Every interaction on Bino 
            is secured, verified, and backed by our comprehensive trust system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                <div className="text-green-600">
                  {feature.icon}
                </div>
              </div>
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                <Award className="w-4 h-4 mr-1" />
                {feature.badge}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our Users Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;