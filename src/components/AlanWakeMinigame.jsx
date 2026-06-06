import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AlanWakeMinigame.css';

export default function AlanWakeMinigame({ onComplete }) {
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isFocusing, setIsFocusing] = useState(false);
  const [shadows, setShadows] = useState([]);
  const [flashbang, setFlashbang] = useState(false);
  
  const hpRef = useRef({});

  useEffect(() => {
    // Spawn 4 shadows at random positions, avoiding the edges
    const newShadows = Array.from({ length: 4 }).map((_, i) => {
      const id = i;
      hpRef.current[id] = 100; // Drains at 50/sec -> 2 seconds to destroy
      return {
        id,
        x: Math.random() * (window.innerWidth - 300) + 150,
        y: Math.random() * (window.innerHeight - 300) + 150,
        isBurning: false,
        isDestroyed: false
      };
    });
    setShadows(newShadows);
    
    // Prevent scrolling during minigame
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseDown = useCallback(() => setIsFocusing(true), []);
  const handleMouseUp = useCallback(() => setIsFocusing(false), []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp]);

  useEffect(() => {
    if (!isFocusing) {
      setShadows(prev => prev.map(s => ({ ...s, isBurning: false })));
      return;
    }

    let animationFrameId;
    let lastTime = performance.now();

    const loop = (time) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      setShadows(prevShadows => {
        let activeCount = 0;
        let anyDestroyedThisFrame = false;

        const updatedShadows = prevShadows.map(shadow => {
          if (shadow.isDestroyed) return shadow;
          activeCount++;

          const dx = mousePos.x - shadow.x;
          const dy = mousePos.y - shadow.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let isBurning = false;
          // Radius of focused beam is about 80px, allow 100px for generous hitbox
          if (dist < 100) {
            isBurning = true;
            hpRef.current[shadow.id] -= 50 * dt;
            if (hpRef.current[shadow.id] <= 0) {
              anyDestroyedThisFrame = true;
              return { ...shadow, isDestroyed: true, isBurning: false };
            }
          }
          return { ...shadow, isBurning };
        });

        const remaining = updatedShadows.filter(s => !s.isDestroyed).length;
        if (remaining === 0 && !flashbang) {
          setFlashbang(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1500); // Wait for flashbang to finish before closing
        }

        return updatedShadows;
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isFocusing, mousePos, flashbang, onComplete]);

  return (
    <div 
      className={`aw-minigame-container ${isFocusing ? 'focusing' : ''}`}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`
      }}
    >
      <div className="aw-darkness-overlay"></div>
      
      {shadows.map(shadow => (
        <div 
          key={shadow.id}
          className={`aw-shadow-entity ${shadow.isBurning ? 'burning' : ''} ${shadow.isDestroyed ? 'destroyed' : ''}`}
          style={{ left: shadow.x, top: shadow.y }}
        >
          <div className="aw-shadow-eyes">
            <div className="aw-shadow-eye"></div>
            <div className="aw-shadow-eye"></div>
          </div>
        </div>
      ))}

      <AnimatePresence>
        {flashbang && (
          <motion.div 
            className="aw-flashbang"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeIn' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
