import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';

import * as Projectpage from '../../styles/project.module.css';

// title row + 3 card row
const PainPointsRow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // fadeInUp animation
    gsap.fromTo(
      [`#detail-trigger-2`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-trigger-2`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      [`#detail-card-trigger-2`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-card-trigger-2`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section>
      <Row className={`m-top-100`}>
        <Col
          xl={{ span: 6, offset: 3 }}
          lg={{ span: 8, offset: 2 }}
          id='detail-trigger-2'
        >
          <div className={` ${Projectpage.detailDiv}`}>
            <h2 className={`gradient-color text-align-center`}>Pain Points</h2>
            <p className={`text-align-center`}>
              After completing 2 weeks of research, user interviews, and data
              analysis, three common pain points and frustrations were
              identified among the majority of users who visited the legacy
              website. These insights served as a foundation for the website
              redesign.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <div
            className={`card ${Projectpage.cardDiv}`}
            id='detail-card-trigger-2'
          >
            <h2>Poor Design</h2>
            <p>
              Inconsistent design, lack of mobile responsiveness, and a poorly
              designed layout, caused frustration with users.
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div
            className={`card ${Projectpage.cardDiv}`}
            id='detail-card-trigger-2'
          >
            <h2>Language Gap</h2>
            <p>
              A mixture of Korean and English language content was found to be
              confusing and a negative experience.
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div
            className={`card ${Projectpage.cardDiv}`}
            id='detail-card-trigger-2'
          >
            <h2>Outdated Content</h2>
            <p>
              Outdated and unmanaged content caused frustration among users and
              negatively impacted their experience.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default PainPointsRow;
