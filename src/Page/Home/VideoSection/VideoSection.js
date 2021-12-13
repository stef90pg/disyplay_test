import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PopUp from '../../../Components/Inputs/popUp';
import PopUpVIdeo from './PopUpVIdeo';
import VideoImg from '../../../img/video.png';

const VideoSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="video-section">
      <Container>
        <Row>
          <Col lg={5} className="text-align-center">
            <button className="video-button" onClick={togglePopup}>
              <img src={VideoImg} alt="video" />
            </button>
          </Col>
          <Col lg={7}>
            <h3>Get To Know Us a Little Better!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
              faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
              mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
              congue ut, luctus a nulla. Donec sit amet sapien neque, id
              ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
              elit congue lacinia.
              <br />
              <br />
              Nullam tellus turpis, fringilla sit amet congue ut, luctus a
              nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla
              facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
            </p>
          </Col>

          {showPopup && (
            <PopUp closePopup={togglePopup}>
              <PopUpVIdeo closePopup={togglePopup} />
            </PopUp>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default VideoSection;
