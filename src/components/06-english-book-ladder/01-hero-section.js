import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const HeroSection = () => {
  useEffect(() => {
    // Fade-in-Up Animation
    gsap.from([`.${Projectpage.heroImg}`], {
      height: 0,
      opacity: 0,
      duration: 1,
      ease: 'power1.outIn',
    });

    // Fade-in-Up Animation
    gsap.from([`.${Projectpage.heroTitle}`, `.sub-section`], {
      y: 36,
      height: 0,
      opacity: 0,
      stagger: 0.3,
      delay: 1,
      duration: 1,
      ease: 'power1.outIn',
    });
  }, []);
  return (
    <>
      <Row className={`${Projectpage.heroImgRow}`}>
        {/* hero img */}
        <Col xs={12}>
          <StaticImage
            src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710788435/English%20Book%20Ladder/hero-img_aotkzk.webp'
            alt='project hero img'
            placeholder='blurred'
            className={Projectpage.heroImg}
          />
        </Col>
      </Row>

      <Row className={`${Projectpage.heroCopyRow}`}>
        {/* hero title */}
        <Col xs={12} className={`m-top-25 m-bottom-25`}>
          <h1
            className={`gradient-color text-align-center ${Projectpage.heroTitle}`}
          >
            English Book Ladder
          </h1>
        </Col>

        {/* hero subtitle and sub-description 1 */}
        <Col sm={4} className={`text-align-center sub-section `}>
          <div>
            <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
              Role
            </h2>
            <p className={`${Projectpage.heroSubdescription}`}>
              UX/UI Designer &amp; Developer
            </p>
          </div>
        </Col>

        {/* hero subtitle and sub-description 2 */}
        <Col sm={4} className={`text-align-center sub-section`}>
          <div>
            <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
              Product Type
            </h2>
            <p className={`${Projectpage.heroSubdescription}`}>
              Business Website
            </p>
          </div>
        </Col>

        {/* hero subtitle and sub-description 3 */}
        <Col sm={4} className={`text-align-center sub-section`}>
          <div>
            <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
              Timeline
            </h2>
            <p className={`${Projectpage.heroSubdescription}`}>3 months</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HeroSection;
