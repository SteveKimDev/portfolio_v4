import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const AboutSectionImg = () => {
  return (
    <>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1706635236/Portfolio%20website/steve01_transparent_background-v4_iixkzk.webp'
        alt='About section img'
        className={Homepage.aboutSectionImg}
      />
    </>
  );
};

export default AboutSectionImg;
