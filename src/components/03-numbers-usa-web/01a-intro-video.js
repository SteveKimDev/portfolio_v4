import * as React from 'react';

import * as Projectpage from '../../styles/project.module.css';

const IntroVideo = () => {
  return (
    <>
      <video autoPlay muted playsInline className={Projectpage.introVideo}>
        <source
          src='https://res.cloudinary.com/stevekim/video/upload/v1709597807/NumbersUSA-web/project-intro_kspqba.mp4'
          type='video/mp4'
        />
      </video>
    </>
  );
};

export default IntroVideo;
