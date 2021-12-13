import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './TopHeader/Logo';
import { NavLink } from 'react-router-dom';

const MobHeader = (props) => {
  const [top, setTop] = useState(false);

  let mainMenu = props.navPage.map((page) => (
    <li key={page.id}>
      <NavLink
        exact
        className="link"
        activeStyle={{ color: '#2ecc71' }}
        to={page.link}
      >
        {page.page}
      </NavLink>
    </li>
  ));

  const toggleButton = () => {
    setTop(!top);
  };

  return (
    <div>
      <Container className="mobile-header">
        <Row className="top-mob">
          <Col xs={6}>
            <Logo />
          </Col>
          <Col xs={6}>
            <button className="nav-mobile-but" onClick={toggleButton}>
              <i className="fa fa-bars"></i>
            </button>
          </Col>
        </Row>
        <ul className="main-menu" style={{ top: top ? '50px' : '-550px' }}>
          {mainMenu}
        </ul>
      </Container>
    </div>
  );
};

export default MobHeader;
