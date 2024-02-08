import * as React from 'react';

// Component Imports
import Layout from '../layout/layout';
import Seo from '../layout/seo';
import HeroSection from '../components/01-homepage/01-hero-section';
import AboutSection from '../components/01-homepage/02-about-section';
import ProjectSection from '../components/01-homepage/03-project-section';

// gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
  return (
    <Layout>
      <Seo title='Product Designer' />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </Layout>
  );
};

export default IndexPage;
