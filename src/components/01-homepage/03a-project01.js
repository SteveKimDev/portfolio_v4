import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const Project01 = () => {
  return (
    <>
      <Link to='/'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1707861421/NumbersUSA-web/NUSA_cover_img_n9bajj.webp'
          alt='project cover img'
          className={Homepage.projectImg}
        />
        <h2 className={Homepage.projectTitle}>
          NumbersUSA
          <br />
          Website
        </h2>
      </Link>
    </>
  );
};

export default Project01;