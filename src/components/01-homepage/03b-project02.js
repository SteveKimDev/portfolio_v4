import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const Project02 = () => {
  return (
    <>
      <Link to='/'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1707861375/ICBC/ICBC-cover-image_bdr73p.webp'
          alt='project cover img'
          className={Homepage.projectImg}
        />
        <h2 className={Homepage.projectTitle}>ICBS</h2>
      </Link>
    </>
  );
};

export default Project02;