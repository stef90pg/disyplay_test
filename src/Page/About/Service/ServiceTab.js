import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ServiceButton from './ServiceButton';
import arrow from '../../../img/service/arrow-li.png';
import { fetchSliders } from '../../../store/About/about-action';
import { aboutActions } from '../../../store/About/about-slice';

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(
  require.context('../../../img/service', false, /\.(gif|jpe?g|svg|png)$/)
);

const ServiceTab = () => {
  const dispatch = useDispatch();
  const services = useSelector((store) => store.about.services);
  const active = useSelector((store) => store.about.active);

  const addCon = (e) => {
    dispatch(aboutActions.setActive(e.target.getAttribute('value')));
  };

  useEffect(() => {
    // const url = `http://localhost:3000/service`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setServices([...json]);
    //   });
    dispatch(fetchSliders());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Row className="tabb-no-padd">
          {services.length > 0 &&
            services.map((ser, i) => {
              let className = 'button-service';
              if (active === ser.title) {
                className = 'button-service active';
              }
              return (
                <Col xs={6} md={3} key={i}>
                  <ServiceButton
                    className={className}
                    item={ser}
                    onClick={addCon}
                    images={images[ser.logo]}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
      <div className="tab-body">
        <Container>
          {services.length > 0 &&
            services.map((ser, i) => {
              let className = 'tab-content';
              if (active === ser.title) {
                className = 'tab-content active';
              }
              return (
                <div key={ser.id} className={className}>
                  <p>{ser.description}</p>
                  <ul>
                    {ser.list.map((li, i) => (
                      <li key={i}>
                        <img src={arrow} />
                        {li}
                      </li> //
                    ))}
                  </ul>
                </div>
              );
            })}
        </Container>
      </div>
    </>
  );
};

export default ServiceTab;
