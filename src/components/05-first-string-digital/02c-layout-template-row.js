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
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710540363/FSD/design-layout_ilxios.webp'
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
            <h2 className={`gradient-color`}>
              Transformed an Ineffctive Process Into a Successful Solution
            </h2>
            <p>
              The successful implementation of a user-friendly sign-up process
              resulted in a significant decrease in drop-off rates during the
              onboarding process. The previous 35% drop-off rate was reduced to
              less than 20%.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default LayoutTemplateRow;
