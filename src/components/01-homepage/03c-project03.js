import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const Project03 = () => {
  return (
    <>
      <Link to='/first-string-digital'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710457880/FSD/cover-image_jwrt3s.webp'
          placeholder='blurred'
          alt='project cover img'
          className={Homepage.projectImg}
        />
        <div className={Homepage.projectTitle}>
          <h2>First String Digital</h2>
          <p>SasS Website Feature</p>
        </div>
      </Link>
    </>
  );
};

export default Project03;
