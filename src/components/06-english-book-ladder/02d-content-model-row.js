import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

// copy left col and image right col row
const ContentModelRow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // fadeInUp animation
    gsap.fromTo(
      [`#detail-trigger-4`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-trigger-4`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      [`#detail-img-trigger-4`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-img-trigger-4`,
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
          lg={6}
          id='detail-img-trigger-4'
          className={`${Projectpage.order2}`}
        >
          <div>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712619115/English%20Book%20Ladder/card_assembly_xhl1rc.webp'
              placeholder='blurred'
              alt='persona img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
        <Col
          lg={{ span: 5, offset: 1 }}
          id='detail-trigger-4'
          className={`relative md-m-bottom-50 ${Projectpage.order1}`}
        >
          <div
            className={`${Projectpage.detailDiv} ${Projectpage.detailDivCenterAlign}`}
          >
            <h2 className={`gradient-color`}>Content Model Design</h2>

            <p>
              To effectively outline the content model's structure and guide the
              design and development of components and layouts in Contentful's
              CMS user interface, we focused on:
            </p>
            <ul>
              <li>
                Creating an Entity Relationship Diagram (ERD)to visually
                represent the structure of the content model.
              </li>
              <li>
                Using the ERD to inform the design and development process,
                ensuring a cohesive and intuitive user interface for the website
                and Contentful's customizable platform.
              </li>
            </ul>
            {/* <div className='m-top-50'>
              <a
                className='dk-button'
                href='https://www.figma.com/file/FlLYzqxpgKOAGTLZglkV1e/EBL-Project?type=design&node-id=1%3A70&mode=design&t=jcpzsw9boYpQdq1v-1'
                target='_blank'
                rel='noreferrer'
              >
                <span>Figma: Content Model</span>
              </a>
            </div> */}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ContentModelRow;
