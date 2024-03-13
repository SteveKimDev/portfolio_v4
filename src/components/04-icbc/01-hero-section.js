import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const HeroSection = () => {
  useEffect(() => {
    // Fade-in-Up Animation
    gsap.from(`.${Projectpage.heroCopyContainer} > *`, {
      y: 24,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'power1.outIn',
    });

    // Fade-in-Up Animation
    gsap.from([`.${Projectpage.heroFlatImg1}`], {
      y: 16,
      opacity: 0,
      duration: 1,
      ease: 'power1.outIn',
    });
  }, []);
  return (
    <section>
      <Row>
        <Col lg={6} className={`relative ${Projectpage.heroCol1}`}>
          <div className={`${Projectpage.heroCopyContainer}`}>
            <div>
              <h1 className={`gradient-color ${Projectpage.heroTitle}`}>
                ICBC
              </h1>
              <p className={`${Projectpage.heroDescription}`}>
                A prominent auto insurance company serving the entire Vancouver
                BC region,put into action an extensive content migration and
                website replatforing project. The project's objective was to
                transition from an outdated Sharepoint website and content
                management system to a modern, scalable web platform built using
                NextJS and Contentful for their CMS.
              </p>
            </div>
            <div>
              <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
                Role
              </h2>
              <p className={`${Projectpage.heroSubdescription}`}>
                Information Architect
              </p>
            </div>
            <div>
              <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
                Product Type
              </h2>
              <p className={`${Projectpage.heroSubdescription}`}>
                Website, and Content Management System
              </p>
            </div>
            <div>
              <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
                Timeline
              </h2>
              <p className={`${Projectpage.heroSubdescription}`}>9 months</p>
            </div>
          </div>
        </Col>
        <Col lg={6} className={`relative ${Projectpage.heroCol2}`}>
          <div className={`${Projectpage.heroFlatImg1}`}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710354749/ICBC/hero_img_lq8al4.webp'
              alt='project hero img'
              placeholder='blurred'
              className={Projectpage.heroFlatImg}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
