import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const MainScreenshot5 = () => {
  return (
    <>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709845529/NUSA/06-static-cropped_a3ywr0.webp'
        alt='main screenshot img'
        className={Projectpage.mainScreenshot}
        id='main-screenshot1'
      />
    </>
  );
};

export default MainScreenshot5;
