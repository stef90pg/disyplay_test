import React from 'react';

export default ({ closePopup }) => {
  return (
    <div className="popup" onClick={closePopup}>
      <div className="popup_inner">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/k1yAN19a79M"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
