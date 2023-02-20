import React from 'react';
import Banner from './banner';
import Funding from './funding';

function Index() {
  return (
    <div className="Index">
      <header>
        <Banner />
        <Funding />
      </header>
    </div>
  );
}

export default Index;
