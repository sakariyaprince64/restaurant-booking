import React, { useState } from 'react';
import { useBooking } from '../contexts/BookingContext';
import Footer from '../components/Footer';
import '../contact-mobile.css';
// Removed colours import, using CSS variables from roots.css

const Rooms = () => {
  const [activeTab, setActiveTab] = useState('single');
  const { openBookingModal } = useBooking();

  const singleRooms = [
    {
      id: 1,
      title: 'Single Deluxe AC',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 1500,
      originalPrice: 2000,
      isAC: true,
      sharingType: 'Single',
      features: ['AC', 'Free WiFi', 'TV', 'Private Bathroom'],
      description: 'Comfortable single occupancy room with modern amenities and air conditioning.'
    },
    {
      id: 2,
      title: 'Single Standard',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 800,
      originalPrice: 1000,
      isAC: false,
      sharingType: 'Single',
      features: ['Fan', 'Free WiFi', 'TV', 'Private Bathroom'],
      description: 'Budget-friendly single room with essential amenities for comfortable stay.'
    },
    {
      id: 3,
      title: 'Single Premium AC',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 2200,
      originalPrice: 2800,
      isAC: true,
      sharingType: 'Single',
      features: ['AC', 'Free WiFi', 'Smart TV', 'Mini Fridge', 'Premium Bathroom'],
      description: 'Luxurious single room with premium amenities and elegant furnishing.'
    },
    // New single rooms
    {
      id: 7,
      title: 'Single Economy',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 600,
      originalPrice: 800,
      isAC: false,
      sharingType: 'Single',
      features: ['Fan', 'WiFi', 'Shared Bathroom'],
      description: 'Simple and affordable single room for solo travelers on a budget.'
    },
    {
      id: 8,
      title: 'Single Executive AC',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 1800,
      originalPrice: 2300,
      isAC: true,
      sharingType: 'Single',
      features: ['AC', 'WiFi', 'TV', 'Work Desk', 'Private Bathroom'],
      description: 'Executive single room with workspace and modern amenities.'
    },
    {
      id: 9,
      title: 'Single Suite',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 3000,
      originalPrice: 3500,
      isAC: true,
      sharingType: 'Single',
      features: ['AC', 'WiFi', 'Smart TV', 'Mini Bar', 'Bathtub'],
      description: 'Spacious suite for single occupancy with luxury features.'
    }
  ];

  const multiRooms = [
    {
      id: 4,
      title: 'Double Sharing AC',
      image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 1200,
      originalPrice: 1500,
      isAC: true,
      sharingType: 'Double',
      features: ['AC', 'Free WiFi', 'TV', 'Shared Bathroom'],
      description: 'Comfortable double sharing room with AC and modern facilities.'
    },
    {
      id: 5,
      title: 'Triple Sharing',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 900,
      originalPrice: 1200,
      isAC: false,
      sharingType: 'Triple',
      features: ['Fan', 'Free WiFi', 'TV', 'Shared Bathroom'],
      description: 'Economical triple sharing option perfect for budget travelers.'
    },
    {
      id: 6,
      title: 'Quad Sharing AC',
      image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 700,
      originalPrice: 900,
      isAC: true,
      sharingType: 'Quad',
      features: ['AC', 'Free WiFi', 'TV', 'Shared Bathroom'],
      description: 'Great value quad sharing room with AC for group travelers.'
    },
    // New multi sharing rooms
    {
      id: 10,
      title: 'Double Deluxe',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 1600,
      originalPrice: 2000,
      isAC: true,
      sharingType: 'Double',
      features: ['AC', 'WiFi', 'TV', 'Private Bathroom'],
      description: 'Spacious double sharing room with deluxe amenities.'
    },
    {
      id: 11,
      title: 'Family Suite',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 3500,
      originalPrice: 4000,
      isAC: true,
      sharingType: 'Family',
      features: ['AC', 'WiFi', 'Smart TV', 'Mini Fridge', '2 Bathrooms'],
      description: 'Perfect for families, this suite offers space and comfort for all.'
    },
    {
      id: 12,
      title: 'Triple Premium',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 2000,
      originalPrice: 2500,
      isAC: true,
      sharingType: 'Triple',
      features: ['AC', 'WiFi', 'TV', 'Private Bathroom', 'Balcony'],
      description: 'Premium triple sharing room with balcony and private bath.'
    }
  ];

  const currentRooms = activeTab === 'single' ? singleRooms : multiRooms;

  const handleBookNow = (room:any) => {
    openBookingModal(room);
  };

  return (
  <div className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--text-secondary)' }}>
      {/* Header */}
  <section style={{ backgroundColor: 'var(  --bg-footer)', color: 'var(--secondary)' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Rooms
          </h1>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--primary)' }}></div>
          <p className="text-xl" style={{ color: '#D1D5DB' }}>
            Choose from our variety of comfortable and well-appointed rooms
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
  <section style={{ backgroundColor: 'var(--secondary)' }} className="py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div style={{ backgroundColor: 'var(--text-secondary)' }} className="rounded-full rooms-mobile-tabs ">
             <button
                     onClick={() => setActiveTab('single')}
                     className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 rooms-mobile-tab-btn`}
                     style={activeTab === 'single' 
                     ? { backgroundColor: 'var(--primary)', color: 'var(--secondary)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }
                    : { color: 'var(--heading-text)', backgroundColor: 'transparent' }}
                     >
                      Single Sharing
                     </button>
                     <button
                          onClick={() => setActiveTab('multi')}
                          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 rooms-mobile-tab-btn`}
                           style={activeTab === 'multi' 
                          ? { backgroundColor: 'var(--primary)', color: 'var(--secondary)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }
                            : { color: 'var(--heading-text)', backgroundColor: 'transparent' }}
                          >
                            Multi Sharing
                     </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentRooms.map((room) => (
              <div 
                key={room.id}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {room.isAC && (
                      <span style={{ backgroundColor: 'var(--backgroung-fb)', color: 'var(--secondary)' }} className="px-2 py-1 rounded-full text-xs font-semibold">
                        AC
                      </span>
                    )}
                    <span style={{ backgroundColor: 'var(--primary)', color: 'var(--secondary)' }} className="px-2 py-1 rounded-full text-xs font-semibold">
                      {room.sharingType}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: 'var(--heading-text)' }}>
                    {room.title}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span style={{ color: 'var(--primary)' }} className="text-2xl font-bold">₹{room.price}</span>
                    <span style={{ color: 'var(--text-primary)' }} className="line-through ml-2">₹{room.originalPrice}</span>
                    <span style={{ color: 'var(--heading-text)' }} className="text-sm ml-1">/ night</span>
                  </div>
                  <p style={{ color: 'var(--text-primary)' }} className="text-sm mb-4">
                    {room.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm" style={{ color: 'var(--text-primary)' }}>
                        <div style={{ backgroundColor: 'var(--primary)' }} className="w-2 h-2 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleBookNow(room)}
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--secondary)' }}
                    className="w-full py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section style={{ backgroundColor: 'var(--bg-map)' }} className="w-full py-12 px-12 sm:px-12 md:px-12 lg:px-12 xl:px-12 2xl:px-12 px-0 max-[375px]:px-0">
        <h2 className="text-3xl font-serif font-bold text-center mb-6" style={{ color: 'var(--nav-focus)' }}>
          FIND US HERE
        </h2>
        <div className="w-full h-96 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.674190621633!2d77.23090731508236!3d28.65195939240284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1639999999999!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Location"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Rooms;