import * as React from 'react';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const Testimonial01 = () => {
  return (
    <div className={`card `}>
      <p>
        I've had the pleasure to work with Steve on several projects and his
        design skills and expertise in web development are invaluable! He's the
        kind of unicorn every web development team wants in their corner. He not
        only has a keen eye for great web user experiences but also can code up
        the animations and designs so business stakeholders can see it in action
        and developers can get a clearer picture of what is required. His
        ability to work across team functions make him a valued collaborator who
        is able to easily bridge the gap between design and development.
      </p>
      <h2 className={`gradient-color ${Aboutpage.testimonialName}`}>
        Natalie Cervantes
      </h2>
      <p className={Aboutpage.testimonialCompany}>
        Product Manager | First String Digital
      </p>
    </div>
  );
};

export default Testimonial01;
