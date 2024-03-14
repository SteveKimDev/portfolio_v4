// // import React, { useEffect } from 'react';
// // import { gsap } from 'gsap';
// // import { Row, Col } from 'react-bootstrap';
// // import { StaticImage } from 'gatsby-plugin-image';

// // import * as Projectpage from '../../styles/project.module.css';

// // const HeroSection = () => {
// //   useEffect(() => {
// //     // Fade-in-Up Animation
// //     gsap.from(`.${Projectpage.heroCopyContainer} > *`, {
// //       y: 24,
// //       opacity: 0,
// //       stagger: 0.3,
// //       duration: 1,
// //       ease: 'power1.outIn',
// //     });

// //     // Fade-in-Up Animation
// //     gsap.from([`.${Projectpage.heroFlatImg1}`], {
// //       y: 16,
// //       opacity: 0,
// //       duration: 1,
// //       ease: 'power1.outIn',
// //     });
// //   }, []);
// //   return (
// //     <section>
// //       <Row>
// //         <Col lg={6} className={`relative ${Projectpage.heroCol1}`}>
// //           <div className={`${Projectpage.heroCopyContainer}`}>
// //             <div>
// //               <h1 className={`gradient-color ${Projectpage.heroTitle}`}>
// //                 ICBC
// //               </h1>
// //               <p className={`${Projectpage.heroDescription}`}>
// //                 A prominent auto insurance company serving the entire Vancouver
// //                 BC region,put into action an extensive content migration and
// //                 website replatforing project. The project's objective was to
// //                 transition from an outdated Sharepoint website and content
// //                 management system to a modern, scalable web platform built using
// //                 NextJS and Contentful for their CMS.
// //               </p>
// //             </div>
// //             <div>
// //               <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
// //                 Role
// //               </h2>
// //               <p className={`${Projectpage.heroSubdescription}`}>
// //                 Information Architect
// //               </p>
// //             </div>
// //             <div>
// //               <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
// //                 Product Type
// //               </h2>
// //               <p className={`${Projectpage.heroSubdescription}`}>
// //                 Website, and Content Management System
// //               </p>
// //             </div>
// //             <div>
// //               <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
// //                 Timeline
// //               </h2>
// //               <p className={`${Projectpage.heroSubdescription}`}>9 months</p>
// //             </div>
// //           </div>
// //         </Col>
// //         <Col lg={6} className={`relative ${Projectpage.heroCol2}`}>
// //           <div className={`${Projectpage.heroFlatImg1}`}>
// //             <StaticImage
// //               src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710354749/ICBC/hero_img_lq8al4.webp'
// //               alt='project hero img'
// //               placeholder='blurred'
// //               className={Projectpage.heroFlatImg}
// //             />
// //           </div>
// //         </Col>
// //       </Row>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { Row, Col } from 'react-bootstrap';
// import { StaticImage } from 'gatsby-plugin-image';

// import * as Projectpage from '../../styles/project.module.css';

// const HeroSection = () => {
//   useEffect(() => {
//     // Fade-in-Up Animation
//     gsap.from([`.${Projectpage.heroImg}`], {
//       height: 0,
//       opacity: 0,
//       duration: 1,
//       ease: 'power1.outIn',
//     });

//     // Fade-in-Up Animation
//     gsap.from([`.${Projectpage.heroTitle}`, `.sub-section`], {
//       y: 16,
//       height: 0,
//       opacity: 0,
//       stagger: 0.3,
//       delay: 1,
//       duration: 1,
//       ease: 'power1.outIn',
//     });
//   }, []);
//   return (
//     <section className={`m-top-75 ${Projectpage.heroSection}`}>
//       <Row>
//         {/* hero img */}
//         <Col xs={12}>
//           <StaticImage
//             src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1707861375/ICBC/ICBC-cover-image_bdr73p.jpg'
//             alt='project hero img'
//             placeholder='blurred'
//             className={Projectpage.heroImg}
//           />
//         </Col>

//         {/* hero title */}
//         <Col xs={12} className={`m-top-25`}>
//           <h1
//             className={`gradient-color text-align-center ${Projectpage.heroTitle}`}
//           >
//             ICBC Auto Insurance
//           </h1>
//         </Col>

//         {/* hero subtitle and sub-description 1 */}
//         <Col sm={{ span: 2, offset: 1 }} className={`sub-section`}>
//           <div>
//             <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
//               Role
//             </h2>
//             <p className={`${Projectpage.heroSubdescription}`}>
//               Infomration Architect
//             </p>
//           </div>
//         </Col>

//         {/* hero subtitle and sub-description 2 */}
//         <Col sm={{ span: 3, offset: 2 }} className={`sub-section `}>
//           <div>
//             <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
//               Product Type
//             </h2>
//             <p className={`${Projectpage.heroSubdescription}`}>
//               Website and CMS
//             </p>
//           </div>
//         </Col>

//         {/* hero subtitle and sub-description 3 */}
//         <Col sm={{ span: 2, offset: 2 }} className={`sub-section`}>
//           <div>
//             <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
//               Timeline
//             </h2>
//             <p className={`${Projectpage.heroSubdescription}`}>9 months</p>
//           </div>
//         </Col>
//       </Row>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const HeroSection = () => {
  useEffect(() => {
    // Fade-in-Up Animation
    gsap.from([`.${Projectpage.heroImg}`], {
      height: 0,
      opacity: 0,
      duration: 1,
      ease: 'power1.outIn',
    });

    // Fade-in-Up Animation
    gsap.from([`.${Projectpage.heroTitle}`, `.sub-section`], {
      y: 36,
      height: 0,
      opacity: 0,
      stagger: 0.3,
      delay: 1,
      duration: 1,
      ease: 'power1.outIn',
    });
  }, []);
  return (
    <>
      <Row className={`${Projectpage.heroImgRow}`}>
        {/* hero img */}
        <Col xs={12}>
          <StaticImage
            src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1710457249/ICBC/hero-img_e0llva.webp'
            alt='project hero img'
            placeholder='blurred'
            className={Projectpage.heroImg}
          />
        </Col>
      </Row>

      <Row className={`${Projectpage.heroCopyRow}`}>
        {/* hero title */}
        <Col xs={12} className={`m-top-25 m-bottom-25`}>
          <h1
            className={`gradient-color text-align-center ${Projectpage.heroTitle}`}
          >
            ICBC Auto Insurance
          </h1>
        </Col>

        {/* hero subtitle and sub-description 1 */}
        <Col sm={4} className={`text-align-center sub-section `}>
          <div>
            <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
              Role
            </h2>
            <p className={`${Projectpage.heroSubdescription}`}>
              Information Architect
            </p>
          </div>
        </Col>

        {/* hero subtitle and sub-description 2 */}
        <Col sm={4} className={`text-align-center sub-section`}>
          <div>
            <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
              Product Type
            </h2>
            <p className={`${Projectpage.heroSubdescription}`}>
              Website and CMS
            </p>
          </div>
        </Col>

        {/* hero subtitle and sub-description 3 */}
        <Col sm={4} className={`text-align-center sub-section`}>
          <div>
            <h2 className={`gradient-color ${Projectpage.heroSubtitle}`}>
              Timeline
            </h2>
            <p className={`${Projectpage.heroSubdescription}`}>9 months</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HeroSection;
