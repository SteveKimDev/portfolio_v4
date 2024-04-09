import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const DesignRow = () => {
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
      <Row className={`m-top-100`}>
        <Col
          lg={4}
          className={`relative ${Projectpage.order2}`}
          id='detail-trigger-3'
        >
          <div
            className={`${Projectpage.detailDiv} ${Projectpage.detailDivCenterAlign}`}
          >
            <h2 className={`gradient-color`}>Concept For the Final Design</h2>
            <p>
              Following several discussions with stakeholders about the
              website's design, we identified key criteria to guide the final
              design draft:
            </p>
            <ul>
              <li>Incorporate the new brand colors and fonts.</li>
              <li>
                Achieve a design that is simple, professional, yet retains a
                playful touch.
              </li>
              <li>
                Tailor the content's tone to appeal to both mothers and business
                professionals.
              </li>
            </ul>
            <div className='m-top-50 m-bottom-50'>
              <a
                className='dk-button'
                href='https://www.figma.com/file/FlLYzqxpgKOAGTLZglkV1e/EBL-Project?type=design&node-id=12%3A8751&mode=design&t=jcpzsw9boYpQdq1v-1'
                target='_blank'
                rel='noreferrer'
              >
                <span>Figma: Final Design</span>
              </a>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 7, offset: 1 }} className={`${Projectpage.order1}`}>
          <Row>
            <Col xs={6} id='detail-img-trigger-3'>
              <div style={{ padding: '8px' }}>
                <StaticImage
                  src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712617164/English%20Book%20Ladder/wireframe_jony11.webp'
                  placeholder='blurred'
                  alt='design system img'
                  className={Projectpage.detailImg}
                />
              </div>
            </Col>
            <Col xs={6} id='detail-img-trigger-3'>
              <div style={{ padding: '8px' }}>
                <StaticImage
                  src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712617165/English%20Book%20Ladder/hi-fi-design_vzlgbw.webp'
                  placeholder='blurred'
                  alt='design system img'
                  className={Projectpage.detailImg}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default DesignRow;
