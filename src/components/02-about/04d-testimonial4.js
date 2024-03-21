import * as React from 'react';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const Testimonial04 = () => {
  return (
    <div className={`card `}>
      <p>
        I was genuinely taken aback by Steve's efficiency and found myself
        really pleased with the website designs he delivered for our multiple
        marketing projects. His expertise was evident throughout the design
        process. He has knowledge of both the technical and aesthetic aspects of
        web design, which shows in his extensive experience. He engaged in
        meaningful dialogue, asking insightful questions about design
        preferences, content requirements, and the target audience's
        expectations.
      </p>
      <h2 className={`gradient-color ${Aboutpage.testimonialName}`}>
        Alex Varonos
      </h2>
      <p className={Aboutpage.testimonialCompany}>CEO | SSL9 Inc.</p>
    </div>
  );
};

export default Testimonial04;
