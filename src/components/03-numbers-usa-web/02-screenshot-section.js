import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const ScreenshotSection = () => {
  return (
    <section>
      <div className={Projectpage.screenshotDiv}>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709599192/NumbersUSA-web/02-primary_kb8zmd.webp'
          alt='screenshot img'
          className={Projectpage.screenshotImage}
        />
      </div>
      <div className={Projectpage.screenshotDiv}>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1699912914/NumbersUSA-web/Donate_wtypzk.webp'
          alt='screenshot img'
          className={Projectpage.screenshotImage}
        />
      </div>
      <div className={Projectpage.screenshotDiv}>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709599879/NumbersUSA-web/06-static_h4wnkc.webp'
          alt='screenshot img'
          className={Projectpage.screenshotImage}
        />
      </div>
    </section>
  );
};

export default ScreenshotSection;
