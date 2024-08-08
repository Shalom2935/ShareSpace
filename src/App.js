import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/import' element={<Home />} />
        <Route path='/files' element={<Home />} />
        <Route path='/downloads' element={<Home />} />
        <Route path='/contact' element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
