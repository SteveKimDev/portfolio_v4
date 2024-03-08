import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projectpage from '../../styles/project.module.css';

const LayoutTemplateRow = () => {
  return (
    <>
      <Row className={`m-top-100`}>
        <Col xl={8} lg={7} className={`${Projectpage.order2}`}>
          <div>
            <StaticImage
              src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1709857304/NUSA/cover_img_byetoa.webp'
              alt='layout template img'
              className={Projectpage.detailImg}
            />
          </div>
        </Col>
        <Col
          xl={{ span: 3, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
          className={`relative ${Projectpage.order1}`}
        >
          <div
            className={`${Projectpage.detailDiv} ${Projectpage.detailDivCenterAlign}`}
          >
            <h2 className={`gradient-color`}>Layout Template Design</h2>
            <p>
              The design of the layout templates, introduced a structured
              approach to ensure the usability, aesthetic consistency, and
              strategic alignment with the content framework.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LayoutTemplateRow;
