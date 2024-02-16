import * as React from 'react';

import Layout from '../layout/layout';
import Seo from '../layout/seo';
import AboutIntroSection from '../components/02-about/01-about-intro-section';
import ApproachSection from '../components/02-about/02-approach-section';

const About = () => {
  return (
    <Layout>
      <Seo title='Steve Kim - Product Designer' />
      <AboutIntroSection />
      <ApproachSection />
    </Layout>
  );
};

export default About;
