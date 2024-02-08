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
      { y: '25px', opacity: 0 },
      {
        y: '0px',
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',

        // ScrollTrigger-specific properties
        scrollTrigger: {
          trigger: '#section-title-trigger',
          start: 'top 80%',
          toggleActions: 'play none none none',
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
