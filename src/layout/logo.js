import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Logo = () => {
  return (
    <>
      <Link to='/'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1701817301/Portfolio%20website/logo-with-text__transparent-background_titr4e.webp'
          alt='Logo'
          placeholder='blurred'
          className='logo'
        />
      </Link>
    </>
  );
};

export default Logo;
