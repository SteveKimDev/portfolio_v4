import * as React from 'react';
import { Link } from 'gatsby';

const MainNav = () => {
  return (
    <div className='main-nav-div'>
      <Link to='/'>About</Link>
      <Link to='/#project-section'>Projects</Link>
      <Link to='/'>Contact</Link>
    </div>
  );
};

export default MainNav;
