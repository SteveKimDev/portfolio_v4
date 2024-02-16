import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const AboutIntroImg03 = () => {
  return (
    <div className={Aboutpage.aboutIntroImgDiv} data-speed='1.40'>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1708030700/Portfolio%20website/04-transparent_vxazqz.webp'
        alt='About Intro img'
        className={Aboutpage.aboutIntroImg}
      />
    </div>
  );
};

export default AboutIntroImg03;
