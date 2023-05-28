import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from 'components/Main/index';
import Navbar from 'components/Shared/Navbar';
import Funding from 'components/Funding';

import 'styles/index.css';
import FundingComplete from 'components/FundingComplete';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/funding" element={<Funding/>} />
          <Route path="/complete" element={<FundingComplete />} />
        </Routes>
    </>
  );
}

export default App;
