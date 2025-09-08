import React from 'react';
import { Award, Users, Heart, Shield } from 'lucide-react';
import Footer from '../components/Footer';
// Removed colours import, using CSS variables from roots.css

const About = () => {
  const values = [
    {
  icon: <Heart className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Hospitality',
      description: 'We treat every guest like family, ensuring comfort and warmth in every interaction.'
    },
    {
  icon: <Award className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in service, cleanliness, and guest satisfaction.'
    },
    {
  icon: <Shield className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Trust',
      description: 'Your safety and security are our top priorities, providing peace of mind throughout your stay.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Khattimly',
      role: 'General Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Guest Relations Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Amit Singh',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  return (
  <div style={{ backgroundColor: 'var(--secondary)' }} className="pt-20">
      {/* Header Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--accent)', opacity: 0.7 }}></div>
        </div>
  <div className="relative z-10 text-center" style={{ color: 'var(--secondary)' }}>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            About Hotel Khattimly
          </h1>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--primary)' }}></div>
        </div>
      </section>

      {/* Content Section */}
  <section style={{ backgroundColor: 'var(--secondary)' }} className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto" style={{ color: 'var(--text-primary)' }}>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center" style={{ color: 'var( --heading-text)' }}>
              Our Story
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Welcome to Hotel Khattimly, where comfort meets luxury in the heart of the city. 
              Since our establishment, we have been committed to providing exceptional hospitality 
              and creating memorable experiences for our guests.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our mission is simple: to offer you a home away from home with modern amenities, 
              warm hospitality, and affordable luxury. Whether you're traveling for business or 
              leisure, we ensure that every moment of your stay is comfortable and memorable.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Located in a prime location with easy access to major attractions, shopping centers, 
              and business districts, Hotel Khattimly is your perfect companion for any journey. 
              Our dedicated team works round the clock to ensure your needs are met with a smile.
            </p>
          </div>
        </div>
      </section>

  {/* Values Section */}
  <section style={{ backgroundColor: 'var(--secondary)' }} className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var( --heading-text)' }}>
              Our Values
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--primary)' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all 
                           duration-300 transform hover:-translate-y-2"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--bg-card)' }}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: 'var( --heading-text)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--text-primary)' }} className="leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            
      {/* Team Section */}
  <section style={{ backgroundColor: 'var(--secondary)' }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var( --heading-text)' }}>
              Meet Our Team
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--primary)' }}></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-primary)' }}>
              Our dedicated team is here to ensure your stay is nothing short of exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all 
                           duration-300 transform hover:-translate-y-2"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: 'var( --heading-text)' }}>
                    {member.name}
                  </h3>
                  <p style={{ color: 'var(--primary)' }} className="font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;