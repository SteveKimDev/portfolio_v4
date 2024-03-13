import * as React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';

import * as Projectpage from '../../styles/project.module.css';

const UIDesign = () => {
  const videoRefs = useRef([]);

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

    // horizontal scroll animation
    gsap.to('.scroll-wrap', {
      x: () =>
        -(
          document.querySelector('.scroll-wrap').scrollWidth -
          document.documentElement.clientWidth
        ) + 'px',
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-scroll-container',
        pin: true,
        scrub: 1,
        start: 'center center',
        end: 'bottom top',
      },
    });

    // Intersection Observer for videos
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
        threshold: 0.9, // 100% of the target's visibility
      }
    );

    // Capture the current refs in a variable
    const currentRefs = videoRefs.current;

    currentRefs.forEach((video) => observer.observe(video));

    // Use the captured refs for cleanup
    return () => {
      currentRefs.forEach((video) => observer.unobserve(video));
    };
  }, []);

  // Function to add video ref
  const addVideoRef = (el) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  return (
    <>
      <Row
        className={`m-top-100 horizontal-scroll-container ${Projectpage.horizontalScrollContainer}`}
      >
        <Col sm={12}>
          <Col
            xl={{ span: 6, offset: 3 }}
            lg={{ span: 10, offset: 1 }}
            id='detail-trigger-5'
          >
            <section className={` ${Projectpage.detailDiv}`}>
              <h2 className={`gradient-color text-align-center`}>
                Leading The Information Architecture Efforts
              </h2>
              <p className={`text-align-center`}>
                As the Information Architect on the ICBC project, my role
                involved conducting a thorough website content audit, designing
                the sitemap and navigation, identifying essential page templates
                and components, and engaging in Contentful content modeling and
                migration processes. Additionally, I provided Contentful
                training, implemented User Acceptance Testing (UAT) processes,
                and collaborated closely with the development team to ensure a
                cohesive and user-friendly digital experience.
              </p>
            </section>
          </Col>

          <Col sm={12} className={`m-top-50`}>
            <div className={`scroll-wrap ${Projectpage.scrollWrap}`}>
              {/* item 1 */}
              <div className={`scroll-item ${Projectpage.scrollItem}`}>
                <video autoPlay muted playsInline ref={addVideoRef}>
                  <source
                    src='https://res.cloudinary.com/stevekim/video/upload/v1710356912/ICBC/video-1_hyawue.mp4'
                    type='video/mp4'
                  />
                </video>
              </div>

              {/* item 2 */}
              <div className={`scroll-item ${Projectpage.scrollItem}`}>
                <video autoPlay muted playsInline ref={addVideoRef}>
                  <source
                    src='https://res.cloudinary.com/stevekim/video/upload/v1710356923/ICBC/video-2_rjkaf7.mp4'
                    type='video/mp4'
                  />
                </video>
              </div>

              {/* item 3 */}
              <div className={`scroll-item ${Projectpage.scrollItem}`}>
                <video autoPlay muted playsInline ref={addVideoRef}>
                  <source
                    src='https://res.cloudinary.com/stevekim/video/upload/v1710356928/ICBC/video-3_h4dsyv.mp4'
                    type='video/mp4'
                  />
                </video>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default UIDesign;
