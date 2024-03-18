import * as React from 'react';
import Layout from '../layout/layout';
import Seo from '../layout/seo';
import HeroSection from '../components/06-english-book-ladder/01-hero-section';
import DetailsSection from '../components//06-english-book-ladder/02-detail-section';

const EnglishBookLadder = () => {
  return (
    <Layout>
      <Seo title='English Book Ladder Website Redesign' />
      <HeroSection />
      <DetailsSection />
    </Layout>
  );
};

export default EnglishBookLadder;
