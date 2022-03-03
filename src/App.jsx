import React from 'react'
import GridList from './components/GridList';
import Header from './components/Header';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Personagem from './components/Personagem';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GridList />} />
        <Route path="characters/:id" element={<Personagem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;