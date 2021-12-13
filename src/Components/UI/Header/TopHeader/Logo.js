import React from 'react';
import logo from '../../../../img/logo.png';
import { Link } from 'react-router-dom';
// ../../../img/logo.png
export default () => {
  return (
    <div>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt={'logo'} />
        </div>
      </Link>
    </div>
  );
};
