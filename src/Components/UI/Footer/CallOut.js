import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonGreen from '../../Inputs/ButtonGreen';

const CallOut = () => {
  return (
    <div className="call-out-sec">
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <h4 className="text-h4">ARE YOU READY TO BE BELOWN AWAY? </h4>
          </Col>
          <Col xs={12} sm={6}>
            <ButtonGreen title="CLICK HERE TO FIND OUT" align="right" />
          </Col>
        </Row>
      </Container>{' '}
    </div>
  );
};

export default CallOut;
