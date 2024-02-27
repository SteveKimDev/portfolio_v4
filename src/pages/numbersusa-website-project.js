import * as React from 'react';
import Layout from '../layout/layout';
import Seo from '../layout/seo';
import ProjectIntro from '../components/03-numbers-usa-web/01-project-intro';
import ImageScreenshots from '../components/03-numbers-usa-web/02-image-screenshots';

const NumbersUSAWebsite = () => {
  return (
    <Layout>
      <Seo title='NumbersUSA Website Project' />
      <ProjectIntro />
      <ImageScreenshots />
    </Layout>
  );
};

export default NumbersUSAWebsite;
