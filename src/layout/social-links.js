import * as React from 'react';
import { Link } from 'gatsby';
import { Stack } from 'react-bootstrap';

const SocialLinks = () => {
  return (
    <div className='social-links-div'>
      <Stack direction='horizontal' gap={5}>
        <div>
          <Link to='https://www.linkedin.com/in/stevekim-io'>LinkedIn</Link>
        </div>
        <div>
          <Link to='https://www.behance.net/stevekim-io'>Behance</Link>
        </div>
        <div>
          <Link to='https://www.linkedin.com/in/stevekim-io'>Dribble</Link>
        </div>
      </Stack>
    </div>
  );
};

export default SocialLinks;
