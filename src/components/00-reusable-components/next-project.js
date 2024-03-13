import * as React from 'react';
import { Link } from 'gatsby';

const NextProject = ({ link, text }) => {
  return (
    <section className='next-project-section m-top-100'>
      <Link to={link}>
        <p className='gradient-color'>Next Project</p>
        <h1 className='secondary-color'>{text}</h1>
      </Link>
    </section>
  );
};

export default NextProject;
