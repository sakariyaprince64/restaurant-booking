import React from 'react';
import { Clock, Wifi, MapPin, Car } from 'lucide-react';
// Removed colours import, using CSS variables from roots.css

const Features = () => {
  const features = [
    {
  icon: <Clock className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: '24/7 Room Service',
      description: 'Round-the-clock service for your comfort and convenience'
    },
    {
  icon: <Car className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'AC & Non-AC Options',
      description: 'Choose from our variety of air-conditioned and non-AC rooms'
    },
    {
  icon: <Wifi className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Free WiFi',
      description: 'Stay connected with complimentary high-speed internet'
    },
    {
  icon: <MapPin className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Prime Location',
      description: 'Strategically located in the heart of the city'
    }
  ];

  return (
  <section style={{ backgroundColor: 'var(--text-secondary)' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--heading-text)' }}>
            Why Choose Us
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--primary)' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-3 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: 'var(--bg-card)' }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--heading-text)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-primary)' }} className="leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;