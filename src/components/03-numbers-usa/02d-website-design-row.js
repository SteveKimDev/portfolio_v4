import * as React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImage } from 'gatsby-plugin-image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import * as Projectpage from '../../styles/project.module.css';

const WebsiteDesignRow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // fadeInUp animation
    gsap.fromTo(
      [`#detail-trigger-3`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-trigger-3`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      [`#detail-slider-trigger-3`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-slider-trigger-3`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section>
      <Row className={`m-top-200 lg-m-top-100`}>
        <Col
          xl={{ span: 4, offset: 4 }}
          lg={{ span: 8, offset: 2 }}
          id='detail-trigger-3'
        >
          <div className={`${Projectpage.detailDiv}`}>
            <h2 className={`gradient-color`}>Website Design</h2>
            <p>
              We designed visually appealing page template layouts that engage
              users and also ensure consistency across the website. These
              templates incorporate modern design and are tailored to enhance
              readability, usability, and NUSA branding.
            </p>
            <div className='m-top-50 m-bottom-50'>
              <a
                className='dk-button'
                href='https://www.figma.com/file/jUKxin7EuU86JZPQw56wDn/NUSA?type=design&node-id=52%3A12417&mode=design&t=fH7b92MtRrbtltdC-1'
                target='_blank'
                rel='noreferrer'
              >
                <span>Figma: Website Design</span>
              </a>
            </div>
          </div>
        </Col>
        <Col xs={12} id='detail-slider-trigger-3'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 51,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[EffectCoverflow, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712869596/NUSA/01-Homepage_zfyust.webp'
                placeholder='blurred'
                alt='desktop design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712869603/NUSA/02-primary_lvc66i.webp'
                placeholder='blurred'
                alt='desktop design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712869610/NUSA/03-secondary_v8cabv.webp'
                placeholder='blurred'
                alt='desktop design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712869616/NUSA/04-basic_gzlupf.webp'
                placeholder='blurred'
                alt='desktop design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712869621/NUSA/05-news_giwu6b.webp'
                placeholder='blurred'
                alt='desktop design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712869626/NUSA/06-static_zrzqtc.webp'
                placeholder='blurred'
                alt='desktop design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712869635/NUSA/07-action-board_bx5znm.webp'
                placeholder='blurred'
                alt='desktop design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </section>
  );
};

export default WebsiteDesignRow;
