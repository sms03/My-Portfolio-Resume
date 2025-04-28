import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Palette, Monitor } from 'lucide-react';

export const Hero = () => {
  const [animated, setAnimated] = useState(false);
  const phrases = ['CG & VFX Artist', '3D Cover Designer', 'UI Developer'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Character-by-character typing animation
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(() => {
      // If adding characters
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        // If finished typing current word
        if (displayText === currentPhrase) {
          setTypingSpeed(1000); // pause before deleting
          setIsDeleting(true);
        }
      } 
      // If removing characters
      else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        // If finished deleting current word
        if (displayText === '') {
          setTypingSpeed(100);
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);

  // Animate elements when component mounts
  useEffect(() => {
    setAnimated(true);
  }, []);

  // Character animation for name
  const nameText = "Shivam M. Salunkhe";
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background animated circles */}
      <div className="animated-bg animated-circle circle-1"></div>
      <div className="animated-bg animated-circle circle-2"></div>
      <div className="animated-bg animated-circle circle-3"></div>
      <div className="animated-bg animated-circle circle-4"></div>
      
      <div className="section-container z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl mx-auto">
          <div className="mb-4">
            <p className={`text-sm md:text-base font-medium text-portfolio-pastel-pink uppercase tracking-wider mb-2 transform transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Welcome to my portfolio
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex flex-wrap justify-center md:justify-start">
              {nameText.split('').map((char, i) => (
                <span 
                  key={i} 
                  className="inline-block animated-text character"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            
            <div className="h-8 mb-6">
              <h2 className="text-xl md:text-2xl text-portfolio-pastel-purple font-medium flex items-center justify-center md:justify-start">
                <span className="inline-block mr-2">I am a</span>
                <span className="relative">
                  <span className="border-r-2 border-portfolio-pastel-pink pr-1">
                    {displayText}
                  </span>
                </span>
              </h2>
            </div>
            
            <p className={`text-gray-700 text-base md:text-lg mb-8 max-w-2xl transform transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Passionate self-taught CG & VFX artist specializing in creating weird, futuristic, surreal, and abstract art. Skilled in transforming unique concepts into stunning visuals to ensure client satisfaction.
            </p>
            
            <div className={`flex flex-wrap gap-4 justify-center md:justify-start transform transition-all duration-700 delay-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a href="#projects" className="btn-primary flex items-center">
                View My Work <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full transform transition-all duration-700 delay-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="card p-6 flex items-center">
              <div className="rounded-full bg-portfolio-pastel-blue/20 p-3 mr-4">
                <Code size={24} className="text-portfolio-pastel-blue" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Coding in Python</h3>
                <p className="text-sm text-gray-600">AI app development</p>
              </div>
            </div>
            
            <div className="card p-6 flex items-center">
              <div className="rounded-full bg-portfolio-pastel-pink/20 p-3 mr-4">
                <Palette size={24} className="text-portfolio-pastel-pink" />
              </div>
              <div>
                <h3 className="font-medium mb-1">3D Designer</h3>
                <p className="text-sm text-gray-600">Math-based modeling</p>
              </div>
            </div>
            
            <div className="card p-6 flex items-center">
              <div className="rounded-full bg-portfolio-pastel-purple/20 p-3 mr-4">
                <Monitor size={24} className="text-portfolio-pastel-purple" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Creative Artist</h3>
                <p className="text-sm text-gray-600">Surreal & abstract art</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - moved even further down by changing bottom-5 to bottom-0 */}
        {/* 
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 ${animated ? 'opacity-70' : 'opacity-0'}`}>
          <span className="text-sm mb-1">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};
