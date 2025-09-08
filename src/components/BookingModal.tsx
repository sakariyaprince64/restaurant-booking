import React, { useState } from 'react';
import { X, Calendar, Users, Phone, Mail, User } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
// Removed colours import, using CSS variables from roots.css

const BookingModal = () => {
  const { isModalOpen, selectedRoom, closeBookingModal } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bookingDate: '',
    bookingTime: '',
    numberOfPersons: 1
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Booking confirmed! We will contact you shortly.');
    setIsSubmitting(false);
    closeBookingModal();
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      bookingDate: '',
      bookingTime: '',
      numberOfPersons: 1
    });
  };

  if (!isModalOpen || !selectedRoom) return null;

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--nav-focus)',
          opacity: 0.5,
          backdropFilter: 'blur(4px)',
        }}
        onClick={closeBookingModal}
      ></div>

  {/* Modal */}
  <div
    className="relative rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
  style={{ background: 'var(--secondary)' }}
  >
        {/* Header */}
        <div className="relative">
          <img
            src={selectedRoom.image}
            alt={selectedRoom.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <button
            onClick={closeBookingModal}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              padding: '0.5rem',
              background: 'var(--secondary)',
              opacity: 0.8,
              borderRadius: '9999px',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = '1')}
            onMouseOut={e => (e.currentTarget.style.opacity = '0.8')}
          >
            <X className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
          </button>
          <div
            className="absolute top-4 left-4 rounded-lg p-3"
            style={{ background: 'var(--secondary)', opacity: 0.9 }}
          >
            <h3 className="font-serif text-lg font-semibold" style={{ color: 'var(--navy-900)' }}>
              {selectedRoom.title}
            </h3>
            <p className="font-bold" style={{ color: 'var(--heading-text)' }}>
              ₹{selectedRoom.price} / night
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <h2
            className="font-serif text-2xl font-bold mb-6 text-center"
            style={{ color: 'var(--heading-text)' }}
          >
            Complete Your Booking
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                <User className="w-4 h-4 inline mr-1" />
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 rounded-lg focus:outline-none"
                style={{
                  border: '1px solid var(--surface)',
                  boxShadow: 'none',
                }}
                placeholder="Enter your full name"
                onFocus={e => (e.currentTarget.style.border = '2px solid var(--nav-focus)')}
                onBlur={e => (e.currentTarget.style.border = '1px solid var(--surface)')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 rounded-lg focus:outline-none"
                style={{
                  border: '1px solid var(--surface)',
                  boxShadow: 'none',
                }}
                placeholder="Enter your email"
                onFocus={e => (e.currentTarget.style.border = '2px solid var(--nav-focus)')}
                onBlur={e => (e.currentTarget.style.border = '1px solid var(--surface)')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                <Phone className="w-4 h-4 inline mr-1" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 rounded-lg focus:outline-none"
                style={{
                  border: '1px solid var(--surface)',
                  boxShadow: 'none',
                }}
                placeholder="Enter your phone number"
                onFocus={e => (e.currentTarget.style.border = '2px solid var(--nav-focus)')}
                onBlur={e => (e.currentTarget.style.border = '1px solid var(--surface)')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                <Users className="w-4 h-4 inline mr-1" />
                Number of Persons
              </label>
              <select
                name="numberOfPersons"
                value={formData.numberOfPersons}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg focus:outline-none"
                style={{
                  border: '1px solid var(--surface)',
                  boxShadow: 'none',
                }}
                onFocus={e => (e.currentTarget.style.border = '2px solid var(--nav-focus)')}
                onBlur={e => (e.currentTarget.style.border = '1px solid var(--surface)')}
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num} Person{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                <Calendar className="w-4 h-4 inline mr-1" />
                Booking Date
              </label>
              <input
                type="date"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 rounded-lg focus:outline-none"
                style={{
                  border: '1px solid var(--surface)',
                  boxShadow: 'none',
                }}
                onFocus={e => (e.currentTarget.style.border = '2px solid var(--nav-focus)')}
                onBlur={e => (e.currentTarget.style.border = '1px solid var(--surface)')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                Booking Time
              </label>
              <input
                type="time"
                name="bookingTime"
                value={formData.bookingTime}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 rounded-lg focus:outline-none"
                style={{
                  border: '1px solid var(--surface)',
                  boxShadow: 'none',
                }}
                onFocus={e => (e.currentTarget.style.border = '2px solid var(--nav-focus)')}
                onBlur={e => (e.currentTarget.style.border = '1px solid var(--surface)')}
              />
            </div>
          </div>

          {/* Room Summary */}
          <div
            className="rounded-lg p-4 mb-6"
            style={{ background: 'var(--gray-light)' }}
          >
            <h4 className="font-semibold mb-2" style={{ color: 'var(--heading-text)' }}>Booking Summary</h4>
            <div className="flex justify-between items-center">
              <span style={{ color: 'var(--text-primary)' }}>Room: {selectedRoom.title}</span>
              <span className="font-semibold" style={{ color: 'var(--heading-text)' }}>₹{selectedRoom.price}/night</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span style={{ color: 'var(--text-primary)' }}>Type: {selectedRoom.isAC ? 'AC' : 'Non-AC'} • {selectedRoom.sharingType}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center"
            style={{
              background: 'var(--primary)',
              color: 'var(--secondary)',
              padding: '0.75rem 0',
              boxShadow: 'none',
            }}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              'Confirm Booking'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;