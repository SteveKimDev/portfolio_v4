import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const Project04 = () => {
  return (
    <>
      <Link to='/'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1707863337/ebl/ebl-cover-img_kf2ect.webp'
          alt='project cover img'
          className={Homepage.projectImg}
        />
        <div className={Homepage.projectTitle}>
          <h2>English Book Ladder</h2>
          <p>UX/UI Design | Development</p>
        </div>
      </Link>
    </>
  );
};

export default Project04;
