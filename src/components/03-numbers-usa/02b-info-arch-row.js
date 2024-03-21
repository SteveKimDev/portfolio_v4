import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const InfoArchRow = () => {
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
      <Row className={`m-top-100`}>
        <Col
          xl={{ span: 6, offset: 3 }}
          lg={{ span: 8, offset: 2 }}
          id='detail-trigger-2'
        >
          <div className={` ${Projectpage.detailDiv}`}>
            <h2 className={`gradient-color text-align-center`}>
              Information Architecture and Content Strategy
            </h2>
            <p className={`text-align-center`}>
              Refining the information architecture with a detailed sitemap
              enhances intuitive navigation and ensures content is easily
              discoverable and organized.
            </p>
          </div>
        </Col>
        <Col xl={{ span: 10, offset: 1 }} id='detail-img-trigger-2'>
          <div className={`m-top-25 tablet-m-top-0`}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709855286/NUSA/sitemap_m8rnd0.webp'
              placeholder='blurred'
              alt='sitemap img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default InfoArchRow;
