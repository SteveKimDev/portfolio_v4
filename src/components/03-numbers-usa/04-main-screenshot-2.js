import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const MainScreenshot2 = () => {
  return (
    <>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709845416/NUSA/01-Homepage-cropped_oso5iv.webp'
        alt='main screenshot img'
        className={Projectpage.mainScreenshot}
        id='main-screenshot1'
      />
    </>
  );
};

export default MainScreenshot2;
