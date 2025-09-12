import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
// Removed colours import, using CSS variables from roots.css

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely wonderful stay! The staff was incredibly helpful and the rooms were spotless. The location is perfect for exploring the city.',
      location: 'Tourist from Delhi'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Great value for money. The AC rooms are well-maintained and the service is top-notch. Will definitely stay here again on my next visit.',
      location: 'Business Traveler'
    },
    {
      name: 'Maria Garcia',
      rating: 4,
      text: 'Clean, comfortable, and affordable. The 24/7 room service was very convenient. The location is excellent with easy access to local attractions.',
      location: 'International Guest'
    },
    {
      name: 'Amit Sharma',
      rating: 5,
      text: 'Excellent hospitality and beautiful rooms. The staff went above and beyond to make our stay memorable. Highly recommended!',
      location: 'Family Vacation'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating:number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className="w-5 h-5"
        style={{ color: i < rating ? 'var(--highlight)' : 'var(--text-secondary)', fill: i < rating ? 'var(--highlight)' : 'var(--text-secondary)' }}
      />
    ));
  };

  return (
  <section style={{ backgroundColor: 'var(  --bg-footer)', color: 'var(--secondary)' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--primary)' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(4px)', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
                    <div className="mb-6">
                      <Quote className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--overlay)' }} />
                      <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: 'var(--secondary)' }}>
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="flex justify-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <h4 className="font-serif text-xl font-semibold mb-1" style={{ color: 'var(--overlay)' }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                  style={{ backgroundColor: currentIndex === index ? '#bc3535' : 'rgba(255,255,255,0.3)' }}
                className="w-3 h-3 rounded-full transition-colors duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;