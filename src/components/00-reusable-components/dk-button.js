import * as React from 'react';
import { Link } from 'gatsby';

const DkButton = ({ text, to }) => {
  return (
    <>
      <Link to={to} className='dk-button'>
        <span>{text}</span>
      </Link>
    </>
  );
};

export default DkButton;
