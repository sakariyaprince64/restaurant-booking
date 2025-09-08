import React from 'react';
// Removed colours import, using CSS variables from roots.css

const Footer = () => (
  <footer
    style={{
      background: 'var(--bg-footer)',
      color: 'var(--secondary)',
      paddingTop: '6rem',
      paddingBottom: '6rem',
      marginTop: '4rem',
    }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* About */}
      <div>
  <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
          Hotel Khattimly
        </h3>
  <p className="mb-4" style={{ color: 'var(--surface)' }}>
          Where comfort meets luxury. Experience the best hospitality in the heart of the city.
        </p>
      </div>
      {/* Quick Links */}
      <div>
  <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--primary)' }}>
          Quick Links
        </h4>
        <ul className="space-y-2">
          <li><a href="/" style={{ color: 'var(--secondary)' }} onMouseOver={e => (e.currentTarget.style.color = 'var(--gold-lightest)')} onMouseOut={e => (e.currentTarget.style.color = 'var(--secondary)')}>Home</a></li>
          <li><a href="/about" style={{ color: 'var(--secondary)' }} onMouseOver={e => (e.currentTarget.style.color = 'var(--gold-lightest)')} onMouseOut={e => (e.currentTarget.style.color = 'var(--secondary)')}>About Us</a></li>
          <li><a href="/rooms" style={{ color: 'var(--secondary)' }} onMouseOver={e => (e.currentTarget.style.color = 'var(--gold-lightest)')} onMouseOut={e => (e.currentTarget.style.color = 'var(--secondary)')}>Rooms</a></li>
          <li><a href="/contact" style={{ color: 'var(--secondary)' }} onMouseOver={e => (e.currentTarget.style.color = 'var(--gold-lightest)')} onMouseOut={e => (e.currentTarget.style.color = 'var(--secondary)')}>Contact</a></li>
        </ul>
      </div>
      {/* Contact Info */}
      <div>
  <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--primary)' }}>
          Contact
        </h4>
  <ul className="space-y-2" style={{ color: 'var(--surface)' }}>
          <li>123 Main Street, City Center, India</li>
          <li>+91 98765 43210</li>
          <li>info@hotelkhattimly.com</li>
        </ul>
      </div>
      {/* Social Media */}
      <div>
  <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--primary)' }}>
          Follow Us
        </h4>
        <div className="flex space-x-4">
          <a
            href="#"
            style={{ background: 'var(--backgroung-fb)', color: 'var(--secondary)', borderRadius: '9999px', padding: '0.75rem' }}
            onMouseOver={e => (e.currentTarget.style.background = 'var(--heading-text)')}
            onMouseOut={e => (e.currentTarget.style.background = 'var(--backgroung-fb)')}
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a
            href="#"
            style={{ background: 'var(--bg-instagram)', color: 'var(--secondary)', borderRadius: '9999px', padding: '0.75rem' }}
            onMouseOver={e => (e.currentTarget.style.background = '#db2777')}
            onMouseOut={e => (e.currentTarget.style.background = 'var(--bg-instagram)')}
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.1 1.15a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"/>
            </svg>
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
    <div className="w-full text-center mt-10">
  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>© 2025 Hotel Khattimly. All rights reserved.</p>
    </div>
   
  </footer>
);

export default Footer;
