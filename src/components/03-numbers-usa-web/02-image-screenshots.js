// import * as React from 'react';
// import { useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { Row, Col } from 'react-bootstrap';
// import { StaticImage } from 'gatsby-plugin-image';

// import * as Projectpage from '../../styles/project.module.css';

// const ImageScreenshots = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // section title animation
//     gsap.fromTo(
//       [`.${Projectpage.screenshotImageCol}`],
//       { y: '36px', opacity: 0 },
//       {
//         y: '0px',
//         opacity: 1,
//         duration: 1,
//         delay: 1.5,
//         ease: 'power1.outIn',

//         scrollTrigger: {
//           trigger: `.${Projectpage.screenshotImageCol}`,
//           start: 'top 90%',
//           toggleActions: 'play none none none',
//         },
//       }
//     );
//   }, []);

//   return (
//     <section>
//       {/* Row 1 */}
//       <Row>
//         <Col sm={12} className={Projectpage.screenshotImageCol}>
//           {/* img 1 */}
//           <StaticImage
//             src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1708987011/NumbersUSA-web/01-Homepage__cropped_o2xhpx.webp'
//             alt='screenshot img'
//             className={Projectpage.screenshotImage}
//           />
//         </Col>
//       </Row>

//       {/* Row 2 */}
//       <Row>
//         <Col sm={12} className={Projectpage.screenshotImageCol}>
//           {/* img 2 */}
//           <StaticImage
//             src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1708986600/NumbersUSA-web/02-primary__cropped_zejsnu.webp'
//             alt='screenshot img'
//             className={Projectpage.screenshotImage}
//           />
//         </Col>
//         <Col sm={12} className={Projectpage.screenshotImageCol}>
//           {/* img 3 */}
//           <StaticImage
//             src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1708986601/NumbersUSA-web/03-secondary__cropped_lbc30b.webp'
//             alt='screenshot img'
//             className={Projectpage.screenshotImage}
//           />
//         </Col>
//         <Col sm={12} className={Projectpage.screenshotImageCol}>
//           {/* img 4 */}
//           <StaticImage
//             src='https://res.cloudinary.com/stevekim/image/upload/a_auto/v1708986601/NumbersUSA-web/04-basic__cropped_hz70yn.webp'
//             alt='screenshot img'
//             className={Projectpage.screenshotImage}
//           />
//         </Col>
//         <Col sm={12} className={Projectpage.screenshotImageCol}>
//           {/* img 5 */}
//           <StaticImage
//             src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1708986600/NumbersUSA-web/05-news__cropped_uopks2.webp'
//             alt='screenshot img'
//             className={Projectpage.screenshotImage}
//           />
//         </Col>
//         <Col sm={12} className={Projectpage.screenshotImageCol}>
//           {/* img 6 */}
//           <StaticImage
//             src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1708986600/NumbersUSA-web/06-static__cropped_hffbng.webp'
//             alt='screenshot img'
//             className={Projectpage.screenshotImage}
//           />
//         </Col>
//       </Row>
//     </section>
//   );
// };

// export default ImageScreenshots;
