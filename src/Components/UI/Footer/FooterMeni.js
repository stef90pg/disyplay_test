import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const FooterMeni = (props) => {
  const returnToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  const footerNav = props.navPage.map((page) => (
    <div className="float-left" key={page.id}>
      {' '}
      <NavLink
        exact
        className="link"
        onClick={returnToTop}
        activeStyle={{ color: '#2ecc71' }}
        to={page.link}
      >
        {' '}
        <p>
          {' '}
          {page.page} <span> / </span>
        </p>
      </NavLink>
    </div>
  ));
  return (
    <div className="footer-bottom">
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <div className="text-p">
              <p>Copyright 2013 Display. All Rights Reserved.</p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="footer-nav float-right">{footerNav}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterMeni;
