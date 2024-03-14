import * as React from 'react';

import UIDesign from './02e-ui-design';
import WebsiteAuditRow from './02a-website-audit-row';
import InfoArchRow from './02b-info-arch-row';
import ContentMigrationRow from './02c-content-migration-row';
import CaseStudyBtn from '../00-reusable-components/case-study-btn';

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
      <CaseStudyBtn url='https://docs.google.com/presentation/d/1muaT9BYH1FrjtLbw_g3tJQS3Q2B8yioo2KWiXu2eVUo/edit?usp=sharing' />
    </div>
  );
};

export default DetailsSection;