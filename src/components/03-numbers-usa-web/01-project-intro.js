import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';

import IntroVideo from './01a-intro-video';

import * as Projectpage from '../../styles/project.module.css';

const ProjectIntro = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      [`.${Projectpage.introInfoDiv}`],
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',
        stagger: 0.5,

        scrollTrigger: {
          trigger: `#project-intro-card-trigger`,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section className={Projectpage.introSection}>
      <div>
        <h1
          className={`gradient-color section-title text-align-center ${Projectpage.sectionTitle}`}
        >
          NumbersUSA
        </h1>
      </div>
      <div className={Projectpage.introVidDiv}>
        <IntroVideo />
      </div>

      <Row id='project-intro-card-trigger'>
        <Col xl={3} lg={6} md={12} className={Projectpage.cardCol}>
          <div className={`card ${Projectpage.introInfoDiv}`}>
            <h2 className={`gradient-color`}>Summary</h2>
            <p>
              NumbersUSA, a non-profit political organization, recognized the
              need for a significant website upgrade, encompassing a fresh
              redesign, enhanced information architecture, content
              reorganization, and content migration from a Drupal platform to a
              WordPress platform.
            </p>
          </div>
        </Col>
        <Col xl={3} lg={6} md={12} className={Projectpage.cardCol}>
          <div className={`card ${Projectpage.introInfoDiv}`}>
            <h2 className={`gradient-color`}>Contributions</h2>
            <p>
              As the Senior Product Designer, I was responsible for UX research,
              content strategy, sitemap creation, user flow and page layout
              design, UI design with a focus on component functionality, UAT
              testing, and delivering comprehensive stakeholder presentations.
            </p>
          </div>
        </Col>
        <Col xl={3} lg={6} md={12} className={Projectpage.cardCol}>
          <div className={`card ${Projectpage.introInfoDiv}`}>
            <h2 className={`gradient-color`}>Challenges</h2>
            <p>
              Website with an outdated design that did not resonate with younger
              audiences, confusing navigation, disorganized content, and
              inconsistent layout presentation.
            </p>
          </div>
        </Col>
        <Col xl={3} lg={6} md={12} className={Projectpage.cardCol}>
          <div className={`card ${Projectpage.introInfoDiv}`}>
            <h2 className={`gradient-color`}>Objectives</h2>
            <p>
              Update website design to appeal a younger demographic while
              retaining its current audience. Improve navigation for enhanced
              user experience, restructure content, and define page layout
              design.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ProjectIntro;
