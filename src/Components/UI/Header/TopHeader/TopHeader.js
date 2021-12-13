import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SocilaIcon from './SocilaIcon';
import Logo from './Logo';

const TopHeader = () => {
  return (
    <div className="top-header">
      <Container>
        <Row>
          <Col>
            <Logo />
          </Col>
          <Col>
            <SocilaIcon />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
