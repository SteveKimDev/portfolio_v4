import * as React from 'react';

// Component Imports
import Layout from '../layout/layout';
import Seo from '../layout/seo';

// gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
  return (
    <Layout>
      <Seo title='Product Designer' />
      Hello World
    </Layout>
  );
};

export default IndexPage;
