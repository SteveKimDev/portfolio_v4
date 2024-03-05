import * as React from 'react';
import Layout from '../layout/layout';
import Seo from '../layout/seo';
import ProjectIntro from '../components/03-numbers-usa-web/01-project-intro';
import ScreenshotSection from '../components/03-numbers-usa-web/02-screenshot-section';

const NumbersUSAWebsite = () => {
  return (
    <Layout>
      <Seo title='NumbersUSA Website Project' />
      <ProjectIntro />
      <ScreenshotSection />
    </Layout>
  );
};

export default NumbersUSAWebsite;
