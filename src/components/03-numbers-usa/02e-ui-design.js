import * as React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';

import * as Projectpage from '../../styles/project.module.css';

const UIDesign = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // fadeInUp animation
    gsap.fromTo(
      [`#detail-trigger-5`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-trigger-5`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    // horizontal scroll
    gsap.to('.scroll-wrap', {
      x: () =>
        -(
          document.querySelector('.scroll-wrap').scrollWidth -
          document.documentElement.clientWidth
        ) + 'px',
      ease: 'power1.outIn',
      scrollTrigger: {
        trigger: '.horizontal-scroll-container',
        pin: true,
        scrub: 1,
        markers: true,
        start: 'center center',
        end: () => '+=' + document.querySelector('.scroll-wrap').offsetWidth,
      },
    });
  }, []);

  return (
    <Row className={`tablet-m-top-100`}>
      <Col
        xl={{ span: 6, offset: 3 }}
        lg={{ span: 8, offset: 2 }}
        id='detail-trigger-5'
      >
        <div className={` ${Projectpage.detailDiv}`}>
          <h2 className={`gradient-color text-align-center`}>
            Website and Mobile App Products
          </h2>
          <p className={`text-align-center`}>
            We utilized insights from our research and content strategy to meet
            NUSA's business objectives. We carefully selected color schemes,
            typography, and iconography that embodied the brand's identity,
            while template layouts and a comprehensive design system ensured
            consistent, visually engaging designs that strengthened brand
            identity and user engagement across the website and mobile app.
          </p>
        </div>
      </Col>

      <Col sm={12} className={`m-top-50`}>
        <div
          className={`horizontal-scroll-container ${Projectpage.horizontalScrollContainer}`}
        >
          <div className={`scroll-wrap ${Projectpage.scrollWrap}`}>
            {/* item 1 */}
            <div className={`scroll-item ${Projectpage.scrollItem}`}>
              <video autoPlay muted playsInline>
                <source
                  src='https://res.cloudinary.com/stevekim/video/upload/v1710193302/NUSA/video-4_vevtoy.mp4'
                  type='video/mp4'
                />
              </video>
            </div>

            {/* item 2 */}
            <div className={`scroll-item ${Projectpage.scrollItem}`}>
              <video autoPlay muted playsInline>
                <source
                  src='https://res.cloudinary.com/stevekim/video/upload/v1710193289/NUSA/video-2_emqtwg.mp4'
                  type='video/mp4'
                />
              </video>
            </div>

            {/* item 3 */}
            <div className={`scroll-item ${Projectpage.scrollItem}`}>
              <video autoPlay muted playsInline>
                <source
                  src='https://res.cloudinary.com/stevekim/video/upload/v1710193278/NUSA/video-1_nj26s3.mp4'
                  type='video/mp4'
                />
              </video>
            </div>

            {/* item 4 */}
            <div className={`scroll-item ${Projectpage.scrollItem}`}>
              <video autoPlay muted playsInline>
                <source
                  src='https://res.cloudinary.com/stevekim/video/upload/v1710193294/NUSA/video-3_doh6fu.mp4'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default UIDesign;
