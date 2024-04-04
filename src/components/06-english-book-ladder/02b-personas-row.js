import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

// copy left col and image right col row
const PersonasRow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // fadeInUp animation
    gsap.fromTo(
      [`#detail-trigger-1`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-trigger-1`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      [`#detail-img-trigger-1`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-img-trigger-1`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section>
      <Row className={`m-top-100`}>
        <Col lg={7} id='detail-trigger-1'>
          <div>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710796062/English%20Book%20Ladder/personas_pi4sbh.webp'
              placeholder='blurred'
              alt='persona img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
        <Col
          lg={{ span: 4, offset: 1 }}
          id='detail-trigger-1'
          className={`relative`}
        >
          <div
            className={`${Projectpage.detailDiv} ${Projectpage.detailDivCenterAlign}`}
          >
            <h2 className={`gradient-color`}>User Personas</h2>

            <p>
              The goal to understand and empathize with our users was achieved
              through synthesizing the research data to create persona types,
              which served as a foundation for the website design strategy and
              helped to guide the content delivery approach.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default PersonasRow;
