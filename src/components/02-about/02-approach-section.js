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
      { y: 36, opacity: 0, height: 0 },
      {
        y: 0,
        opacity: 1,
        height: 'auto',
        duration: 1,
        delay: 0.5,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#approach-section-title-trigger`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      [`.${Aboutpage.approachCard}`],
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 1.5,
        ease: 'power1.outIn',
        stagger: 0.2,

        scrollTrigger: {
          trigger: `#approach-card-trigger`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section className={`m-top-100 ${Aboutpage.approachSection}`}>
      <Row id='approach-section-title-trigger'>
        <Col>
          <div className='section-title-div'>
            <h1
              id='approach-section-title'
              className='section-title gradient-color text-align-center'
            >
              Approach
            </h1>
          </div>
        </Col>
      </Row>
      <Row id='approach-card-trigger' className='m-top-25'>
        <Col xl={4} lg={6} className={Aboutpage.cardCol}>
          <div
            className={`card ${Aboutpage.approachCard} ${Aboutpage.approachCard01}`}
          >
            <h2>UX Strategy</h2>
            <p>
              My UX strategy apporach centers on understanding user needs and
              behaviors through comprehensive research, using these insights to
              develop user-centric solutions that enhance engagement and meet
              business objectives. I refine designs iteratively to ensure they
              exceed user expectations and deliver measurable results.
            </p>
          </div>
        </Col>
        <Col xl={4} lg={6} className={Aboutpage.cardCol}>
          <div
            className={`card ${Aboutpage.approachCard}  ${Aboutpage.approachCard02}`}
          >
            <h2>UI Design</h2>
            <p>
              My UI design approach prioritizes aesthetic excellence and
              functional simplicity to create engaging and intuitive interfaces.
              I focus on visual clarity, using consistent and accessible design
              elements that align with the brand identity. By leveraging user
              feedback and current design trends, I continuously refine and
              optimize interfaces to improve user interaction and satisfaction.
            </p>
          </div>
        </Col>
        <Col xl={4} lg={12} className={Aboutpage.cardCol}>
          <div
            className={`card ${Aboutpage.approachCard} ${Aboutpage.approachCard04}`}
          >
            <h2>Teamwork</h2>
            <p>
              My approach to teamwork involves open communication among
              cross-functional team members. I prioritize understanding and
              integrating diverse perspectives to drive innovative solutions and
              achieve common goals. By facilitating regular discussions and
              feedback sessions, I ensure all voices are heard and that our
              collaborative efforts are aligned with project objectives.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ApproachSection;
