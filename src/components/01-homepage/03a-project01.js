import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const Project01 = () => {
  return (
    <>
      <Link to='/numbersusa/'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710450294/NUSA/cover-img_sqj8bh.webp'
          alt='project cover img'
          placeholder='blurred'
          className={Homepage.projectImg}
        />
        <div className={Homepage.projectTitle}>
          <h2> NumbersUSA</h2>
          <p>UX/UI Design, Content Strategy, &amp; Content Model Design</p>
        </div>
      </Link>
    </>
  );
};

export default Project01;
