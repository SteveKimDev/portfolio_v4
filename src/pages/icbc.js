import * as React from 'react';
import Layout from '../layout/layout';
import Seo from '../layout/seo';
import HeroSection from '../components/04-icbc/01-hero-section';
import DetailsSection from '../components/04-icbc/02-detail-section';

const ICBC = () => {
  return (
    <Layout>
      <Seo title='ICBC Website Replatform &amp; Content Migration Project' />
      <HeroSection />
      <DetailsSection />
    </Layout>
  );
};

export default ICBC;
