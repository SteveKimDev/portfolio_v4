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
          placeholder='blurred'
          alt='project cover img'
          className={Homepage.projectImg}
        />
        <div className={Homepage.projectTitle}>
          <h2>ICBS</h2>
          <p>Information Architecture | UX Design</p>
        </div>
      </Link>
    </>
  );
};

export default Project02;
