import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Import from './pages/Import/Import';
import Files from './pages/Files/Files';
import Downloads from './pages/Download/Downloads';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/import' element={<Import />} />
        <Route path='/files' element={<Files />} />
        <Route path='/downloads' element={<Downloads />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
