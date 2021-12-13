import React from 'react';
import { Container } from 'react-bootstrap';

const PageTitle = (props) => {
  return (
    <div className="page-title">
      <Container>
        <h2>{props.title}</h2>
      </Container>
    </div>
  );
};

export default PageTitle;
