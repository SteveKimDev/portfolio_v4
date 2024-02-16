import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const ApproachSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // section title animation
    gsap.fromTo(
      [`#approach-section-title`],
      { y: '36px', opacity: 0, height: 0 },
      {
        y: '0px',
        opacity: 1,
        height: 'auto',
        duration: 1,
        delay: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `.${Aboutpage.approachSection}`,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      [`.${Aboutpage.approachCard}`],
      { y: '36px', opacity: 0 },
      {
        y: '0px',
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power1.outIn',
        stagger: 0.5,

        scrollTrigger: {
          trigger: `#approach-card-trigger`,
          start: 'top 70%r',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <section className={Aboutpage.approachSection}>
      <Row>
        <Col>
          <h1
            style={{ lineHeight: 'normal' }}
            id='approach-section-title'
            className='section-title gradient-color'
          >
            Approach
          </h1>
        </Col>
      </Row>
      <Row id='approach-card-trigger'>
        <Col xl={3} sm={6} xs={12} className={Aboutpage.cardCol}>
          <div className={`card ${Aboutpage.approachCard}`}>
            <h2>UX Research</h2>
            <p>
              I focus on understanding user behaviors, needs, and motivations
              through methodical, user-centered research techniques. I employ a
              variety of research methods including surveys, interviews,
              usability testing, and observational studies to gather actionable
              insights.
            </p>
          </div>
        </Col>
        <Col xl={3} sm={6} xs={12} className={Aboutpage.cardCol}>
          <div className={`card ${Aboutpage.approachCard}`}>
            <h2>UX Design</h2>
            <p>
              My approach centers on crafting visually captivating and
              interactive designs that harmonize creativity with practicality. I
              excel in the artful integration of crucial brand
              elements—including color palettes, typography, and visual
              themes—to forge a unified and impactful user experience.
            </p>
          </div>
        </Col>
        <Col xl={3} sm={6} xs={12} className={Aboutpage.cardCol}>
          <div className={`card ${Aboutpage.approachCard}`}>
            <h2>Development</h2>
            <p>
              Deep collaboration with developers to realize our collective
              vision, I emphasize open dialogue and a cyclical approach to
              design, we validate the technical viability, forging products that
              exemplify a harmonious integration of design principles and
              technological innovation.
            </p>
          </div>
        </Col>
        <Col xl={3} sm={6} xs={12} className={Aboutpage.cardCol}>
          <div className={`card ${Aboutpage.approachCard}`}>
            <h2>Teamwork</h2>
            <p>
              Fostering open communication and collaboration is crucial for
              transforming web/mobile app concepts into reality. By working
              closely with cross-functional teams, I commit to fully
              understanding and meeting client objectives, while providing
              transparent, constructive feedback.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ApproachSection;
