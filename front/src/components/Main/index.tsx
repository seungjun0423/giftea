import React from 'react';
import Banner from './banner';
import FundingWrapper from './FundingWrapper';
import Navbar from './navbar';

function Main() {
  return (
    <div className="index">
      <Navbar />
      <Banner />
      <FundingWrapper />
    </div>
  );
}

export default Main;
