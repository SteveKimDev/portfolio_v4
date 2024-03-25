import * as React from 'react';

import UIDesign from './02e-ui-design';
import WebsiteAuditRow from './02a-website-audit-row';
import InfoArchRow from './02b-info-arch-row';
import ContentMigrationRow from './02c-content-migration-row';
import CaseStudyBtn from '../00-reusable-components/case-study-btn';
import NextProject from '../00-reusable-components/next-project';

const DetailsSection = () => {
  return (
    <div>
      {/* row 1 */}
      <UIDesign />

      {/* row 2 */}
      <WebsiteAuditRow />

      {/* row 3 */}
      <InfoArchRow />

      {/* row 4 */}
      <ContentMigrationRow />

      {/* row 5 */}
      <CaseStudyBtn url='https://docs.google.com/presentation/d/1G3MKPudSXzFiXY00n2BWBLPtNXppffGQc-vUsreJHFw/edit?usp=sharing' />

      {/* row 6 */}
      <NextProject />
    </div>
  );
};

export default DetailsSection;
