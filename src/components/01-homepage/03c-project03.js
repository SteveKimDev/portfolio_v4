import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const Project03 = () => {
  return (
    <>
      <Link to='/'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1707862171/FSD%20Sign%20Up/FDS_cover_image_gioiqv.webp'
          placeholder='blurred'
          alt='project cover img'
          className={Homepage.projectImg}
        />
        <div className={Homepage.projectTitle}>
          <h2>First String Digital</h2>
          <p>UX/UI Design | Development</p>
        </div>
      </Link>
    </>
  );
};

export default Project03;
