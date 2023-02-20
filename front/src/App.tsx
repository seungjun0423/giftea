import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Index from './components/Main/index';
=======
import Main from './components/Main/index';
>>>>>>> feature/front-router-setup

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Index />} />
=======
        <Route path="/" element={<Main />} />
>>>>>>> feature/front-router-setup
      </Routes>
    </BrowserRouter>
  );
}

export default App;
