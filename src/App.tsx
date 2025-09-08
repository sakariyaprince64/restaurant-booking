import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import BookingModal from './components/BookingModal';
import { BookingProvider } from './contexts/BookingContext';
import './roots.css'; 

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <BookingProvider>
      <Router>
        <div className="min-h-screen bg-white">
          {loading && <Loader />}
          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <BookingModal />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;