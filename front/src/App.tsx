import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from 'components/Main/index';
import Navbar from 'components/Shared/Navbar';
import Footer from 'components/Shared/Footer';
import Funding from 'components/Funding';
import FundingComplete from 'components/FundingComplete';
import Profile from 'components/Profile';
import MakeFunding from 'components/MakeFunding';

import 'styles/index.css';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/funding" element={<Funding/>} />
          <Route path="/complete" element={<FundingComplete />} />
          <Route path="/my" element={<Profile />} />
          <Route path="/create" element={<MakeFunding />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
