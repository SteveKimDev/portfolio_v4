import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const DesignSystemRow = () => {
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
      [`#detail-img-trigger-2`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-img-trigger-2`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section>
      <Row className={`m-top-200 lg-m-top-100`}>
        <Col
          xl={{ span: 4, offset: 4 }}
          lg={{ span: 8, offset: 2 }}
          id='detail-trigger-2'
          className='m-bottom-50 lg-m-bottom-25'
        >
          <div className={` ${Projectpage.detailDiv}`}>
            <h2 className={`gradient-color`}>Scalable Design System</h2>
            <p>
              Creating and maintaining a unified design system, allowed our
              development team to efficiently develop consistent, scalable, and
              aesthetically pleasing user interfaces for the website and the
              mobile app.
            </p>
          </div>
        </Col>
        <Col xs={6} xl={{ span: 5, offset: 1 }} id='detail-img-trigger-2'>
          <div style={{ padding: '8px' }}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710193722/NUSA/design_system_-_color_ui8tei.webp'
              placeholder='blurred'
              alt='design system img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
        <Col xs={6} xl={5} id='detail-img-trigger-2'>
          <div style={{ padding: '8px' }}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710193723/NUSA/design_system_-_typograpghy_tivwpp.webp'
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

export default DesignSystemRow;
