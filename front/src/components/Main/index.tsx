import React from 'react';
import Banner from './banner';
import Funding from './funding';
import Navbar from './navbar';
import Bannerimg from './bannerimg';

function Main() {
  return (
    <div className="index">
      <Navbar />
      <Banner />
      <Bannerimg />
      <Funding />
    </div>
  );
}

export default Main;
