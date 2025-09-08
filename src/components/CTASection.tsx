import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
// Removed colours import, using CSS variables from roots.css

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        background: 'var(--primary)',
        color: 'var(--secondary)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Ready for Your Perfect Stay?
        </h2>
        <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
          Book your room today and experience luxury at its finest
        </p>
        <button
          onClick={() => navigate('/rooms')}
          style={{
            background: 'var(--heading-text)',
            color: 'var(--secondary)',
            padding: '1rem 2rem',
            borderRadius: '9999px',
            fontSize: '1.125rem',
            fontWeight: 600,
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            margin: '0 auto',
            boxShadow: '0 4px 24px rgba(30,58,138,0.15)',
          }}
          onMouseOver={e => (e.currentTarget.style.background = 'var(--accent)')}
          onMouseOut={e => (e.currentTarget.style.background = 'var(--heading-text)')}
        >
          <Calendar size={20} />
          <span>Check Availability</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTASection;