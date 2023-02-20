import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Main/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
