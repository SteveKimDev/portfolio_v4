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
    gsap.from(
      [
        `.${Projectpage.heroMobileImg4}`,
        `.${Projectpage.heroMobileImg3}`,
        `.${Projectpage.heroMobileImg2}`,
        `.${Projectpage.heroMobileImg1}`,
      ],
      {
        y: 16,
        opacity: 0,
        stagger: 0.5,
        duration: 1,
        ease: 'power1.outIn',
      }
    );
  }, []);
  return (
    <section>
      <Row>
        <Col lg={6} className={`relative ${Projectpage.heroCol1}`}>
          <div className={`${Projectpage.heroCopyContainer}`}>
            <div>
              <h1 className={`gradient-color ${Projectpage.heroTitle}`}>
                NumbersUSA
              </h1>
              <p className={`${Projectpage.heroDescription}`}>
                A non-profit political organization, recognized the need for a
                significant website upgrade, encompassing a fresh redesign,
                enhanced information architecture for page navigation and
                content reorganization, as well a mobile app platform which
                focused on participation in political initiatives.
              </p>
            </div>
            <div>
              <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
                Product TYpe
              </h2>
              <p className={`${Projectpage.heroSubdescription}`}>
                Senior Product Designer
              </p>
            </div>
            <div>
              <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
                Role
              </h2>
              <p className={`${Projectpage.heroSubdescription}`}>
                Website, IOS, and Android Mobile App
              </p>
            </div>
            <div>
              <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
                Timeline
              </h2>
              <p className={`${Projectpage.heroSubdescription}`}>11 months</p>
            </div>
          </div>
        </Col>
        <Col lg={6} className={`relative ${Projectpage.heroCol2}`}>
          <div className={`${Projectpage.heroMobileImg1}`}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709833979/NUSA/4_vhhifv.webp'
              alt='project hero img'
              className={Projectpage.heroMobileImg}
            />
          </div>

          <div className={`${Projectpage.heroMobileImg2}`}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709833978/NUSA/2_c3bhvt.webp'
              alt='project hero img'
              className={Projectpage.heroMobileImg}
            />
          </div>

          <div className={`${Projectpage.heroMobileImg3}`}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709833981/NUSA/1_r44qjz.webp'
              alt='project hero img'
              className={Projectpage.heroMobileImg}
            />
          </div>

          <div className={`${Projectpage.heroMobileImg4}`}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709833978/NUSA/3_qjsnab.webp'
              alt='project hero img'
              className={Projectpage.heroMobileImg}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
