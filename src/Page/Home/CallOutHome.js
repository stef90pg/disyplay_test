import React from 'react';
import ButtonGreen from '../../Components/Inputs/ButtonGreen';
import { Container } from 'react-bootstrap';

const CallOutHome = () => {
  return (
    <Container>
      <div className="call-out-home">
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus
          eu.
        </h5>
        <ButtonGreen title="BROWSE PORTFOLIO" />
      </div>
    </Container>
  );
};

export default CallOutHome;
