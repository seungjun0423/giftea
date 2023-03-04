import React from 'react';
import Banner from './banner';
import Funding from './funding';
import Navbar from './navbar';

function Main() {
  return (
    <div className="index">
      <Navbar />
      <Banner />
      <Funding />
    </div>
  );
}

export default Main;
