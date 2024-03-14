import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const HeroSection = () => {
  useEffect(() => {
    // Fade-in Animation
    gsap.from([`.${Projectpage.heroImg}`], {
      height: 0,
      opacity: 0,
      duration: 1,
      ease: 'power1.outIn',
    });

    // Fade-in-Up Animation
    gsap.from([`.${Projectpage.heroTitle}`, `.sub-section`], {
      y: 16,
      height: 0,
      opacity: 0,
      stagger: 0.3,
      delay: 1,
      duration: 1,
      ease: 'power1.outIn',
    });
  }, []);
  return (
    <section className={`m-top-75`}>
      <Row>
        {/* hero img */}
        <Col xs={12}>
          <StaticImage
            src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710435876/FSD%20Sign%20Up/hero-img_oofu2r.webp'
            alt='project hero img'
            placeholder='blurred'
            className={Projectpage.heroImg}
          />
        </Col>

        {/* hero title */}
        <Col xs={12} className={`m-top-25`}>
          <h1
            className={`gradient-color text-align-center ${Projectpage.heroTitle}`}
          >
            First String Digtial
          </h1>
        </Col>

        {/* hero subtitle and sub-description 1 */}
        <Col sm={{ span: 2, offset: 1 }} className={`sub-section`}>
          <div>
            <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
              Role
            </h2>
            <p className={`${Projectpage.heroSubdescription}`}>
              Senior Product Designer
            </p>
          </div>
        </Col>

        {/* hero subtitle and sub-description 2 */}
        <Col sm={{ span: 3, offset: 2 }} className={`sub-section`}>
          <div>
            <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
              Product Type
            </h2>
            <p className={`${Projectpage.heroSubdescription}`}>Saas Website</p>
          </div>
        </Col>

        {/* hero subtitle and sub-description 3 */}
        <Col sm={{ span: 2, offset: 2 }} className={`sub-section`}>
          <div>
            <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
              Timeline
            </h2>
            <p className={`${Projectpage.heroSubdescription}`}>4 months</p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
