import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import Footer from '../components/Footer';
import '../contact-mobile.css';
// Removed colours import, using CSS variables from roots.css

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
  };

  return (
  <div className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--text-secondary)' }}>
      {/* Header */}
  <section style={{ backgroundColor: 'var(--heading-text)', color: 'var(--secondary)' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--primary)' }}></div>
          <p className="text-xl" style={{ color: '#D1D5DB' }}>
            Get in touch with us for reservations and inquiries
          </p>
        </div>
      </section>

  <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 contact-mobile-grid">
            {/* Contact Form */}
            <div style={{ backgroundColor: 'var(--secondary)' }} className="rounded-xl shadow-lg p-8 contact-mobile-card">
              <h2 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--heading-text)' }}>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none"
                    style={{ borderColor: 'var(--text-secondary)', backgroundColor: 'var(--secondary)', color: 'var(--nav-focus)', borderWidth: '3px', borderStyle: 'solid' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--nav-focus)'; e.target.style.borderWidth = '2px'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--text-secondary)'; e.target.style.borderWidth = '3px'; }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none"
                    style={{ borderColor: 'var(--text-secondary)', backgroundColor: 'var(--secondary)', color: 'var(--nav-focus)', borderWidth: '3px', borderStyle: 'solid' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--nav-focus)'; e.target.style.borderWidth = '2px'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--text-secondary)'; e.target.style.borderWidth = '3px'; }}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none resize-none"
                    style={{ borderColor: 'var(--text-secondary)', backgroundColor: 'var(--secondary)', color: 'var(--nav-focus)', borderWidth: '3px', borderStyle: 'solid' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--nav-focus)'; e.target.style.borderWidth = '2px'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--text-secondary)'; e.target.style.borderWidth = '3px'; }}
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--secondary)' }}
                  className="w-full py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div style={{ backgroundColor: 'var(--secondary)' }} className="rounded-xl shadow-lg p-8 contact-mobile-card">
                <h2 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--heading-text)' }}>
                  Hotel Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 contact-mobile-row">
                    <div className="p-3 rounded-full contact-mobile-icon" style={{ backgroundColor: 'var(--bg-card)' }}>
                      <MapPin className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                    </div>
                    <div className="contact-mobile-content">
                      <h3 className="font-semibold mb-1" style={{ color: 'var(--heading-text)' }}>
                        Address
                      </h3>
                      <p style={{ color: 'var(--text-primary)' }}>
                        123 Main Street, City Center<br />
                        Downtown, State 12345<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 contact-mobile-row">
                    <div className="p-3 rounded-full contact-mobile-icon" style={{ backgroundColor: 'var(--bg-card)' }}>
                      <Phone className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                    </div>
                    <div className="contact-mobile-content">
                      <h3 className="font-semibold mb-1" style={{ color: 'var(--heading-text)' }}>
                        Phone
                      </h3>
                      <p style={{ color: 'var(--text-primary)' }}>+91 98765 43210</p>
                      <p style={{ color: 'var(--text-primary)' }}>+91 87654 32109</p>
                    </div>
                  </div>

                  <div className="flex items-start contact-mobile-row">
                    <div className="p-3 rounded-full contact-mobile-icon" style={{ backgroundColor: 'var(--bg-card)' }}>
                      <Mail className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                    </div>
                    <div className="contact-mobile-content" style={{ paddingLeft: '16px' }}>
                      <h3 className="font-semibold mb-1" style={{ color: 'var(--heading-text)' }}>
                        Email
                      </h3>
                      <p style={{ color: 'var(--text-primary)' }}>info@hotelkhattimly.com</p>
                      <p style={{ color: 'var(--text-primary)' }}>reservations@hotelkhattimly.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 contact-mobile-row">
                    <div className="p-3 rounded-full contact-mobile-icon" style={{ backgroundColor: 'var(--bg-card)' }}>
                      <Clock className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                    </div>
                    <div className="contact-mobile-content">
                      <h3 className="font-semibold mb-1" style={{ color: 'var(--heading-text)' }}>
                        Hours
                      </h3>
                      <p style={{ color: 'var(--text-primary)' }}>Check-in: 2:00 PM</p>
                      <p style={{ color: 'var(--text-primary)' }}>Check-out: 12:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--text-secondary)' }}>
                  <h3 className="font-semibold mb-4" style={{ color: 'var(--heading-text)' }}>
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" style={{ backgroundColor: 'var(--backgroung-fb)', color: 'var(--secondary)' }} className="p-3 rounded-full hover:bg-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" style={{ backgroundColor: 'var(--bg-instagram)', color: 'var(--secondary)' }} className="p-3 rounded-full hover:bg-pink-700 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                     <a
            href="#"
            style={{ background: 'var(--bg-contact)', color: 'var(--secondary)', borderRadius: '9999px', padding: '0.75rem' }}
            onMouseOver={e => (e.currentTarget.style.background = '#15803d')}
            onMouseOut={e => (e.currentTarget.style.background = 'var(--bg-contact)')}
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/></svg>
          </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Map spanning both columns at the bottom */}
            <div className="col-span-1 lg:col-span-2 mt-8">
              <div style={{ backgroundColor: 'var(--text-secondary)' }} className="w-full h-64 rounded-xl overflow-hidden flex items-center justify-center contact-mobile-map">
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;