import React from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/UI/Header/Header';
import Footer from './Components/UI/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">
        <Routes />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
