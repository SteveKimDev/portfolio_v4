import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import DkButton from '../00-reusable-components/dk-button';
import * as Homepage from '../../styles/homepage.module.css';

const HeroSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      `.${Homepage.headlineDiv} > *`,
      {
        y: 50,
        height: 0,
        opacity: 0,
      },
      {
        y: 0,
        height: 'auto',
        opacity: 1,
        stagger: 0.2,
        delay: 0.5,
        duration: 1,
        ease: 'power1.outIn',
        scrollTrigger: {
          trigger: `.${Homepage.headlineDiv}`,
          start: 'top center',
          toggleActions: 'play none restart none',
        },
      }
    );

    // fade-out on scroll animation
    gsap.to(`.${Homepage.heroSection} > *`, {
      opacity: 0,
      duration: 1,
      ease: 'power1.outIn',
      scrollTrigger: {
        trigger: `.${Homepage.heroSection}`,
        start: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);
  return (
    <div className={Homepage.heroSection}>
      <div className={`${Homepage.headlineDiv}`}>
        <h1 className={`gradient-color ${Homepage.headline1a}`}>Product</h1>
        <h1 className={`gradient-color ${Homepage.headline1b}`}>Designer</h1>
        <h2 className={`gradient-color ${Homepage.headline2}`}>
          With Web Development Experience
        </h2>
        <p className={`secondary-color ${Homepage.headlineDescription}`}>
          Combining creativity and technical skill, I design engaging,
          user-friendly applications that significantly contribute to customer
          engagement.
        </p>
        <div className={`m-top-75 cta-btn`}>
          <DkButton text='Selected Projects' to='/#project-section' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
