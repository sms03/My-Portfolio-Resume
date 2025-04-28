import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Github, Mail, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer relative pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-4/12 px-4 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-3 text-white">SMS.</h4>
            <p className="text-sm text-white/80 mb-3">
            CGI-VFX Artist | 3D Motion Graphics Designer | Web Developer | AI Enthusiast
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/sms03" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} className="text-white" />
              </a>
              <a 
                href="https://ren3der.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Behance"
              >
                <ExternalLink size={16} className="text-white" />
              </a>
              
              <a 
                href="mailto:shivamsal2000@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={16} className="text-white" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-5/12 lg:w-3/12 px-4">
            <h5 className="text-lg font-medium mb-3 text-white">Quick Links</h5>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-white/80 hover:text-white transition-colors text-sm">Home</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm">About</a>
              <a href="#education" className="text-white/80 hover:text-white transition-colors text-sm">Education</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors text-sm">Skills</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors text-sm">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-white/10" />
        
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} Designed with <Heart size={14} className="inline-block mx-1 text-portfolio-pastel-red animate-pulse" /> by SMS.
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
