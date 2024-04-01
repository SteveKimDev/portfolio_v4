import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Homepage from '../../styles/homepage.module.css';

const Project04 = () => {
  return (
    <>
      <Link to='/english-book-ladder'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710788429/English%20Book%20Ladder/cover-img_fnsyqx.webp'
          placeholder='blurred'
          alt='project cover img'
          className={Homepage.projectImg}
        />
        <div className={Homepage.projectTitle}>
          <h2>English Book Ladder</h2>
          <p>UX/UI Design &amp; Content Model Design</p>
        </div>
      </Link>
    </>
  );
};

export default Project04;
