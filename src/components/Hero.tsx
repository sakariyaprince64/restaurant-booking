import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// Removed colours import, using CSS variables from roots.css

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      >
  <div className="absolute inset-0" style={{ backgroundColor: 'var(--nav-focus)', opacity: 0.4 }}></div>
      </div>

      {/* Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto px-4" style={{ color: 'var(--secondary)' }}>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeIn">
          Experience Comfort
          <span className="block" style={{ color: 'var(--overlay)' }}>& Luxury</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fadeInDelay">
          at Hotel Khattimly
        </p>
        <button 
          style={{ backgroundColor: 'var(--primary)', color: 'var(--secondary)' }}
          className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 mx-auto animate-fadeInDelayMore"
          onClick={() => navigate('/contact')}
        >
          <span>Book Now</span>
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 rounded-full flex justify-center animate-bounce" style={{ border: '2px solid var(--secondary)' }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: 'var(--secondary)' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;