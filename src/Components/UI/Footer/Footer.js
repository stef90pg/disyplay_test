import React from 'react';
import CallOut from './CallOut';
import FooterMeni from './FooterMeni';

const Footer = () => {
  const navPage = [
    { id: 0, page: 'HOME', link: '/' },
    { id: 1, page: 'ABOUT', link: '/about' },
    { id: 2, page: 'WORK', link: '/work' },
    { id: 3, page: 'CONTACT', link: '/contact' },
  ];
  return (
    <footer>
      <CallOut />
      <FooterMeni navPage={navPage} />
    </footer>
  );
};

export default Footer;
