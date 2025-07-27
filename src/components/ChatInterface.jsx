import React, { useState, useEffect, useRef } from 'react';
import { Send, Phone, Video, MoreVertical, ArrowLeft, MessageCircle, Clock, CheckCheck } from 'lucide-react';

const ChatInterface = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const messagesEndRef = useRef(null);

  const chatFlow = [
    {
      type: 'bot',
      message: "Hi! I'm Bino 👋\n\nI help you find and book local services in seconds. What are you looking for today?",
      delay: 1000
    },
    {
      type: 'suggestions',
      suggestions: [
        "🍽️ Food & Restaurants",
        "🏨 Hotels & Stay", 
        "🔧 Home Services",
        "🚗 Travel & Transport"
      ],
      delay: 500
    }
  ];

  const responses = {
    "🍽️ Food & Restaurants": [
      {
        type: 'bot',
        message: "Great choice! 🍽️\n\nTell me more about what you're craving:",
        delay: 800
      },
      {
        type: 'suggestions',
        suggestions: [
          "Veg lunch under ₹200",
          "Pizza delivery now",
          "South Indian breakfast",
          "Chinese dinner for 4"
        ],
        delay: 500
      }
    ],
    "Veg lunch under ₹200": [
      {
        type: 'bot',
        message: "Perfect! 🔍 Searching for veg lunch options under ₹200...",
        delay: 1000
      },
      {
        type: 'bot',
        message: "Found 8 restaurants near you! Here are the top matches:",
        delay: 1500
      },
      {
        type: 'vendor',
        vendor: "Raja Restaurant",
        message: "₹180 - Unlimited South Indian Thali\n📍 500m away • ⭐ 4.5 (234 reviews)\n🕐 Available now - 20 mins",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        delay: 1000
      },
      {
        type: 'vendor',
        vendor: "Green Leaf Cafe",
        message: "₹150 - Gujarati Thali + Sweet\n📍 300m away • ⭐ 4.3 (156 reviews)\n🕐 Ready in 15 mins",
        image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        delay: 800
      },
      {
        type: 'bot',
        message: "Which one would you like to book? Just tap on your choice! 👆",
        delay: 500
      }
    ],
    "🏨 Hotels & Stay": [
      {
        type: 'bot',
        message: "Looking for accommodation! 🏨\n\nWhere and when do you need to stay?",
        delay: 800
      },
      {
        type: 'suggestions',
        suggestions: [
          "Goa this weekend",
          "Bangalore 1 night",
          "Mumbai business trip",
          "Hill station getaway"
        ],
        delay: 500
      }
    ],
    "🔧 Home Services": [
      {
        type: 'bot',
        message: "Home services coming right up! 🔧\n\nWhat do you need help with?",
        delay: 800
      },
      {
        type: 'suggestions',
        suggestions: [
          "AC repair urgent",
          "Plumber needed",
          "House cleaning",
          "Electrician service"
        ],
        delay: 500
      }
    ],
    "🚗 Travel & Transport": [
      {
        type: 'bot',
        message: "Let's get you moving! 🚗\n\nWhat kind of transport do you need?",
        delay: 800
      },
      {
        type: 'suggestions',
        suggestions: [
          "Airport pickup",
          "Cab to office",
          "Outstation trip",
          "Bike rental"
        ],
        delay: 500
      }
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (currentStep < chatFlow.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, { ...chatFlow[currentStep], timestamp: new Date() }]);
          setIsTyping(false);
          setCurrentStep(prev => prev + 1);
        }, chatFlow[currentStep].delay);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleSuggestionClick = (suggestion) => {
    // Add user message
    setMessages(prev => [...prev, { 
      type: 'user', 
      message: suggestion, 
      timestamp: new Date() 
    }]);

    // Add bot responses
    if (responses[suggestion]) {
      responses[suggestion].forEach((response, index) => {
        setTimeout(() => {
          if (index === 0) setIsTyping(true);
          setTimeout(() => {
            setMessages(prev => [...prev, { ...response, timestamp: new Date() }]);
            if (index === responses[suggestion].length - 1) setIsTyping(false);
          }, response.delay);
        }, index * 200);
      });
    }
  };

  const handleVendorClick = (vendor) => {
    setMessages(prev => [...prev, { 
      type: 'user', 
      message: `Book ${vendor}`, 
      timestamp: new Date() 
    }]);

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          message: `🎉 Booking confirmed at ${vendor}!\n\n📋 Booking ID: BN${Math.random().toString(36).substr(2, 6).toUpperCase()}\n📞 Contact: +91 98765 43210\n\n✅ Table reserved for 1 person\n🕐 Please arrive within 30 minutes\n\nEnjoy your meal! 😊`, 
          timestamp: new Date() 
        }]);
        setIsTyping(false);
      }, 1500);
    }, 800);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages(prev => [...prev, { 
        type: 'user', 
        message: inputValue, 
        timestamp: new Date() 
      }]);
      setInputValue('');
      
      // Simple auto-response
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            message: "Thanks for your message! This is a demo - in the real Bino, I'd help you find exactly what you're looking for. Try the suggested options above to see how it works! 😊", 
            timestamp: new Date() 
          }]);
          setIsTyping(false);
        }, 1000);
      }, 500);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 text-white p-4 flex items-center space-x-3">
          <button onClick={onClose} className="hover:bg-green-700 p-1 rounded">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Bino Assistant</h3>
            <p className="text-sm text-green-100">Online • Typically replies instantly</p>
          </div>
          <div className="flex space-x-2">
            <button className="hover:bg-green-700 p-2 rounded">
              <Phone className="w-5 h-5" />
            </button>
            <button className="hover:bg-green-700 p-2 rounded">
              <Video className="w-5 h-5" />
            </button>
            <button className="hover:bg-green-700 p-2 rounded">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div key={index}>
              {message.type === 'bot' && (
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md p-3 max-w-xs shadow-sm">
                    <p className="text-gray-800 whitespace-pre-line">{message.message}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                    </div>
                  </div>
                </div>
              )}

              {message.type === 'user' && (
                <div className="flex justify-end">
                  <div className="bg-green-600 text-white rounded-2xl rounded-tr-md p-3 max-w-xs">
                    <p>{message.message}</p>
                    <div className="flex items-center justify-end mt-2 space-x-1">
                      <span className="text-xs text-green-100">{formatTime(message.timestamp)}</span>
                      <CheckCheck className="w-4 h-4 text-green-100" />
                    </div>
                  </div>
                </div>
              )}

              {message.type === 'vendor' && (
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{message.vendor.charAt(0)}</span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md p-3 max-w-xs shadow-sm border border-blue-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-blue-600">{message.vendor}</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    {message.image && (
                      <img src={message.image} alt="Food" className="w-full h-24 object-cover rounded-lg mb-2" />
                    )}
                    <p className="text-gray-800 whitespace-pre-line text-sm">{message.message}</p>
                    <button 
                      onClick={() => handleVendorClick(message.vendor)}
                      className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    >
                      Book Now
                    </button>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                    </div>
                  </div>
                </div>
              )}

              {message.type === 'suggestions' && (
                <div className="flex flex-wrap gap-2 ml-10">
                  {message.suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-green-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;