import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const Project01 = () => {
  return (
    <>
      <Link to='/numbersusa/'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709833959/NUSA/NUSA_cover_img_gt9mkf.webp'
          alt='project cover img'
          className={Homepage.projectImg}
        />
        <div className={Homepage.projectTitle}>
          <h2> NumbersUSA</h2>
          <p>UX/UI Design | Information Architecture | Content Strategy</p>
        </div>
      </Link>
    </>
  );
};

export default Project01;
