import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const AboutIntroImg04 = () => {
  return (
    <div className={Aboutpage.aboutIntroImgDiv} data-speed='1.20'>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1708030703/Portfolio%20website/01-transparent_mducih.webp'
        alt='About Intro img'
        className={Aboutpage.aboutIntroImg}
      />
    </div>
  );
};

export default AboutIntroImg04;
