import * as React from 'react';
import Layout from '../layout/layout';
import Seo from '../layout/seo';
import HeroSection from '../components/05-first-string-digital/01-hero-section';
// import DetailsSection from '../components/05-first-string-digital/02-detail-section';

const FirstStringDigtial = () => {
  return (
    <Layout>
      <Seo title='First String Digital - Signup Process' />
      <HeroSection />
      {/* <DetailsSection /> */}
    </Layout>
  );
};

export default FirstStringDigtial;
