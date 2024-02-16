import * as React from 'react';

import Layout from '../layout/layout';
import Seo from '../layout/seo';
import AboutIntroSection from '../components/02-about/01-about-intro-section';
import ApproachSection from '../components/02-about/02-approach-section';
import SkillsSection from '../components/02-about/03-skills-section';

const About = () => {
  return (
    <Layout>
      <Seo title='Steve Kim - Product Designer' />
      <AboutIntroSection />
      <ApproachSection />
      <SkillsSection />
    </Layout>
  );
};

export default About;
