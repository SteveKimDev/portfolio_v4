import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Carousel from 'react-bootstrap/Carousel';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const NextProject = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // section title animation
    gsap.fromTo(
      [`#selected-project-title-trigger`],
      { y: 36, opacity: 0, height: 0 },
      {
        y: 0,
        opacity: 1,
        height: 'auto',
        duration: 1,
        ease: 'power1.outIn',
        scrollTrigger: {
          trigger: '#selected-project-title-trigger',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // fadeInUp animation
    gsap.fromTo(
      [`#next-project-trigger`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: 'power1.outIn',
        scrollTrigger: {
          trigger: `#next-project-trigger`,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <section className='m-top-200'>
      <div>
        <h2
          className='section-title gradient-color text-align-center m-bottom-25'
          id='selected-project-title-trigger'
        >
          Selected Projects
        </h2>
      </div>
      <Carousel id='next-project-trigger'>
        {/* slide 1 */}
        <Carousel.Item interval={3000} className='relative'>
          <Link to='/numbersusa'>
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
          </Link>
        </Carousel.Item>

        {/* slide 2 */}
        <Carousel.Item interval={3000} className='relative'>
          <Link to='/icbc'>
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
          </Link>
        </Carousel.Item>

        {/* slide 3 */}
        <Carousel.Item interval={3000} className='relative'>
          <Link to='/first-string-digital'>
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
          </Link>
        </Carousel.Item>

        {/* slide 4 */}
        <Carousel.Item interval={3000} className='relative'>
          <Link to='/english-book-ladder'>
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
          </Link>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default NextProject;
