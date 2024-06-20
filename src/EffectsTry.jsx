import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EffectsTry.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card, 
        { y: '100%' }, 
        { 
          y: '0%', 
          scrollTrigger: {
            trigger: card,
            start: 'top bottom', // When the top of the card enters the bottom of the viewport
            end: 'top top', // When the top of the card reaches the top of the viewport
            scrub: true, // Smooth scrubbing
            pin: true, // Pin the card during the animation
            pinSpacing: false, // Remove extra spacing added by pinning
            markers: false // Disable markers
          }
        }
      );
    });
  }, []);

  return (
    <div className="container">
      {[...Array(4)].map((_, index) => (
        <div
          className="card"
          key={index}
          ref={el => cardsRef.current[index] = el}
        ></div>
      ))}
    </div>
  );
};

export default App;
