import * as React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Testimonial01 from './04a-testimonial1';
import Testimonial02 from './04b-testimonial2';
import Testimonial03 from './04c-testimonial3';
import Testimonial04 from './04d-testimonial4';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const TestimonialsSection = () => {
  const carouselRef = useRef(null);
  //   const nextButtonRef = useRef(null);
  //   const prevButtonRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const carousel = carouselRef.current;
    const items = gsap.utils.toArray(`.${Aboutpage.carouselDiv}`, carousel);
    const totalWidth = items.length * items[0].offsetWidth;
    const animationDuration = 7.5; // Adjust based on desired speed

    // Initialize the timeline for the carousel
    tl.current = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'linear' },
      paused: true, // Start paused to control play state with hover and buttons
      onRepeat: () => carousel.appendChild(carousel.firstChild), // Move first item to the end to create an infinite loop effect
    });

    tl.current.to(carousel, {
      x: `-=${totalWidth / items.length}`, // Move carousel one item's width to the left
      duration: animationDuration,
    });

    tl.current.play();

    // Button functionality
    // nextButtonRef.current.addEventListener('click', () => {
    //   tl.current.timeScale(2).play();
    // });

    // prevButtonRef.current.addEventListener('click', () => {
    //   tl.current.timeScale(2).reverse();
    // });

    // Pause and resume on hover
    carousel.addEventListener('mouseenter', () => tl.current.pause());
    carousel.addEventListener('mouseleave', () => tl.current.resume());

    // section title animation
    gsap.fromTo(
      [`#testimonials-section-title`],
      { y: 36, opacity: 0, height: 0 },
      {
        y: 0,
        opacity: 1,
        height: 'auto',
        duration: 1,
        delay: 0.5,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#testimonials-section-title-trigger`,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      [`.${Aboutpage.carouselDiv}`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `.${Aboutpage.carouselWrapper}`,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // return () => {
    //   tl.kill(); // Clean up the GSAP timeline
    // };
  }, []);
  return (
    <div>
      <div
        id='testimonials-section-title-trigger'
        className={Aboutpage.sectionTitleDiv}
      >
        <h1
          id='testimonials-section-title'
          className={`section-title gradient-color text-align-center`}
        >
          Testimonials
        </h1>
      </div>

      {/* carousel */}
      <div ref={carouselRef} className={Aboutpage.carouselWrapper}>
        {/* testimonial 1 */}
        <div className={`${Aboutpage.carouselDiv}`}>
          <Testimonial01 />
        </div>
        {/* testimonial 2 */}
        <div className={`${Aboutpage.carouselDiv}`}>
          <Testimonial02 />
        </div>

        {/* testimonial 3 */}
        <div className={`${Aboutpage.carouselDiv}`}>
          <Testimonial03 />
        </div>

        {/* testimonial 4 */}
        <div className={`${Aboutpage.carouselDiv}`}>
          <Testimonial04 />
        </div>
      </div>
      {/* <button ref={prevButtonRef} className='prev'>
        prev
      </button> */}
      {/* <button ref={nextButtonRef} className='next'>
        next
      </button> */}
    </div>
  );
};

export default TestimonialsSection;
