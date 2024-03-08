import * as React from 'react';
import Layout from '../layout/layout';
import Seo from '../layout/seo';
import HeroSection from '../components/03-numbers-usa/01-hero-section';
import DetailsSection from '../components/03-numbers-usa/02-detail-section';

const NumbersUSA = () => {
  return (
    <Layout>
      <Seo title='NumbersUSA Website/Mobile App Project' />
      <HeroSection />
      <DetailsSection />
    </Layout>
  );
};

export default NumbersUSA;
