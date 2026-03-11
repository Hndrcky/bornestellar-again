import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import this
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DivisionsPage from './pages/DivisionsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this right after Router */}
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/divisions" element={<DivisionsPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;