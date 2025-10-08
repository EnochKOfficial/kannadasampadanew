import React, { useState } from 'react';
import { Download, BookOpen, FileText, Video, Mail, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock data for passing package
  const passingPackages = [
    { id: 1, title: 'PUC Passing Package', category: 'passing' },
  ];

  // Mock data for notes
  const notes = [
    { id: 1, title: 'I PUC Notes', category: 'notes' },
    { id: 2, title: 'II PUC Notes', category: 'notes' },
  ];

  // Mock data for PYQ
  const pyq = [
    { id: 1, title: 'I PUC PYQ', category: 'pyq' },
    { id: 2, title: 'II PUC PYQ', category: 'pyq' },
  ];

  // Mock data for videos
  const videos = [
    { id: 1, title: 'Important Questions - Lesson 2024', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg' },
    { id: 2, title: 'Grammar Basics', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg' },
    { id: 3, title: 'Poetry Analysis', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg' },
    { id: 4, title: 'Essay Writing Tips', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg' },
    { id: 5, title: 'Literature Review', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg' },
    { id: 6, title: 'Exam Preparation', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg' },
  ];

  const handleDownload = (item) => {
    console.log('Downloading:', item.title);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Animated Kannada Letters Background */}
      <div className="falling-letters-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="falling-letter"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {['ಕ', 'ನ', 'ಡ', 'ಸ', 'ಪ', 'ದ', 'ಅ', 'ಆ', 'ಇ', 'ಈ'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      {/* Sticky Header with Navigation */}
      <header className="glass-header">
        <div className="glass-header-inner">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <h1 className="text-2xl font-bold text-primary-coral font-instrument">
                Kannada Sampada
              </h1>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => scrollToSection('passing-package')}
                  className="nav-link text-white hover:text-primary-coral transition-colors font-instrument"
                >
                  Passing Package
                </button>
                <button
                  onClick={() => scrollToSection('notes')}
                  className="nav-link text-white hover:text-primary-coral transition-colors font-instrument"
                >
                  Notes
                </button>
                <button
                  onClick={() => scrollToSection('pyq')}
                  className="nav-link text-white hover:text-primary-coral transition-colors font-instrument"
                >
                  PYQs
                </button>
                <button
                  onClick={() => scrollToSection('videos')}
                  className="nav-link text-white hover:text-primary-coral transition-colors font-instrument"
                >
                  Latest Videos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="nav-link text-white hover:text-primary-coral transition-colors font-instrument"
                >
                  Contact
                </button>
              </nav>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden text-white z-[101]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="glass-mobile-menu">
          <nav>
            <button
              onClick={() => scrollToSection('passing-package')}
              className="nav-link text-white hover:text-primary-coral transition-colors font-instrument"
            >
              Passing Package
            </button>
            <button
              onClick={() => scrollToSection('notes')}
              className="nav-link text-white hover:text-primary-coral transition-colors font-instrument"
            >
              Notes
            </button>
            <button
              onClick={() => scrollToSection('pyq')}
              className="nav-link text-white hover:text-primary-coral transition-colors font-instrument"
            >
              PYQs
            </button>
            <button
              onClick={() => scrollToSection('videos')}
              className="nav-link text-white hover:text-primary-coral transition-colors font-instrument"
            >
              Latest Videos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link text-white hover:text-primary-coral transition-colors font-instrument"
            >
              Contact
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-box-enhanced p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-coral mb-6 text-center font-noto-serif-kannada">
              ಕನ್ನಡ ಸಂಪದ
            </h2>
            <div className="space-y-4 text-lg leading-relaxed kannada-text font-noto-serif-kannada">
              <p>
                "ಕನ್ನಡ ಸಂಪದ" ಇದು ಕಲಿಕೆಯ ಆಗರ. ಸಂಪದವೆಂದರೆ, ಸಂಪತ್ತು. ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಸಂಪತ್ತನ್ನು ಗಳಿಸುವ ಮಾರ್ಗ.
              </p>
              <p>
                ಪದವಿ ಪೂರ್ವ ಹಂತದಲ್ಲಿ ಮಾತೃಭಾಷೆಯನ್ನು ಒಂದು ವಿಷಯವನ್ನಾಗಿ ಆಯ್ಕೆ ಮಾಡಿಕೊಂಡು ಓದುವ ಮಕ್ಕಳಿಗೆ ಸುಲಭವೂ, ಸರಳವೂ, ಸುಲಲಿತವೂ ಆದ ರೀತಿಯಲ್ಲಿ ಮಾರ್ಗದರ್ಶನ ನೀಡುವುದು. ಭಾಷೆಯನ್ನು ಒಂದು ವಿಷಯವನ್ನಾಗಿ ತೆಗೆದುಕೊಂಡು ಶ್ರಮವಹಿಸಿ ಓದುವ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಈ ಬಗೆಯ ವಿಡಿಯೋಗಳು ಸಹಾಯವಾದರೆ ನಮ್ಮ ಶ್ರಮ ಸಾರ್ಥಕವಾಗುತ್ತದೆ. ಅಲ್ಲದೆ ಸಾಹಿತ್ಯ ಸಂಪದ ಚಾನಲ್‍ನ ಉದ್ದೇಶವೂ ನೆರವೇರಿದಂತಾಗುತ್ತದೆ.
              </p>
              <p>
                ಸಮಸ್ತ ವಿದ್ಯಾರ್ಥಿ ವೃಂದದವರು ಈ ಮಾಧ್ಯಮದ ಮೂಲಕ ಉತ್ತಮ ಜ್ಞಾನಾರ್ಜನೆಯ ಜೊತೆಗೆ, ಹೆಚ್ಚು ಅಂಕಗಳನ್ನು ಗಳಿಸಿ, ಉನ್ನತ ಶ್ರೇಣಿಯೊಂದಿಗೆ ಯಶಸ್ಸನ್ನು ಪಡೆಯಲಿ ಎಂದು ಹಾರೈಸುತ್ತೇನೆ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Passing Package Section */}
      <section id="passing-package" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-box-enhanced p-8">
            <div className="flex items-center gap-3 mb-8">
              <Download className="w-8 h-8 text-primary-coral" />
              <h2 className="text-3xl font-bold text-primary-coral font-instrument">Passing Package</h2>
            </div>
            <div className="space-y-4">
              {passingPackages.map((item) => (
                <div key={item.id} className="frosted-item rounded-lg p-4 flex items-center justify-between">
                  <span className="text-lg font-instrument">{item.title}</span>
                  <Button
                    onClick={() => handleDownload(item)}
                    className="btn-download font-instrument"
                  >
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section id="notes" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-box-enhanced p-8">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-primary-coral" />
              <h2 className="text-3xl font-bold text-primary-coral font-instrument">Notes</h2>
            </div>
            <div className="space-y-4">
              {notes.map((item) => (
                <div key={item.id} className="frosted-item rounded-lg p-4 flex items-center justify-between">
                  <span className="text-lg font-instrument">{item.title}</span>
                  <Button
                    onClick={() => handleDownload(item)}
                    className="btn-download font-instrument"
                  >
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PYQ Section */}
      <section id="pyq" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-box-enhanced p-8">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-primary-coral" />
              <h2 className="text-3xl font-bold text-primary-coral font-instrument">PYQ</h2>
            </div>
            <div className="space-y-4">
              {pyq.map((item) => (
                <div key={item.id} className="frosted-item rounded-lg p-4 flex items-center justify-between">
                  <span className="text-lg font-instrument">{item.title}</span>
                  <Button
                    onClick={() => handleDownload(item)}
                    className="btn-download font-instrument"
                  >
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section id="videos" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-box-enhanced p-8">
            <div className="flex items-center gap-3 mb-8">
              <Video className="w-8 h-8 text-primary-coral" />
              <h2 className="text-3xl font-bold text-primary-coral font-instrument">Latest Videos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="frosted-item rounded-lg overflow-hidden cursor-pointer">
                  <div className="relative aspect-video bg-black/30">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary-coral/80 rounded-full flex items-center justify-center hover:bg-primary-coral transition-colors">
                        <Video className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-instrument">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-box-enhanced p-8">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="w-8 h-8 text-primary-coral" />
              <h2 className="text-3xl font-bold text-primary-coral font-instrument">Contact</h2>
            </div>
            <div className="text-center">
              <a
                href="mailto:kannadasampada@yahoo.com"
                className="text-lg text-primary-coral hover:text-primary-coral-light underline transition-colors font-instrument"
              >
                kannadasampada@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-footer py-6 px-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400 font-instrument">© 2024 Kannada Sampada. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;