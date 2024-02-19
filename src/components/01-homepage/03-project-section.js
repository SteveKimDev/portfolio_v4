import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Project01 from './03a-project01';
import Project02 from './03b-project02';
import Project03 from './03c-project03';
import Project04 from './03d-project04';
import Project05 from './03e-project05';

import * as Homepage from '../../styles/homepage.module.css';

const ProjectSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // section title animation
    gsap.fromTo(
      [`#project-section-title`],
      { y: '36px', opacity: 0, height: 0 },
      {
        y: '0px',
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

    // projects scroll animation
    const sections = gsap.utils.toArray(`.${Homepage.projectDiv}`);

    sections.forEach((section) => {
      const text = section.querySelector(`.${Homepage.projectTitle}`);
      const image = section.querySelector(`.${Homepage.projectImg}`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scrub: 1,
          start: 'top 90%',
          end: 'bottom 30%',
        },
      });

      tl.from(image, {
        scale: 0.5,
        rotate: 8,
        opacity: 0,
        ease: 'power1.inOut',
        duration: 1,
      })
        .from(text, {
          scale: 0,
          opacity: 0,
          y: 100,
          duration: 1,
        })
        .to(text, { scale: 1, opacity: 0, y: -100, ease: 'power1.inOut' })
        .to(image, {
          scale: 0.5,
          rotate: -8,
          opacity: 0,
          ease: 'power1.inOut',
        });
    });
  }, []);
  return (
    <section id='project-section' className={Homepage.projectSection}>
      <div id='selected-projects-title-trigger'>
        <h1
          id='project-section-title'
          className='gradient-color section-title text-align-center'
        >
          Selected Projects
        </h1>
      </div>
      <div className={`${Homepage.projectDiv}`}>
        <Project01 />
      </div>
      <div className={`${Homepage.projectDiv}`}>
        <Project02 />
      </div>
      <div className={`${Homepage.projectDiv}`}>
        <Project03 />
      </div>
      <div className={`${Homepage.projectDiv}`}>
        <Project04 />
      </div>
      <div className={`${Homepage.projectDiv}`}>
        <Project05 />
      </div>
    </section>
  );
};

export default ProjectSection;
