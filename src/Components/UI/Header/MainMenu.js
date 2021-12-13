import React from 'react';
import { NavLink } from 'react-router-dom';
import TopHeader from './TopHeader/TopHeader';

const MainMenu = (props) => {
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
  return (
    <div>
      <TopHeader />
      <hr className="no-mar"></hr>
      <div>
        <ul className="main-menu">{mainMenu}</ul>
      </div>
    </div>
  );
};

export default MainMenu;
