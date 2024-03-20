import * as React from 'react';
import { Stack } from 'react-bootstrap';

const SocialLinks = () => {
  return (
    <div className='social-links-div'>
      <Stack direction='horizontal' gap={5}>
        <div>
          <a
            href='https://www.linkedin.com/in/stevekim-io'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href='https://www.behance.net/stevekim-io'
            target='_blank'
            rel='noreferrer'
          >
            Behance
          </a>
        </div>
        <div>
          <a
            href='https://dribbble.com/stevekim-io'
            target='_blank'
            rel='noreferrer'
          >
            Dribble
          </a>
        </div>
      </Stack>
    </div>
  );
};

export default SocialLinks;
