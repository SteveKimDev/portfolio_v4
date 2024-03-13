import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const CaseStudyBtn = ({ url }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // scaleUp and scaleDown animation
    const scaleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#case-study-btn-trigger',
        start: 'top bottom',
        toggleActions: 'play none none none',
        // Optional: once true will make the animation play only once
        once: true,
      },
      yoyo: true,
    });

    // Adding scale up and down animations to the timeline
    scaleAnimation
      .fromTo(
        '#case-study-btn-trigger',
        { scale: 1 },
        { scale: 1.2, duration: 1, ease: 'power1.inOut' }
      )
      .fromTo(
        '#case-study-btn-trigger',
        { scale: 1.2 },
        { scale: 1, duration: 1, ease: 'power1.inOut' }
      );
  }, []);
  return (
    <div className='text-align-center m-top-100' id='case-study-btn-trigger'>
      <a href={url} target='_blank' rel='noreferrer' className='dk-button'>
        <span>View Full Case Study</span>
      </a>
    </div>
  );
};

export default CaseStudyBtn;
