import React from 'react';
import { Download, BookOpen, FileText, Video, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Home = () => {
  // Mock data for downloads
  const downloads = [
    { id: 1, title: 'PUC Passing Package', category: 'downloads' },
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
    // Mock download functionality
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass-header fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-primary-coral">Kannada Sampada</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-box p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-coral mb-6 text-center">
              ಕನ್ನಡ ಸಂಪದ
            </h2>
            <div className="space-y-4 text-lg leading-relaxed kannada-text">
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

      {/* Downloads Section */}
      <section id="downloads" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-box p-8">
            <div className="flex items-center gap-3 mb-8">
              <Download className="w-8 h-8 text-primary-coral" />
              <h2 className="text-3xl font-bold text-primary-coral">Downloads</h2>
            </div>
            <div className="space-y-4">
              {downloads.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 glass-item rounded-lg hover:scale-[1.02] transition-transform">
                  <span className="text-lg">{item.title}</span>
                  <Button
                    onClick={() => handleDownload(item)}
                    className="bg-dark-glass border border-primary-coral/30 hover:bg-primary-coral/20 text-white"
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
          <div className="glass-box p-8">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-primary-coral" />
              <h2 className="text-3xl font-bold text-primary-coral">Notes</h2>
            </div>
            <div className="space-y-4">
              {notes.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 glass-item rounded-lg hover:scale-[1.02] transition-transform">
                  <span className="text-lg">{item.title}</span>
                  <Button
                    onClick={() => handleDownload(item)}
                    className="bg-dark-glass border border-primary-coral/30 hover:bg-primary-coral/20 text-white"
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
          <div className="glass-box p-8">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-primary-coral" />
              <h2 className="text-3xl font-bold text-primary-coral">PYQ</h2>
            </div>
            <div className="space-y-4">
              {pyq.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 glass-item rounded-lg hover:scale-[1.02] transition-transform">
                  <span className="text-lg">{item.title}</span>
                  <Button
                    onClick={() => handleDownload(item)}
                    className="bg-dark-glass border border-primary-coral/30 hover:bg-primary-coral/20 text-white"
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
          <div className="glass-box p-8">
            <div className="flex items-center gap-3 mb-8">
              <Video className="w-8 h-8 text-primary-coral" />
              <h2 className="text-3xl font-bold text-primary-coral">Latest Videos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="glass-item rounded-lg overflow-hidden hover:scale-[1.05] transition-transform cursor-pointer">
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
                    <p className="text-sm">{video.title}</p>
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
          <div className="glass-box p-8">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="w-8 h-8 text-primary-coral" />
              <h2 className="text-3xl font-bold text-primary-coral">Contact</h2>
            </div>
            <div className="text-center">
              <a
                href="mailto:kannadasampada@yahoo.com"
                className="text-lg text-primary-coral hover:text-primary-coral-light underline transition-colors"
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
          <p className="text-sm text-gray-400">© 2024 Kannada Sampada. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;