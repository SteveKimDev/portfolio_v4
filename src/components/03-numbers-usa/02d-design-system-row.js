import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const DesignSystemRow = () => {
  return (
    <>
      <Row className={`m-top-100`}>
        <Col lg={3} md={12} className={`relative`}>
          <div
            className={`${Projectpage.detailDiv} ${Projectpage.detailDivCenterAlign}`}
          >
            <h2 className={`gradient-color`}>Design System</h2>
            <p>
              Creating and maintaining a unified set of guidelines, components,
              and best practices, empowered our team to produce consistent,
              scalable, and user-centric products with efficiency and coherence.
            </p>
          </div>
        </Col>
        <Col lg={{ span: 4, offset: 1 }} md={6}>
          <div style={{ padding: '8px' }}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709858724/NUSA/design_system_-_color_ab8zas.webp'
              alt='design system img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div style={{ padding: '8px' }}>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709858724/NUSA/design_system_-_typograpghy_pkiikk.webp'
              alt='design system img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DesignSystemRow;
