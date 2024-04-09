import * as React from 'react';

import UIDesign from './02e-ui-design';
import CaseStudyBtn from '../00-reusable-components/case-study-btn';
import DiscoverRow from './02a-discover-row';
import DefnitionRow from './02b-definition-row';
import DesignRow from './02c-design-row';
import LaunchRow from './02d-project-launch-row';
import NextProject from '../00-reusable-components/next-project';
import ContentModelRow from './02d-content-model-row';

const DetailsSection = () => {
  return (
    <div>
      {/* row 1 */}
      <UIDesign />

      {/* row 2 */}
      <DiscoverRow />

      {/* row 3 */}
      <DefnitionRow />

      {/* row 4 */}
      <DesignRow />

      {/* row 5 */}
      <ContentModelRow />

      {/* row 6 */}
      <LaunchRow />

      {/* row 7 */}
      <CaseStudyBtn url='https://docs.google.com/presentation/d/160GIHCPp03TVDIijhg0q6gqVt3zRcFF1DGfR0ZgD5Vo/edit?usp=sharing' />

      {/* row 8 */}
      <NextProject />
    </div>
  );
};

export default DetailsSection;
