import * as React from 'react';

import ResearchRow from './02a-research-row';
import InfoArchRow from './02b-info-arch-row';
import LayoutTemplateRow from './02c-layout-template-row';
import DesignSystemRow from './02d-design-system-row';
import UIDesign from './02e-ui-design';

const DetailsSection = () => {
  return (
    <section>
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

      <div className='text-align-center m-top-100'>
        <a
          href='https://docs.google.com/presentation/d/1W6wREAbKEIhWbmRACw8QzHFqug-P_XRSix1djH5m4pw/edit?usp=sharing'
          target='_blank'
          rel='noreferrer'
          className='dk-button'
        >
          <span>View Full Case Study</span>
        </a>
      </div>
    </section>
  );
};

export default DetailsSection;
