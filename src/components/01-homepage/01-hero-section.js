import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import DkButton from '../00-reusable-components/dk-button';
import * as Homepage from '../../styles/homepage.module.css';

const HeroSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in-Up Animation
    gsap.from(`.${Homepage.headlineDiv} > *`, {
      y: 50,
      height: 0,
      opacity: 0,
      stagger: 0.4,
      duration: 1,
      ease: 'power1.outIn',
    });

    // scroll out animation
    // gsap.to(`.${Homepage.headlineDiv} > *`, {
    //   scrollTrigger: {
    //     trigger: `.${Homepage.heroSection}`,
    //     start: 'bottom 90%',
    //     end: 'bottom center',
    //     scrub: true,
    //   },
    //   scale: 0.8,
    //   stagger: 0.5,
    //   duration: 2,
    //   ease: 'power1.outIn',
    // });
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
          Offering a unique perspective to create engaging, user-friendly web
          applications, utilizing both creative and technical problem-solving
          skills.
        </p>
        <div className={`m-top-50 cta-btn`}>
          <DkButton text='Check Out My Work' to='/#project-section' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
