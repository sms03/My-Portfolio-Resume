import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVerticalExpanded, setIsVerticalExpanded] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleVerticalNav = () => setIsVerticalExpanded(!isVerticalExpanded);

  // Smooth scroll function
  const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
    // Prevent default anchor link behavior
    if (event) event.preventDefault();
    
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Close mobile menu if open
    if (isOpen) setIsOpen(false);
    
    // Calculate scroll position (with offset for fixed headers)
    const offset = 80; // Adjust based on your header height
    const sectionPosition = section.offsetTop - offset;
    
    // Perform smooth scrolling
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
    
    // Update URL without jumping (pushState doesn't cause a page jump)
    window.history.pushState(null, '', `#${sectionId}`);
    
    // Set active section manually
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize smooth scroll behavior for sections when the component mounts
  useEffect(() => {
    // Handle initial URL with hash
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Small delay to ensure DOM is fully loaded
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <>
      {/* Horizontal navbar (visible when not scrolled) */}
      <header className={`navbar fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 w-auto max-w-4xl transition-all duration-500 
        ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <nav className="flex items-center justify-between w-full">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection('home', e)}
            className="text-xl font-bold gradient-text"
          >
            SMS.
          </a>
          
          {/* Desktop Navigation - Horizontal */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(item.id, e)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                  ${activeSection === item.id 
                    ? 'bg-gradient-to-r from-portfolio-pastel-pink to-portfolio-pastel-purple text-white' 
                    : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Navigation dropdown */}
        <div 
          className={`absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg transition-all duration-300 transform md:hidden
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(item.id, e)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-gradient-to-r from-portfolio-pastel-pink to-portfolio-pastel-purple text-white' 
                    : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="animated-bg animated-circle circle-1"></div>
        <div className="animated-bg animated-circle circle-2"></div>
      </header>

      {/* Vertical navbar (visible when scrolled) */}
      <div 
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 
          ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}
      >
        {/* Collapsed vertical nav toggle button - MOVED TO LEFT SIDE */}
        <div 
          className={`absolute top-1/2 ${isVerticalExpanded ? 'right-0 translate-x-[calc(100%+4px)]' : 'left-10 -translate-x-0'} transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-md cursor-pointer transition-all duration-300
            ${isVerticalExpanded ? 'rounded-l-lg rounded-r-none' : 'rounded-l-none rounded-r-lg'}`}
          onClick={toggleVerticalNav}
        >
          {isVerticalExpanded ? (
            <ChevronLeft size={20} className="text-portfolio-pastel-pink" />
          ) : (
            <ChevronRight size={20} className="text-portfolio-pastel-pink" />
          )}
        </div>

        {/* Vertical navbar container */}
        <div 
          className={`bg-white/90 backdrop-blur-md rounded-r-2xl shadow-lg py-6 transition-all duration-500 transform
            ${isVerticalExpanded ? 'translate-x-0 min-w-[180px]' : 'translate-x-[-80%] min-w-[60px]'}`}
        >
          {/* Logo area */}
          <div className="px-4 mb-6 flex justify-between items-center">
            <a 
              href="#home"
              onClick={(e) => scrollToSection('home', e)} 
              className={`text-lg font-bold gradient-text transition-opacity duration-300 
                ${isVerticalExpanded ? 'opacity-100' : 'opacity-0'}`}
            >
              SMS.
            </a>
            {/* Removed the old collapse button since we now have it on the outside */}
          </div>

          {/* Vertical nav items */}
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(item.id, e)}
                className={`px-4 py-3 flex items-center transition-all duration-300 border-l-4 
                  ${activeSection === item.id 
                    ? 'border-portfolio-pastel-pink bg-gradient-to-r from-portfolio-pastel-pink/10 to-transparent text-portfolio-pastel-pink font-medium' 
                    : 'border-transparent hover:bg-gray-100 text-gray-700'}`}
              >
                <div className="flex items-center justify-center w-6 h-6">
                  {/* Icons for each section - you can customize these or use imported icons */}
                  {item.id === 'home' && <span className="text-sm">🏠</span>}
                  {item.id === 'about' && <span className="text-sm">👤</span>}
                  {item.id === 'education' && <span className="text-sm">🎓</span>}
                  {item.id === 'skills' && <span className="text-sm">⚡</span>}
                  {item.id === 'projects' && <span className="text-sm">💼</span>}
                  {item.id === 'contact' && <span className="text-sm">📧</span>}
                </div>
                <span 
                  className={`ml-3 transition-all duration-300 whitespace-nowrap
                    ${isVerticalExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
