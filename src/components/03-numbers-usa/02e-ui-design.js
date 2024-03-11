import * as React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';

import * as Projectpage from '../../styles/project.module.css';

const UIDesign = () => {
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

    const process = document.querySelector('.horizontal-scroll-container');
    if (typeof process != 'undefined' && process != null) {
      let sections = gsap.utils.toArray('.scroll-item');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: process,
          markers: false,
          scrub: 1,
          pin: true,
          snap: 1 / (sections.length - 1),
          end: () =>
            '+=' +
            document.querySelector('.horizontal-scroll-container').offsetWidth,
        },
      });
    }

    // Intersection Observer for auto-playing videos
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      {
        threshold: 1.0, // 100% of the item is visible
      }
    );

    document.querySelectorAll('.scroll-item video').forEach((video) => {
      observer.observe(video);
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Row className={`m-top-100`}>
      <Col
        xl={{ span: 6, offset: 3 }}
        lg={{ span: 8, offset: 2 }}
        id='detail-trigger-5'
      >
        <div className={` ${Projectpage.detailDiv}`}>
          <h2 className={`gradient-color text-align-center`}>
            Information Architecture &amp; Content Strategy
          </h2>
          <p className={`text-align-center`}>
            Refining the information architecture with a detailed sitemap
            enhances intuitive navigation and ensures content is easily
            discoverable.
          </p>
        </div>
      </Col>

      <Col sm={12}>
        <div
          className={`horizontal-scroll-container ${Projectpage.horizontalScrollContainer}`}
        >
          <div className={`scroll-wrap ${Projectpage.scrollWrap}`}>
            {/* item 1 */}
            <div className={`scroll-item ${Projectpage.scrollItem}`}>
              <video autoPlay muted playsInline>
                <source
                  src='https://res.cloudinary.com/stevekim/video/upload/v1710193302/NUSA/video-4_vevtoy.mp4'
                  type='video/mp4'
                />
              </video>
            </div>

            {/* item 2 */}
            <div className={`scroll-item ${Projectpage.scrollItem}`}>
              <video autoPlay muted playsInline>
                <source
                  src='https://res.cloudinary.com/stevekim/video/upload/v1710193289/NUSA/video-2_emqtwg.mp4'
                  type='video/mp4'
                />
              </video>
            </div>

            {/* item 3 */}
            <div className={`scroll-item ${Projectpage.scrollItem}`}>
              <video autoPlay muted playsInline>
                <source
                  src='https://res.cloudinary.com/stevekim/video/upload/v1710193278/NUSA/video-1_nj26s3.mp4'
                  type='video/mp4'
                />
              </video>
            </div>

            {/* item 4 */}
            <div className={`scroll-item ${Projectpage.scrollItem}`}>
              <video autoPlay muted playsInline>
                <source
                  src='https://res.cloudinary.com/stevekim/video/upload/v1710193294/NUSA/video-3_doh6fu.mp4'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default UIDesign;
