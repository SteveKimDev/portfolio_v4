import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const Project05 = () => {
  return (
    <>
      <Link to='/'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1707864005/natalie/natalie-cover-img-1_conozr.webp'
          alt='project cover img'
          className={Homepage.projectImg}
        />
        <h2 className={Homepage.projectTitle}>Professional Portfolio</h2>
      </Link>
    </>
  );
};

export default Project05;
