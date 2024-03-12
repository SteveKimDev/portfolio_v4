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
      { y: '32px', opacity: 0 },
      {
        y: '0px',
        opacity: 1,
        duration: 1.5,
        stagger: 0.5,
        ease: 'power1.outIn',

        // ScrollTrigger-specific properties
        scrollTrigger: {
          trigger: '#footer-trigger',
          start: 'top 60%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);
  return (
    <section className='footer-section'>
      <div id='footer-trigger' className='footer-header-div'>
        <h2 className='text-align-center gradient-color section-title '>
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
