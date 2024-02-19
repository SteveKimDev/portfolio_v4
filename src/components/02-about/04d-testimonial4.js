import * as React from 'react';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const Testimonial04 = () => {
  return (
    <div className={`card `}>
      <p>
        I was genuinely taken aback by Steve's remarkable efficiency and found
        myself thoroughly pleased with the website he delivered. His expertise
        was evident throughout the process, showcasing a deep understanding and
        a clear proficiency in his work. He possesses an innate knowledge of
        both the technical and aesthetic aspects of web design, which is a
        testament to his extensive experience. He engaged in meaningful
        dialogue, asking insightful questions about design preferences, content
        requirements, and the target audience's expectations.
      </p>
      <h2 className={`gradient-color ${Aboutpage.testimonialName}`}>
        Alex Varonos
      </h2>
      <p className={Aboutpage.testimonialCompany}>CEO | SSL9 Inc.</p>
    </div>
  );
};

export default Testimonial04;
