import * as React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // text animation
    gsap.fromTo(
      [`.footer-header-div`, `.footer-link-div`],
      { y: '36px', opacity: 0, height: 0 },
      {
        y: '0px',
        opacity: 1,
        height: 'auto',
        duration: 1,
        delay: 0.5,
        stagger: 0.8,
        ease: 'power1.outIn',

        // ScrollTrigger-specific properties
        scrollTrigger: {
          trigger: '#footer-trigger',
          start: 'top center',
          stagger: 0.8,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <section className='footer-section'>
      <div id='footer-trigger'>
        <h2 className='text-align-center gradient-color section-title footer-header-div'>
          Let's Connect
        </h2>
        <div className='footer-link-div'>
          <a href='emailto:steve@stevekim.io'>steve@stevekim.io</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
