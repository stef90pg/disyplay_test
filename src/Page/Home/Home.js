import React from 'react';
import CallOutHome from './CallOutHome';
import HeroBanner from './HeroBanner/HeroBanner';
import PortfolioSection from './PortfolioSection/PortfolioSection';
import VideoSection from './VideoSection/VideoSection';
const Home = () => {
  return (
    <>
      <HeroBanner />
      <CallOutHome />
      <VideoSection />
      <PortfolioSection />
    </>
  );
};

export default Home;
