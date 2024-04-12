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
      [`#detail-trigger-6`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-trigger-6`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      [`#detail-img-trigger-6`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-img-trigger-6`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section>
      <Row className={`m-top-200 lg-m-top-100 `}>
        <Col
          xl={{ span: 6, offset: 3 }}
          lg={{ span: 10, offset: 1 }}
          id='detail-trigger-6'
          className={` m-bottom-50`}
        >
          <div className={`${Projectpage.detailDiv} `}>
            <h2 className={`gradient-color`}>Launch Successes</h2>

            <p>
              After 7 months of discovering the issues, defining our objectives,
              designing solutions, and developing our product. We first launched
              the website and 4 months later we launched the mobile app for iOS
              and Android.
            </p>
            <ul>
              <li>
                The project achieved several notable successes, foremost among
                them being the successful transformation of NumbersUSA's website
                and the introduction of the sister platform the mobile
                applications.
              </li>
              <li>
                Increased user sign-up. Achieved to obtain over 500 new signups
                within a month post-launch.
              </li>
              <li>
                The introduction of a comprehensive content organization system
                made relevant information easily accessible, enhancing user
                experience.
              </li>
              <li>
                Additionally, the streamlined participation in the political
                process, improved donations integration, and mobile app
                gamification feature contributed to a more effective online
                platforms.
              </li>
            </ul>
          </div>
        </Col>
        <Col xl={12} id='detail-img-trigger-6'>
          <div>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712876687/NUSA/cover-image_gqfnzi.webp'
              placeholder='blurred'
              alt='mobile app img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default LaunchRow;
