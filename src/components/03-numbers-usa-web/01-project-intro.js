import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { Row, Col } from 'react-bootstrap';

import IntroVideo from './01a-intro-video';

import * as Projectpage from '../../styles/project.module.css';

const ProjectIntro = () => {
  useEffect(() => {
    // fade in animation
    gsap.fromTo(
      `.${Projectpage.introInformationDiv}`,
      {
        y: 36,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.5,
      }
    );
  }, []);
  return (
    <section className={Projectpage.introSection}>
      <Row className={Projectpage.introRow1}>
        <Col xs={12}>
          <h1
            id='nusa-web-intro-title'
            className='gradient-color section-title text-align-center'
          >
            NumbersUSA
          </h1>
          <p id='nusa-web-intro-description' className='text-align-center'>
            Website Redesign &amp; Information Architecture
          </p>
        </Col>
      </Row>

      <Row className={Projectpage.introRow2}>
        <Col xl={5} className={Projectpage.introInfoCol}>
          <div className={Projectpage.introInformationDiv}>
            <h2 className={`gradient-color`}>Role</h2>
            <p>Senior UX Product Designer</p>
          </div>
          <div className={Projectpage.introInformationDiv}>
            <h2 className={`gradient-color`}>Challenges</h2>
            <p>
              Website with an outdated design that did not resonate with younger
              audiences, confusing navigation, disorganized content, and
              inconsistent layout presentation.
            </p>
          </div>
          <div className={Projectpage.introInformationDiv}>
            <h2 className={`gradient-color`}>Objectives</h2>
            <p>
              Update website design to appeal a younger demographic while
              retaining its current audience. Improve navigation for enhanced
              user experience, restructure content, and define page layout
              design.
            </p>
          </div>
        </Col>
        <Col xl={7} className={Projectpage.introVidCol}>
          <IntroVideo />
        </Col>
      </Row>
    </section>
  );
};

export default ProjectIntro;
