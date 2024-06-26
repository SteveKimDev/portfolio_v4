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
              The UI Designer and I collaborated closely to finalize the design
              system, which streamlined our design and development process. By
              creating and maintaining this system, our development team has
              been able to efficiently produce user interfaces that are
              consistent and scalable across both the website and the mobile app
              and are also aesthetically pleasing. The design system includes:
            </p>
            <Row>
              <Col xs={4}>
                <ul>
                  <li>Color</li>
                  <li>Typography</li>
                  <li>Images</li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul>
                  <li>Iconography</li>
                  <li>UI Components</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          xs={12}
          sm={6}
          xl={{ span: 5, offset: 1 }}
          id='detail-img-trigger-2'
        >
          <div style={{ padding: '8px' }}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710193722/NUSA/design_system_-_color_ui8tei.webp'
              placeholder='blurred'
              alt='design system img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
        <Col xs={12} sm={6} xl={5} id='detail-img-trigger-2'>
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
