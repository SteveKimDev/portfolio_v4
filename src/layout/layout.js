import * as React from 'react';
import Logo from './logo';
import MainNav from './main-nav';
import SocialLinks from './social-links';
import Footer from './footer';

import '../styles/layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Logo />
      <MainNav />
      <main>{children}</main>
      <SocialLinks />
      <Footer />
    </>
  );
};

export default Layout;
