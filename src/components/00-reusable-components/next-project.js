import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { StaticImage } from 'gatsby-plugin-image';
// import { Link } from 'gatsby';

const NextProject = () => {
  return (
    <section className='m-top-200 '>
      <div>
        <h2 className='gradient-color text-align-center m-bottom-25 carousel-top-title'>
          Selected Projects
        </h2>
      </div>
      <Carousel>
        {/* slide 1 */}
        <Carousel.Item interval={4000} className='relative'>
          <StaticImage
            src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710450294/NUSA/cover-img_sqj8bh.webp'
            alt='project cover img'
            placeholder='blurred'
            className='carousel-img'
          />
          <Carousel.Caption>
            <h2>NumbersUSA</h2>
            <p>Website Redesign &amp; Mobile App</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide 2 */}
        <Carousel.Item interval={4000} className='relative'>
          <StaticImage
            src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710457235/ICBC/ICBC-cover-image_jguntb.webp'
            alt='project cover img'
            placeholder='blurred'
            className='carousel-img'
          />
          <Carousel.Caption>
            <h2>ICBC</h2>
            <p>Website Replatform &amp; CMS</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide 3 */}
        <Carousel.Item interval={4000} className='relative'>
          <StaticImage
            src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710457880/FSD/cover-image_jwrt3s.webp'
            alt='project cover img'
            placeholder='blurred'
            className='carousel-img'
          />
          <Carousel.Caption>
            <h2>First String Digital</h2>
            <p>SasS Website Feature</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide 4 */}
        <Carousel.Item interval={4000} className='relative'>
          <StaticImage
            src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710788429/English%20Book%20Ladder/cover-img_fnsyqx.webp'
            alt='project cover img'
            placeholder='blurred'
            className='carousel-img'
          />
          <Carousel.Caption>
            <h2>English Book Ladder</h2>
            <p>Business Website</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default NextProject;
