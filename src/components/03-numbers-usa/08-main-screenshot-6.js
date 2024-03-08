import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const MainScreenshot6 = () => {
  return (
    <>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709845534/NUSA/07-action-board-cropped_lqyxna.webp'
        alt='main screenshot img'
        className={Projectpage.mainScreenshot}
        id='main-screenshot1'
      />
    </>
  );
};

export default MainScreenshot6;
