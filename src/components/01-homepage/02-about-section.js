import * as React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';

import DkButton from '../00-reusable-components/dk-button';
import AboutSectionImg from './02a-about-section-img';

import * as Homepage from '../../styles/homepage.module.css';

const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      [
        `.${Homepage.aboutIntro}`,
        `.${Homepage.aboutSectionDescription}`,
        '.about-section-cta',
      ],
      { y: 36, opacity: 0, height: 0 },
      {
        y: 0,
        opacity: 1,
        height: 'auto',
        duration: 1,
        delay: 0.5,
        ease: 'power1.outIn',
        stagger: 0.5,

        scrollTrigger: {
          trigger: '#about-row-trigger',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // image 1
    const imgDiv1 = document.querySelector(`.${Homepage.aboutSectionImgDiv1}`);

    gsap.to(imgDiv1, {
      scale: 0.9, // Adjust this value as needed (0.5 = 50% of the original size)
      ease: 'none',
      scrollTrigger: {
        trigger: imgDiv1,
        start: 'top bottom', // Adjust these values based on your layout
        end: 'bottom top',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
    });

    // image 2
    const imgDiv2 = document.querySelector(`.${Homepage.aboutSectionImgDiv2}`);

    gsap.to(imgDiv2, {
      scale: 0.8, // Adjust this value as needed (0.5 = 50% of the original size)
      ease: 'none',
      scrollTrigger: {
        trigger: imgDiv2,
        start: 'top bottom', // Adjust these values based on your layout
        end: 'bottom top',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
    });

    // image 3
    const imgDiv3 = document.querySelector(`.${Homepage.aboutSectionImgDiv3}`);

    gsap.to(imgDiv3, {
      scale: 0.7, // Adjust this value as needed (0.5 = 50% of the original size)
      ease: 'none',
      scrollTrigger: {
        trigger: imgDiv3,
        start: 'top bottom', // Adjust these values based on your layout
        end: 'bottom top',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
    });

    // image 4
    const imgDiv4 = document.querySelector(`.${Homepage.aboutSectionImgDiv4}`);

    gsap.to(imgDiv4, {
      scale: 0.6, // Adjust this value as needed (0.5 = 50% of the original size)
      ease: 'none',
      scrollTrigger: {
        trigger: imgDiv4,
        start: 'top bottom', // Adjust these values based on your layout
        end: 'bottom top',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
    });
  }, []);
  return (
    <section className={`${Homepage.aboutSection}`}>
      <Row id='about-row-trigger'>
        <Col lg={7} md={6} sm={6} className={Homepage.aboutCol1}>
          <h1 className={`gradient-color ${Homepage.aboutIntro}`}>
            Hello, I'm
          </h1>
          <h1 className={`gradient-color ${Homepage.aboutIntro} `}>
            Steve Kim
          </h1>
          <p className={`primary-color ${Homepage.aboutSectionDescription}`}>
            With over six years in the industry, I have honed my skills in UX
            design, information architecture,, content strategy, and business
            analysis, creating intuitive and user-centric web and mobile
            solutions that significantly enhance user experiences and drive
            business success.
          </p>
          <div className={`m-top-50 about-section-cta`}>
            <DkButton to='/' text='Learn More About Me' />
          </div>
        </Col>
        <Col lg={5} md={6} sm={6} className={`relative ${Homepage.aboutCol2}`}>
          <div
            className={`${Homepage.aboutSectionImgDiv}  ${Homepage.aboutSectionImgDiv0}`}
          >
            <AboutSectionImg />
          </div>
          <div
            className={`${Homepage.aboutSectionImgDiv} ${Homepage.aboutSectionImgDiv1}`}
          >
            <AboutSectionImg />
          </div>
          <div
            className={`${Homepage.aboutSectionImgDiv} ${Homepage.aboutSectionImgDiv2}`}
          >
            <AboutSectionImg />
          </div>
          <div
            className={`${Homepage.aboutSectionImgDiv} ${Homepage.aboutSectionImgDiv3}`}
          >
            <AboutSectionImg />
          </div>
          <div
            className={`${Homepage.aboutSectionImgDiv} ${Homepage.aboutSectionImgDiv4}`}
          >
            <AboutSectionImg />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;
