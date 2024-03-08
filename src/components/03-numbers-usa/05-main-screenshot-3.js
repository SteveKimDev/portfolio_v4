import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const MainScreenshot3 = () => {
  return (
    <>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709845422/NUSA/02-primary-cropped_wxmix3.webp'
        alt='main screenshot img'
        className={Projectpage.mainScreenshot}
        id='main-screenshot1'
      />
    </>
  );
};

export default MainScreenshot3;
