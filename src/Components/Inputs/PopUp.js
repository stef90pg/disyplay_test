import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';

const PopUp = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.closePopup} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <div>{props.children}</div>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default PopUp;
