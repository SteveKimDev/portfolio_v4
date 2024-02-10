import * as React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SectionTitle = ({ title }) => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      [`.section-title`],
      { y: '36px', opacity: 0, height: 0 },
      {
        y: '0px',
        opacity: 1,
        height: 'auto',
        duration: 1,
        delay: 0.5,
        ease: 'power1.outIn',

        // ScrollTrigger-specific properties
        scrollTrigger: {
          trigger: '#section-title-trigger',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <div id='section-title-trigger'>
      <h1 className='gradient-color section-title text-align-center'>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
