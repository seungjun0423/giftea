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
import FundingDetail from 'components/FundingDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/funding/:id" element={<FundingDetail />} />
        <Route path="/complete" element={<FundingComplete />} />
        <Route path="/my" element={<Profile />} />
        <Route path="/create" element={<MakeFunding />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
