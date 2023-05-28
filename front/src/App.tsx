import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from 'components/Main/index';
import Navbar from 'components/Shared/Navbar';
import Footer from 'components/Shared/Footer';

import 'styles/index.css';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
