import * as React from 'react';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const Testimonial03 = () => {
  return (
    <div className={`card `}>
      <p>
        Steve is highly professional and an extremely talented and creative web
        designer. He redesigned our entire website from scratch and we are very
        pleased with the result. He not only made our website aesthetically
        pleasing and easy to navigate through, but he also implemented
        strategies to increase our exposure on the internet and to measure our
        analytics.
      </p>
      <h2 className={`gradient-color ${Aboutpage.testimonialName}`}>
        Hyon Yun
      </h2>
      <p className={Aboutpage.testimonialCompany}>
        President | English Book Ladder
      </p>
    </div>
  );
};

export default Testimonial03;
