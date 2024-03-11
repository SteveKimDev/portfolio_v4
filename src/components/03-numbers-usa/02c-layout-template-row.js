import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const LayoutTemplateRow = () => {
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
  }, []);
  return (
    <>
      <Row className={`m-top-100`}>
        <Col xl={8} lg={7} className={`${Projectpage.order2}`}>
          <div>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709857304/NUSA/cover_img_byetoa.webp'
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
            <h2 className={`gradient-color`}>Website Layout Template Design</h2>
            <p>
              The layout template design introduced a structured approach that
              ensured usability, aesthetic consistency, and strategic alignment
              with the content framework.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LayoutTemplateRow;