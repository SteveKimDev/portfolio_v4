import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const AboutIntroImg01 = () => {
  return (
    <div className={Aboutpage.aboutIntroImgDiv} data-speed='1.45'>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1708030704/Portfolio%20website/02-transparent_qsakrg.webp'
        placeholder='blurred'
        alt='About Intro img'
        className={Aboutpage.aboutIntroImg}
      />
    </div>
  );
};

export default AboutIntroImg01;
