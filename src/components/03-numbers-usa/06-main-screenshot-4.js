import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const MainScreenshot4 = () => {
  return (
    <>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709845448/NUSA/04-basic-cropped_abr6q6.webp'
        alt='main screenshot img'
        className={Projectpage.mainScreenshot}
        id='main-screenshot1'
      />
    </>
  );
};

export default MainScreenshot4;
