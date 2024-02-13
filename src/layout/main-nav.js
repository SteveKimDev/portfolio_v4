import * as React from 'react';
import { Link } from 'gatsby';

const MainNav = () => {
  return (
    <div className='main-nav-div'>
      <Link to='/'>About</Link>
      <Link to='/#project-section'>Projects</Link>
      <a href='mailto:steve@stevekim.io'>Contact</a>
    </div>
  );
};

export default MainNav;
