import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const WebsiteAuditRow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // fadeInUp animation
    gsap.fromTo(
      [`#detail-trigger-1`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-trigger-1`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      [`#detail-img-trigger-1`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-img-trigger-1`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section>
      <Row className={`m-top-100`}>
        <Col lg={4} id='detail-trigger-1' className={`relative`}>
          <div
            className={`${Projectpage.detailDiv} ${Projectpage.detailDivCenterAlign}`}
          >
            <h2 className={`gradient-color`}>Website Content Audit</h2>

            <p>
              Conducted a thorough audit of the legacy website (over 500 pages),
              which involved scrutinizing not only the page hierarchy, page
              templates, component types, and media asset types but also
              uncovering any inconsistencies, or opportunities for optimization.
            </p>
          </div>
        </Col>
        <Col lg={{ span: 7, offset: 1 }} id='detail-trigger-1'>
          <div>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710359705/ICBC/web-audit_yii7rc.webp'
              placeholder='blurred'
              alt='persona img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default WebsiteAuditRow;
