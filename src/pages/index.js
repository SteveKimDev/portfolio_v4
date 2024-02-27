import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Component Imports
import Layout from '../layout/layout';
import Seo from '../layout/seo';
import HeroSection from '../components/01-homepage/01-hero-section';
import AboutSection from '../components/01-homepage/02-about-section';
import ProjectSection from '../components/01-homepage/03-project-section';

const IndexPage = () => {
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // hero section fades out
    gsap
      .timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom 70%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: false,
        },
      })
      .to(heroSectionRef.current, {
        y: '-100px',
        autoAlpha: 0,
        ease: 'power1.outIn',
      });

    // about section fades in
    gsap.from(aboutSectionRef.current, {
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: 'top 80%',
        end: 'top top',
        toggleActions: 'play none none reset',
        scrub: true,
      },
      autoAlpha: 0,
      ease: 'power1.outIn',
    });

    // about section fades out
    gsap
      .timeline({
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: 'top top',
          end: 'bottom 70%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: false,
        },
      })
      .to(aboutSectionRef.current, {
        autoAlpha: 0,
        ease: 'power1.outIn',
      });
  }, []);

  return (
    <Layout>
      <Seo title='Product Designer' />
      <div ref={heroSectionRef}>
        <HeroSection />
      </div>
      <div ref={aboutSectionRef}>
        <AboutSection />
      </div>
      <ProjectSection />
    </Layout>
  );
};

export default IndexPage;
