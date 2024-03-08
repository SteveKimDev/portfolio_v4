import * as React from 'react';

import ResearchRow from './02a-research-row';
import InfoArchRow from './02b-info-arch-row';
import LayoutTemplateRow from './02c-layout-template-row';
import DesignSystemRow from './02d-design-system-row';

const DetailsSection = () => {
  return (
    <section>
      {/* row 1 */}
      <ResearchRow />

      {/* row 2 */}
      <InfoArchRow />

      {/* row 3 */}
      <LayoutTemplateRow />

      {/* row 4 */}
      <DesignSystemRow />
    </section>
  );
};

export default DetailsSection;
