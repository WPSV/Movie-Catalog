import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './components/Movie/Movie';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App