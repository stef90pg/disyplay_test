import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSliders } from '../../../store/Home/home-action';
import SliderItem from './SliderItem';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(
  require.context('../../../img/slider', false, /\.(gif|jpe?g|svg)$/)
);

const SliderInPort = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.home.sliders);
  let numIt =
    screen.width > 1725
      ? 5
      : screen.width < 1725 && screen.width > 1125
      ? 3
      : screen.width < 1125
      ? 1
      : 0;
  let centIm = screen.width < 1125 ? false : true;
  const settings = {
    className: 'center',
    centerMode: centIm,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: numIt,
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  useEffect(() => {
    // const url = `http://localhost:3000/slider`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((json) => setItems([...json]));

    dispatch(fetchSliders());
  }, [dispatch]);
  return (
    <div className="port-slider">
      {items.length > 0 && (
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id}>
              <SliderItem item={item} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SliderInPort;
