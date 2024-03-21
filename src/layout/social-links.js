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
            href='https://docs.google.com/presentation/d/1c-zMkORFNbzXuJVGYaujc_MH_QrA1QX4GwKkci06N0I/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Case Studies
          </a>
        </div>
      </Stack>
    </div>
  );
};

export default SocialLinks;
