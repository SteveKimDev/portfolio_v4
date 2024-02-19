import * as React from 'react';

import * as Aboutpage from '../../styles/aboutpage.module.css';

const Testimonial02 = () => {
  return (
    <div className={`card `}>
      <p>
        Our company was in search of a new and updated web design and we found
        Steve Kim. Through his design and his efforts he was able to bring out
        the very best in what we were looking for in a web design. We couldn't
        be more pleased with his attention to detail and his efforts to stay in
        contact with us throughout the process in the future we will certainly
        be looking forward to working with Steve again
      </p>
      <h2 className={`gradient-color ${Aboutpage.testimonialName}`}>
        Darrell Collins
      </h2>
      <p className={Aboutpage.testimonialCompany}>CEO | OFC Inc.</p>
    </div>
  );
};

export default Testimonial02;
