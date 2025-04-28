import { useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export const CustomCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-based
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();

    // Don't show custom cursor on touch devices
    if (isTouchDevice) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    const handlePointerChange = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isOverClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        !!target.closest('a') || 
        !!target.closest('button') || 
        getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(Boolean(isOverClickable));
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handlePointerChange);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handlePointerChange);
    };
  }, [isTouchDevice]);

  // Don't render the custom cursor on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main larger cursor */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full bg-portfolio-pastel-pink/30 transition-transform duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } ${isClicked ? 'scale-75' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '40px' : '20px',
          height: isPointer ? '40px' : '20px',
          transform: `translate(-50%, -50%) ${isPointer ? 'scale(1.5)' : 'scale(1)'}`,
          transitionProperty: 'opacity, width, height, transform',
        }}
      />
      
      {/* Small dot cursor */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full bg-white border-2 border-portfolio-pastel-blue transition-opacity duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '6px',
          height: '6px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};