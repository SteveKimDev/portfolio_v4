import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const ContentMigrationRow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // fadeInUp animation
    gsap.fromTo(
      [`#detail-trigger-3`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-trigger-3`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      [`#detail-img-trigger-3`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-img-trigger-3`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section>
      <Row className={`m-top-100`} id='detail-img-trigger-3'>
        <Col xl={8} lg={7} className={`${Projectpage.order2}`}>
          <div>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710457277/ICBC/content-model_n5ei8j.webp'
              placeholder='blurred'
              alt='layout template img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
        <Col
          xl={{ span: 3, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
          className={`relative ${Projectpage.order1}`}
          id='detail-trigger-3'
        >
          <div
            className={`${Projectpage.detailDiv} ${Projectpage.detailDivCenterAlign}`}
          >
            <h2 className={`gradient-color`}>Content Migration Planning</h2>
            <p>
              Planned the process for manually migrating content that could not
              be automated. Offered guidance on necessary modifications or
              additions to Contentful's content models. Made significant
              contributions to the UAT process to validate all page content and
              layouts.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ContentMigrationRow;
