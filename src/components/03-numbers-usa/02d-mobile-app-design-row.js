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

const MobileAppDesignRow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // fadeInUp animation
    gsap.fromTo(
      [`#detail-trigger-4`],
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-trigger-4`,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      [`#detail-slider-trigger-4`],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.outIn',

        scrollTrigger: {
          trigger: `#detail-slider-trigger-4`,
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
          id='detail-trigger-4'
        >
          <div className={`${Projectpage.detailDiv}`}>
            <h2 className={`gradient-color`}>Mobile App Design</h2>
            <p>
              The mobile app aligns with the website's adherence to NUSA's
              branding and design guidelines, ensuring a consistent user
              experience across platforms. It is specifically tailored to
              promote user participation in political initiatives. This approach
              utilizes interactive features, such as gamification, and
              notifications to encourage active engagement, enabling users to
              easily get involved directly from their mobile devices. Key
              contributions include:
            </p>
            <ul>
              <li>Sitemap and optimized user flows</li>
              <li>Collaboration with UI designer</li>
              <li>Newsfeed design and function</li>
              <li>Gamification feature</li>
              <li>Design iterations</li>
            </ul>
            {/* <div className='m-top-50 m-bottom-50'>
              <a
                className='dk-button'
                href='https://www.figma.com/file/jUKxin7EuU86JZPQw56wDn/NUSA?type=design&node-id=1259%3A17973&mode=design&t=7uPL0hdkT9VCZ1GN-1'
                target='_blank'
                rel='noreferrer'
              >
                <span>Figma: Mobile App Design</span>
              </a>
            </div> */}
          </div>
        </Col>
        <Col xs={12} id='detail-slider-trigger-4'>
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
            className='mobile-design-swiper'
          >
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712874113/NUSA/NUSA_App_-_Splash_screen_d3912n.webp'
                placeholder='blurred'
                alt='mobile app design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712874136/NUSA/NUSA_App_-_LogIn_jracco.webp'
                placeholder='blurred'
                alt='mobile app design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712874140/NUSA/Home_wti47s.webp'
                placeholder='blurred'
                alt='mobile app design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712874146/NUSA/NUSA_App_-_Donate_xckcmp.webp'
                placeholder='blurred'
                alt='mobile app design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712874151/NUSA/NUSA_App_-_Take_Action_Petition_Detail_-_Editable_e1jyf9.webp'
                placeholder='blurred'
                alt='mobile app design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712874156/NUSA/NUSA_App_-_My_Profile_-_Gamification_-_Badges2_tva65i.webp'
                placeholder='blurred'
                alt='mobile app design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712874162/NUSA/NUSA_App_-_My_Profile_-_Gamification_-_Badges2_copy_m7mgwp.webp'
                placeholder='blurred'
                alt='mobile app design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1712874168/NUSA/NUSA_App_-_Edit_Profile_ioyhpc.webp'
                placeholder='blurred'
                alt='mobile app design img'
                className={Projectpage.sliderImg}
              />
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </section>
  );
};

export default MobileAppDesignRow;
