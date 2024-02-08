import * as React from 'react';

import DkButton from '../00-reusable-components/dk-button';

import * as Homepage from '../../styles/homepage.module.css';

const HeroSection = () => {
  return (
    <div className={Homepage.heroSection}>
      <div className={`${Homepage.headlineDiv}`}>
        <h1 className={`gradient-color ${Homepage.headline1a}`}>Product</h1>
        <h1 className={`gradient-color ${Homepage.headline1b}`}>Designer</h1>
        <h2 className={`gradient-color ${Homepage.headline2}`}>
          With Web Development Experience
        </h2>
        <p className={`secondary-color ${Homepage.headlineDescription}`}>
          Offering a unique perspective to create engaging, user-friendly web
          applications, utilizing both creative and technical problem-solving
          skills.
        </p>
        <div className={`m-top-50`}>
          <DkButton text='Check Out My Work' to='/' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
