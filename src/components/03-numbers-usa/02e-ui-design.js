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
          document.querySelector('.horizontal-scroll-container').clientWidth
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
        className={`m-top-200 lg-m-top-100 horizontal-scroll-container ${Projectpage.horizontalScrollContainer}`}
      >
        <Col sm={12}>
          <Col
            xl={{ span: 6, offset: 3 }}
            lg={{ span: 10, offset: 1 }}
            id='detail-trigger-5'
          >
            <section className={` ${Projectpage.detailDiv}`}>
              <h2 className={`gradient-color text-align-center`}>
                Project Summary
              </h2>
              <p className={`text-align-center`}>
                A non-profit political organization, recognized the need for a
                website and CMS upgrade, encompassing a website redesign,
                improved information architecture for page navigation and
                content organization, as well a mobile app platform which
                focused on participation in political initiatives.
              </p>
            </section>
          </Col>

          <Col sm={12} className={`m-top-50`}>
            <div className={`scroll-wrap ${Projectpage.scrollWrap}`}>
              {/* item 1 */}
              <div className={`scroll-item ${Projectpage.scrollItem}`}>
                <video autoPlay muted playsInline ref={addVideoRef}>
                  <source
                    src='https://res.cloudinary.com/stevekim/video/upload/v1710450926/NUSA/video-4_ujnvke.mp4'
                    type='video/mp4'
                  />
                </video>
              </div>

              {/* item 2 */}
              <div className={`scroll-item ${Projectpage.scrollItem}`}>
                <video autoPlay muted playsInline ref={addVideoRef}>
                  <source
                    src='https://res.cloudinary.com/stevekim/video/upload/v1710450907/NUSA/video-2_dbodau.mp4'
                    type='video/mp4'
                  />
                </video>
              </div>

              {/* item 3 */}
              <div className={`scroll-item ${Projectpage.scrollItem}`}>
                <video autoPlay muted playsInline ref={addVideoRef}>
                  <source
                    src='https://res.cloudinary.com/stevekim/video/upload/v1710450895/NUSA/video-1_a84ena.mp4'
                    type='video/mp4'
                  />
                </video>
              </div>

              {/* item 4 */}
              <div className={`scroll-item ${Projectpage.scrollItem}`}>
                <video autoPlay muted playsInline ref={addVideoRef}>
                  <source
                    src='https://res.cloudinary.com/stevekim/video/upload/v1710450916/NUSA/video-3_xkqo1d.mp4'
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
