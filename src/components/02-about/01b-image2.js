import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const AboutIntroImg02 = () => {
  return (
    <div className={`${Aboutpage.aboutIntroImgDiv}`} data-speed='1.25'>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1708030700/Portfolio%20website/03-transparent_ocotcl.webp'
        placeholder='blurred'
        alt='About Intro img'
        className={Aboutpage.aboutIntroImg}
      />
    </div>
  );
};

export default AboutIntroImg02;
