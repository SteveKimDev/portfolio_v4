import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const WireframeDesignRow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // fadeInUp animation
    gsap.fromTo(
      [`#detail-trigger-4`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-trigger-4`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      [`#detail-img-trigger-4`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-img-trigger-4`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section>
      <Row className={`m-top-100`}>
        <Col lg={3} md={12} className={`relative`} id='detail-trigger-4'>
          <div
            className={`${Projectpage.detailDiv} ${Projectpage.detailDivCenterAlign}`}
          >
            <h2 className={`gradient-color`}>
              Wireframes to High Fidelity Design
            </h2>
            <p>
              Transitioning from wireframe to high-fidelity design involved
              refining the basic structural outline by incorporating detailed
              visuals, color schemes, typography from English Book Ladder's
              brand guidelines, and user interface elements, thus transforming
              abstract concepts into a polished, user-centric design.
            </p>
          </div>
        </Col>
        <Col
          lg={{ span: 4, offset: 1 }}
          md={6}
          sm={6}
          xs={6}
          id='detail-img-trigger-4'
        >
          <div style={{ padding: '8px' }}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710797124/English%20Book%20Ladder/wireframe_ciljmm.webp'
              placeholder='blurred'
              alt='design system img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
        <Col lg={4} md={6} sm={6} xs={6} id='detail-img-trigger-4'>
          <div style={{ padding: '8px' }}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710797152/English%20Book%20Ladder/hi-fi_design_o8sakl.webp'
              placeholder='blurred'
              alt='design system img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default WireframeDesignRow;
