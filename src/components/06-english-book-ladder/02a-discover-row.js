import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';

import * as Projectpage from '../../styles/project.module.css';

// title row + 4 card row
const DiscoverRow = () => {
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
      [`#detail-card-trigger-1`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-card-trigger-1`,
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
          xl={{ span: 6, offset: 3 }}
          lg={{ span: 8, offset: 2 }}
          id='detail-trigger-1'
        >
          <div className={` ${Projectpage.detailDiv}`}>
            <h2 className={`gradient-color text-align-center`}>
              Research and Discovery
            </h2>
            <p className={`text-align-center`}>
              To understand what our users needed and how best to serve those
              needs, I spent two weeks conducting research and gathering
              information. This process included methods like a site audit,
              competitive analysis, analysis of the website's past performance,
              and user interviews.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={6} className={Projectpage.cardCol}>
          <div
            className={`card ${Projectpage.cardDiv}`}
            id='detail-card-trigger-1'
          >
            <h2>Site Audit</h2>
            <p>
              I conducted a site audit to assess the website’s usability, ensure
              consistency across its design and content, and identify key areas
              for improvement.
            </p>
            <ul>
              <li>Layout was not mobile-responsive.</li>
              <li>Content was poorly organized and outdated.</li>
              <li>Mixing Korean and English language on the same pages.</li>
              <li>Images were not optimized.</li>
              <li>Design was outdated, and lacked consistency.</li>
            </ul>
          </div>
        </Col>
        <Col xl={6} className={Projectpage.cardCol}>
          <div
            className={`card ${Projectpage.cardDiv}`}
            id='detail-card-trigger-1'
          >
            <h2>Competitive Analysis</h2>
            <p>
              Conducted a competitive analysis of three competitors websites
              located within a 10-mile radius of EBL.
            </p>
            <ul>
              <li>
                Value Propositions: Clear service descriptions and philosophies.
              </li>
              <li>
                Weaknesses: Lack of mobile responsiveness, overwhelming content
                layout.
              </li>
              <li>
                Areas to Emulate: Updated class/program information with
                schedules and curriculums
              </li>
              <li>
                Improvement Opportunities: Websites exclusively in Korean,
                missing the opportunity to engage English-speaking parents.
              </li>
            </ul>
          </div>
        </Col>
        <Col xl={6} className={Projectpage.cardCol}>
          <div
            className={`card ${Projectpage.cardDiv}`}
            id='detail-card-trigger-1'
          >
            <h2>Analytic Analysis</h2>
            <p>
              Reviewing a period of 12 months, I compiled and analyzed data
              focusing on the website's performance, specifically tracking new
              user visits every quarter and the number of contacts originating
              from the website.
            </p>
            <ul>
              <li>Averaged 127 new user visits every quarter.</li>
              <li>Averaged 19 contacts originating from the website.</li>
            </ul>
          </div>
        </Col>
        <Col xl={6} className={Projectpage.cardCol}>
          <div
            className={`card ${Projectpage.cardDiv}`}
            id='detail-card-trigger-1'
          >
            <h2>User Interviews</h2>
            <p>Conducted during class sessions on a recorded Zoom call.</p>
            <p>
              <strong>Quotes:</strong>
            </p>
            <ul>
              <li>“Website is confusing”.</li>
              <li>“The website is not good for mobile phone”.</li>
              <li>“It looks old”.</li>
              <li>“The information is not helpful, and not organized”.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default DiscoverRow;
