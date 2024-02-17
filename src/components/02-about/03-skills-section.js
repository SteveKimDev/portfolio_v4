import * as React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Marquee01 from './03a-marquee1';
import Marquee02 from './03b-marquee2';
import Marquee03 from './03c-marquee3';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const SkillsSection = () => {
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);
  const marquee3Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Function to create a marquee effect
    const createMarquee = (wrapperRef, duration, direction = 'left') => {
      const marqueeWrapper = wrapperRef.current;
      // Make sure marqueeDiv class is correctly targeted within each Marquee component
      const marqueeDivs = gsap.utils.toArray(
        `.${Aboutpage.marqueeDiv}`,
        marqueeWrapper
      );

      // Calculate total width after clones are appended for accurate measurement
      let totalWidth = marqueeDivs.reduce(
        (acc, div) => acc + div.offsetWidth,
        0
      );

      // Append clones for a continuous loop effect
      marqueeDivs.forEach((div) => {
        const clone = div.cloneNode(true);
        marqueeWrapper.appendChild(clone);
      });

      // Recalculate totalWidth to include clones
      totalWidth *= 2;

      const animation = gsap.to(marqueeWrapper, {
        x:
          direction === 'left'
            ? `-=${totalWidth / 2}px`
            : `+=${totalWidth / 2}px`,
        ease: 'linear',
        duration: duration,
        repeat: -1,
      });

      // Add event listeners to pause and resume on hover
      marqueeWrapper.addEventListener('mouseenter', () => animation.pause());
      marqueeWrapper.addEventListener('mouseleave', () => animation.resume());
    };

    // Initialize marquees
    createMarquee(marquee1Ref, 20, 'left'); // Adjust direction and speed as needed
    createMarquee(marquee2Ref, 20, 'left'); // Second marquee goes right to left
    createMarquee(marquee3Ref, 15, 'left'); // Adjust direction and speed as needed

    // section title animation
    gsap.fromTo(
      [`#skills-section-title`],
      { y: 36, opacity: 0, height: 0 },
      {
        y: 0,
        opacity: 1,
        height: 'auto',
        duration: 1,
        delay: 0.5,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#skills-section-title-trigger`,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <div className={Aboutpage.skillsSection}>
      <div
        id='skills-section-title-trigger'
        className={Aboutpage.sectionTitleDiv}
      >
        <h1
          id='skills-section-title'
          className={`section-title gradient-color text-align-center`}
        >
          Skills &amp; Expertise
        </h1>
      </div>

      {/* marquee 1 */}
      <div ref={marquee1Ref} className={Aboutpage.marqueeWrapper}>
        <Marquee01 />
      </div>

      {/* marquee 2 */}
      <div ref={marquee2Ref} className={Aboutpage.marqueeWrapper}>
        <Marquee02 />
      </div>

      {/* marquee 3 */}
      <div ref={marquee3Ref} className={Aboutpage.marqueeWrapper}>
        <Marquee03 />
      </div>
    </div>
  );
};

export default SkillsSection;
