import * as React from 'react';

import * as Projectpage from '../../styles/project.module.css';

const IntroVideo = () => {
  return (
    <>
      <video autoPlay muted playsInline className={Projectpage.introVideo}>
        {/* HEVC video for Safari */}
        <source
          src='https://res.cloudinary.com/stevekim/video/upload/v1709240894/NumbersUSA-web/project-intro_yjmxck.mp4'
          type='video/mp4; codecs="hvc1"'
        />
        {/* Original WebM video for Chrome and others */}
        <source
          src='https://res.cloudinary.com/stevekim/video/upload/v1709240903/NumbersUSA-web/project-intro_zz1nyi.webm'
          type='video/webm'
        />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default IntroVideo;
