import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const ResearchRow = () => {
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
      <Row className={`m-top-200 lg-m-top-100`}>
        <Col
          xl={{ span: 4, offset: 4 }}
          lg={{ span: 8, offset: 2 }}
          id='detail-trigger-1'
          className={`relative`}
        >
          <div className={`${Projectpage.detailDiv} `}>
            <h2 className={`gradient-color`}>Research and Insights</h2>

            <p>
              Completing a comprehensive site audit, conducting user research,
              and stakeholder interviews were pivotal in documenting and
              presenting a UX strategy. These steps allowed for an understanding
              of the existing challenges and opportunities. Key outcomes
              include:
            </p>
            <ul>
              <li>Identified paint points and created user personas</li>
              <li>Developed sitemap and user flows</li>
              <li>Defined page template layouts</li>
              <li>
                Outlined content migration strategy and feature specifications
              </li>
            </ul>
            <div className='m-top-50 m-bottom-100 lg-m-bottom-75'>
              <a
                className='dk-button'
                href='https://docs.google.com/presentation/d/1H8ExaKWMFt2kcBFDcYQ1BIUUjDbKty-J0s6gln4J2Ms/edit#slide=id.g2c4e9190c12_0_59'
                target='_blank'
                rel='noreferrer'
              >
                <span>Case Study Details</span>
              </a>
            </div>
          </div>
        </Col>
        <Col xl={12} id='detail-img-trigger-1'>
          <div>
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

export default ResearchRow;
