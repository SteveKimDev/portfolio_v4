import * as React from 'react';

import * as Projectpage from '../../styles/project.module.css';

const MainVideo = () => {
  return (
    <>
      <video autoPlay muted playsInline className={Projectpage.mainVideo}>
        <source
          src='https://res.cloudinary.com/stevekim/video/upload/v1709842399/NUSA/project-intro_owiprf.mp4'
          type='video/mp4'
        />
      </video>
    </>
  );
};

export default MainVideo;
