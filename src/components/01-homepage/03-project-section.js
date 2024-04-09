import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Project01 from './03a-project01';
import Project02 from './03b-project02';
import Project03 from './03c-project03';
import Project04 from './03d-project04';
// // import Project05 from './03e-project05';

import * as Homepage from '../../styles/homepage.module.css';

const ProjectSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // section title animation
    gsap.fromTo(
      [`#project-section-title`],
      { y: 36, opacity: 0, height: 0 },
      {
        y: 0,
        opacity: 1,
        height: 'auto',
        duration: 1,
        ease: 'power1.outIn',
        scrollTrigger: {
          trigger: '#selected-projects-title-trigger',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // section title animation
    gsap.fromTo(
      [`.scroll-item`],
      { opacity: 0 },
      {
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: 'none',

        scrollTrigger: {
          trigger: '.scroll-wrap',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
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
  }, []);
  return (
    <div
      id='project-section'
      className={`m-top-200 horizontal-scroll-container ${Homepage.projectSection}`}
    >
      <div
        id='selected-projects-title-trigger'
        className='section-title-div-2line'
      >
        <h1
          id='project-section-title'
          className='gradient-color section-title text-align-center'
        >
          Selected Projects
        </h1>
      </div>
      <div className={`scroll-wrap m-top-50 ${Homepage.scrollWrap}`}>
        {/* item 1 */}
        <div className={`scroll-item ${Homepage.scrollItem}`}>
          <Project01 />
        </div>

        {/* item 2*/}
        <div className={`scroll-item ${Homepage.scrollItem}`}>
          <Project04 />
        </div>

        {/* item 3 */}
        <div className={`scroll-item ${Homepage.scrollItem}`}>
          <Project02 />
        </div>

        {/* item 4 */}
        <div className={`scroll-item ${Homepage.scrollItem}`}>
          <Project03 />
        </div>

        {/* item 5 */}
        {/* <div className={`${Homepage.scrollItem`} >
       <Project05 />
       </div> */}
      </div>
    </div>
  );
};

export default ProjectSection;
