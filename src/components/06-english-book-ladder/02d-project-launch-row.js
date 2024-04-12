import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const LaunchRow = () => {
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

    gsap.fromTo(
      [`#detail-img-trigger-5`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-img-trigger-5`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section>
      <Row className={`m-top-200 lg-m-top-100`}>
        <Col
          xl={{ span: 6, offset: 3 }}
          lg={{ span: 8, offset: 2 }}
          id='detail-trigger-5'
          className={`m-bottom-50`}
        >
          <div className={` ${Projectpage.detailDiv}`}>
            <h2 className={`gradient-color text-align-center`}>
              Project Launch Successes
            </h2>
            <p>
              Following the launch of their website, the English Book Ladder
              team initiated a marketing campaign to advertise their upcoming
              classes and programs through the website and across various media
              channels. Three months into this effort, our analysis revealed a
              significant increase in engagement: success.
            </p>
            <ul>
              <li>New website visitors surged by 125%, from 127 to 287.</li>
              <li>
                direct customer contacts via the website increased by almost
                50%, from 19 to 35.
              </li>
            </ul>
            <p>
              These outcomes were particularly encouraging given the ongoing
              COVID-19 restrictions, which limited the range of services EBL
              could provide. Given these constraints, we unanimously regarded
              these results as an overall
            </p>
          </div>
        </Col>
        <Col xl={{ span: 10, offset: 1 }} id='detail-img-trigger-5'>
          <div className={`m-top-25 tablet-m-top-0`}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710799057/English%20Book%20Ladder/responsive-img_sgbcs4.webp'
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

export default LaunchRow;
