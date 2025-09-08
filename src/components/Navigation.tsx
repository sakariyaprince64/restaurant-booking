import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hotel } from 'lucide-react';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'var(--secondary)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Hotel className="h-8 w-8" style={{ color: 'var(--primary)' }} />
            <span
              className="text-xl font-serif font-bold"
              style={{ color: 'var(--primary)'}}
            >
              Hotel Khattimly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-medium transition-colors duration-300"
                style={{
                  color: location.pathname === item.path ? 'var(--primary)' : 'var(--nav-focus)',
                }}
                onMouseOver={e => { if (location.pathname !== item.path) e.currentTarget.style.color = 'var(--primary)'; }}
                onMouseOut={e => { if (location.pathname !== item.path) e.currentTarget.style.color = 'var(--nav-focus)'; }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md"
            style={{ color: 'var(--primary)' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" style={{ backgroundColor: 'var(--secondary)', borderTop: '1px solid var(--surface)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 rounded-lg transition-colors duration-300"
                  style={{
                    color: location.pathname === item.path ? 'var(--primary)' : 'var(--nav-focus)',
                    backgroundColor: location.pathname === item.path ? 'var(--gold-lightest)' : 'transparent',
                  }}
                  onMouseOver={e => {
                    if (location.pathname !== item.path) {
                      e.currentTarget.style.color = 'var(--primary)';
                      e.currentTarget.style.backgroundColor = 'var(--gold-lightest)';
                    }
                  }}
                  onMouseOut={e => {
                    if (location.pathname !== item.path) {
                      e.currentTarget.style.color = 'var(--nav-focus)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navigation;