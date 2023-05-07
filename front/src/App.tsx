import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './components/Main/index';

import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
