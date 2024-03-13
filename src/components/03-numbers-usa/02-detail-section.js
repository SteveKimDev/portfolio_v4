import * as React from 'react';

import ResearchRow from './02a-research-row';
import InfoArchRow from './02b-info-arch-row';
import LayoutTemplateRow from './02c-layout-template-row';
import DesignSystemRow from './02d-design-system-row';
import UIDesign from './02e-ui-design';
import CaseStudyBtn from '../00-reusable-components/case-study-btn';

const DetailsSection = () => {
  return (
    <div>
      {/* row 1 */}
      <UIDesign />

      {/* row 2 */}
      <ResearchRow />

      {/* row 3 */}
      <InfoArchRow />

      {/* row 4 */}
      <LayoutTemplateRow />

      {/* row 5 */}
      <DesignSystemRow />

      {/* row 6 */}
      <CaseStudyBtn url='https://docs.google.com/presentation/d/1W6wREAbKEIhWbmRACw8QzHFqug-P_XRSix1djH5m4pw/edit?usp=sharing' />
    </div>
  );
};

export default DetailsSection;
