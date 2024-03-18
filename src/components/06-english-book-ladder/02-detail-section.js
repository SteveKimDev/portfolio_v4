import * as React from 'react';

import PainPoints from './02a-pain-points-row';
import UIDesign from './02e-ui-design';
import CaseStudyBtn from '../00-reusable-components/case-study-btn';
import PersonasRow from './02b-personas-row';
import WireframeDesignRow from './02c-wireframe-design';
import ResponsiveRow from './02d-responsive-row';

const DetailsSection = () => {
  return (
    <div>
      {/* row 1 */}
      <UIDesign />

      {/* row 2 */}
      <PainPoints />

      {/* row 3 */}
      <PersonasRow />

      {/* row 4 */}
      <WireframeDesignRow />

      {/* row 5 */}
      <ResponsiveRow />

      {/* row 6 */}
      <CaseStudyBtn url='https://docs.google.com/presentation/d/1oeB2qXtVFANFCyhGpUswBMU1nVrK8pjv7wN9XGF8ibE/edit?usp=sharing' />
    </div>
  );
};

export default DetailsSection;
