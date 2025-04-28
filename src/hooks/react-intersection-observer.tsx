import { useState, useEffect, useRef } from 'react';

interface InViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

interface InViewHookReturn {
  ref: (node: Element | null) => void;
  inView: boolean;
  entry?: IntersectionObserverEntry;
}

export const useInView = ({
  threshold = 0,
  triggerOnce = false,
  rootMargin = '0px',
}: InViewOptions = {}): InViewHookReturn => {
  const [inView, setInView] = useState<boolean>(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  
  const observed = useRef<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const unobserve = () => {
    if (observer.current && observed.current) {
      observer.current.unobserve(observed.current);
      observer.current = null;
    }
  };

  useEffect(() => {
    // Check if IntersectionObserver is available
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver is not supported in this environment');
      setInView(true); // Default to true for environments without support
      return;
    }

    // Clean up any existing observer
    if (observer.current) {
      unobserve();
    }
    
    try {
      // Create a new observer with error handling
      observer.current = new IntersectionObserver(
        (entries) => {
          const isIntersecting = entries[0]?.isIntersecting;
          
          setInView(isIntersecting ?? false);
          setEntry(entries[0]);
          
          if (triggerOnce && isIntersecting && observed.current) {
            setInView(true); // Ensure it stays in view
            unobserve();
          }
        },
        {
          threshold,
          rootMargin,
        }
      );
      
      // Observe the current element if it exists
      if (observed.current) {
        observer.current.observe(observed.current);
      }
    } catch (error) {
      console.error('Error creating IntersectionObserver:', error);
      setInView(true); // Default to true in case of error
    }
    
    return () => {
      unobserve();
    };
  }, [threshold, rootMargin, triggerOnce]);

  const ref = (node: Element | null) => {
    if (node === null && observed.current) {
      unobserve();
      observed.current = null;
      return;
    }
    
    if (node === observed.current) return;
    
    // Clean up previous observation
    if (observed.current) {
      unobserve();
    }
    
    // Set the new element
    observed.current = node;
    
    // Start observing if observer is available
    if (node && !observer.current) {
      try {
        observer.current = new IntersectionObserver(
          (entries) => {
            const isIntersecting = entries[0]?.isIntersecting;
            
            setInView(isIntersecting ?? false);
            setEntry(entries[0]);
            
            if (triggerOnce && isIntersecting) {
              setInView(true);
              unobserve();
            }
          },
          {
            threshold,
            rootMargin,
          }
        );
        observer.current.observe(node);
      } catch (error) {
        console.error('Error observing element:', error);
        setInView(true); // Default to true in case of error
      }
    } else if (node && observer.current) {
      try {
        observer.current.observe(node);
      } catch (error) {
        console.error('Error observing element:', error);
        setInView(true);
      }
    }
  };

  return { ref, inView, entry };
};
