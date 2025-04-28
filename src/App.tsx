import React, { useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomCursor } from './components/CustomCursor';

function App() {
  // Add debugging to check if App is mounting
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <div className="app geist-mono-regular cursor-none">
      <CustomCursor />
      <ScrollToTop />
      {/* Wrap components in error boundaries for better debugging */}
      <ErrorBoundary fallback={<div className="p-4">Navbar error</div>}>
        <Navbar />
      </ErrorBoundary>
      <main>
      <ErrorBoundary fallback={<div className="p-4">Hero error</div>}>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div className="p-4">About error</div>}>
          <About />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div className="p-4">Education error</div>}>
          <Education />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div className="p-4">Skills error</div>}>
          <Skills />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div className="p-4">Projects error</div>}>
          <Projects />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div className="p-4">Contact error</div>}>
          <Contact />
        </ErrorBoundary>
      </main>
      <ErrorBoundary fallback={<div className="p-4">Footer error</div>}>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component<{children: React.ReactNode, fallback: React.ReactNode}> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: any, info: any) {
    console.error('Component error:', error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default App;
