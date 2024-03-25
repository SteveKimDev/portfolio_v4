import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const Project02 = () => {
  return (
    <>
      <Link to='/icbc'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710457235/ICBC/ICBC-cover-image_jguntb.webp'
          placeholder='blurred'
          alt='project cover img'
          className={Homepage.projectImg}
        />
        <div className={Homepage.projectTitle}>
          <h2>ICBS</h2>
          <p>Website Replatform &amp; CMS</p>
        </div>
      </Link>
    </>
  );
};

export default Project02;
