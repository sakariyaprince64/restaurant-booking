import React from 'react';
// Removed colours import, using CSS variables from roots.css

const Gallery = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Deluxe Room'
    },
    {
      url: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Restaurant'
    },
    {
      url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Lounge Area'
    },
    {
      url: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Premium Suite'
    },
    {
      url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Reception Area'
    },
    {
      url: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Dining Room'
    }
  ];

  return (
  <section style={{ backgroundColor: 'var(--secondary)' }} className="py-20">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--heading-text)' }}>
            Gallery
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--primary)' }}></div>
          <p className="mx-auto px-4 text-lg max-w-2xl" style={{ color: 'var(--text-primary)' }}>
            Explore our beautiful spaces and discover the perfect blend of comfort and elegance
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4 justify-center" style={{ width: 'max-content', margin: '0 auto' }}>
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden shadow-lg"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: 'var(--nav-focus)', opacity: 0.4 }}>
                  <h3 className="text-xl font-serif font-semibold" style={{ color: 'var(--secondary)' }}>
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;