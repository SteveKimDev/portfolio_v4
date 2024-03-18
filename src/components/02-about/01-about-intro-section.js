import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';

import AboutIntroImg01 from './01a-image1';
import AboutIntroImg02 from './01b-image2';
import AboutIntroImg03 from './01c-image3';
import AboutIntroImg04 from './01d-image4';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const AboutIntroSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // fade in animation
    gsap.fromTo(
      `.${Aboutpage.introHeader}`,
      {
        y: 36,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      `.${Aboutpage.aboutIntroImgDiv}`,
      {
        y: 36,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'power1.inOut',
        stagger: 0.2,
      }
    );

    // parallax animation
    if (window.innerWidth >= 601) {
      gsap.to('[data-speed]', {
        y: (i, el) =>
          (1 - parseFloat(el.getAttribute('data-speed'))) *
          ScrollTrigger.maxScroll(window),
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          invalidateOnRefresh: true,
          scrub: 0,
        },
      });
    }
  }, []);
  return (
    <section className={Aboutpage.aboutIntroSection}>
      <Row>
        <Col>
          <h1 className={Aboutpage.introHeader} data-speed='1.50'>
            With over 6 years experience as a Product Designer, my journey has
            seen me leading the end-to-end design of diverse web and mobile app
            projects, where I've increased user engagement and client
            satisfaction through innovative solutions.
          </h1>
        </Col>
      </Row>
      <Row>
        <Col sm={3} xs={12}>
          <AboutIntroImg01 />
        </Col>
        <Col sm={3} className='mobile-display-none'>
          <AboutIntroImg02 />
        </Col>
        <Col sm={3} className='mobile-display-none'>
          <AboutIntroImg03 />
        </Col>
        <Col sm={3} className='mobile-display-none'>
          <AboutIntroImg04 />
        </Col>
      </Row>
    </section>
  );
};

export default AboutIntroSection;
