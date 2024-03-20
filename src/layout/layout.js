import * as React from 'react';
import Logo from './logo';
import MainNav from './main-nav';
import SocialLinks from './social-links';
import Footer from './footer';

import '../styles/layout.css';

const Layout = ({ children }) => {
  return (
    <div className='screen-orientation'>
      <Logo />
      <MainNav />
      <main className='main-content'>{children}</main>
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Layout;
