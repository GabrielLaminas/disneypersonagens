import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GridList from './components/GridList';
import Header from './components/Header';
import Character from './components/Character';
import Page404 from './components/Helper/Page404';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GridList />} />
        <Route 
          path="characters/:id" 
          element={<Character />} 
        />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;