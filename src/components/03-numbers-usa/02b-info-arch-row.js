import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const InfoArchRow = () => {
  return (
    <>
      <Row className={`m-top-100`}>
        <Col xl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }}>
          <div className={` ${Projectpage.detailDiv}`}>
            <h2 className={`gradient-color text-align-center`}>
              Info. Architecture &amp; Content Strategy
            </h2>
            <p className={`text-align-center`}>
              Refining the information architecture through a detailed sitemap,
              ensures an intuitive and user-friendly navigation experience and
              easy to find content structure.
            </p>
          </div>
        </Col>
        <Col xl={12}>
          <div className={`m-top-25 tablet-m-top-0`}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709855286/NUSA/sitemap_m8rnd0.webp'
              alt='sitemap img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default InfoArchRow;
