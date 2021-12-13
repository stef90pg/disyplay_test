import React, { useState } from 'react';
import MainMenu from './MainMenu';
import MobHeader from './MobHeader';
import { Container } from 'react-bootstrap';

const Header = () => {
  const [navPage, setNavPage] = useState([
    { id: 0, page: 'HOME', link: '/' },
    { id: 1, page: 'ABOUT', link: '/about' },
    { id: 2, page: 'WORK', link: '/work' },
    { id: 3, page: 'CONTACT', link: '/contact' },
  ]);

  return (
    <div>
      <header>
        <Container>
          {screen.width > 600 ? (
            <MainMenu navPage={navPage} />
          ) : (
            <MobHeader navPage={navPage} />
          )}
        </Container>
      </header>
    </div>
  );
};

export default Header;
