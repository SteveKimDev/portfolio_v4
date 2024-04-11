import * as React from 'react';

import UIDesign from './02e-ui-design';
import ResearchRow from './02a-research-row';
import DesignSystemRow from './02b-design-system-row';
import WebsiteDesignRow from './02d-website-design-row';
import MobileAppDesignRow from './02d-mobile-app-design-row';
import LaunchRow from './02f-launch-row';
import CaseStudyBtn from '../00-reusable-components/case-study-btn';
import NextProject from '../00-reusable-components/next-project';

const DetailsSection = () => {
  return (
    <div>
      {/* row 1 */}
      <UIDesign />

      {/* row 2 */}
      <ResearchRow />

      {/* row 3 */}
      <DesignSystemRow />

      {/* row 4 */}
      <WebsiteDesignRow />

      {/* row 5 */}
      <MobileAppDesignRow />

      {/* row 6 */}
      <LaunchRow />

      {/* row 7 */}
      <CaseStudyBtn url='https://docs.google.com/presentation/d/1H8ExaKWMFt2kcBFDcYQ1BIUUjDbKty-J0s6gln4J2Ms/edit#slide=id.p' />

      {/* row 8 */}
      <NextProject />
    </div>
  );
};

export default DetailsSection;
