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
  }, []);
  return (
    <section>
      <Row className={`m-top-100`}>
        <Col lg={3} md={12} className={`relative`} id='detail-trigger-4'>
          <div
            className={`${Projectpage.detailDiv} ${Projectpage.detailDivCenterAlign}`}
          >
            <h2 className={`gradient-color`}>Design System</h2>
            <p>
              Creating and maintaining a unified design system empowered our
              team to efficiently produce consistent, scalable, and user-centric
              products with coherence.
            </p>
          </div>
        </Col>
        <Col lg={{ span: 4, offset: 1 }} md={6}>
          <div style={{ padding: '8px' }}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710193722/NUSA/design_system_-_color_ui8tei.webp'
              alt='design system img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div style={{ padding: '8px' }}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710193723/NUSA/design_system_-_typograpghy_tivwpp.webp'
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
