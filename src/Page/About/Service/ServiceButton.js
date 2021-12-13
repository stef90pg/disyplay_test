import React from 'react';

export default ({ item, onClick, className, images }) => {
  return (
    <div value={item.title} onClick={onClick} className={className}>
      <div value={item.title} className="centre">
        <img src={images.default} alt={item.title} />
        <h5 value={item.title}>{item.title}</h5>
      </div>
    </div>
  );
};
