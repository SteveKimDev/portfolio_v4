import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

// copy left col and image right col row
const DefinitionRow = () => {
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
      <Row className={`m-top-200 lg-m-top-100`}>
        <Col
          lg={7}
          id='detail-img-trigger-2'
          className={`${Projectpage.order2}`}
        >
          <div>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710796062/English%20Book%20Ladder/personas_pi4sbh.webp'
              placeholder='blurred'
              alt='persona img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
        <Col
          lg={{ span: 4, offset: 1 }}
          id='detail-trigger-2'
          className={`relative md-m-bottom-25 ${Projectpage.order1}`}
        >
          <div
            className={`${Projectpage.detailDiv} ${Projectpage.detailDivCenterAlign}`}
          >
            <h2 className={`gradient-color`}>Defining Our Users Needs</h2>

            <p>
              To achieve our goal of understanding and empathizing with our
              users, we undertook the following steps:
            </p>
            <ul>
              <li>Synthesized research data to pinpoint user pain points.</li>
              <li>Created personas based on these insights.</li>
              <li>
                Developed a sitemap to serve as the foundation for our website
                design strategy.
              </li>
            </ul>
            {/* <div className='m-top-50'>
              <a
                className='dk-button'
                href='https://docs.google.com/presentation/d/160GIHCPp03TVDIijhg0q6gqVt3zRcFF1DGfR0ZgD5Vo/edit#slide=id.g2c87bce9c67_0_0'
                target='_blank'
                rel='noreferrer'
              >
                <span>Case Study Details</span>
              </a>
            </div> */}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default DefinitionRow;
