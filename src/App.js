import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Import from './pages/Import/Import';
import Files from './pages/Files/Files';
import Downloads from './pages/Download/Downloads';
import Contact from './pages/Contact/Contact';
import FileInfo from './pages/FileInfo/FileInfo';
import Connexion from './pages/Connexion/Connexion';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthProvider';

function App() {
  return (
    <main>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/import' element={<ProtectedRoute><Import /></ProtectedRoute>} />
        <Route path='/files' element={<ProtectedRoute><Files /></ProtectedRoute>} />
        <Route path='/downloads' element={<ProtectedRoute><Downloads /></ProtectedRoute>} />
        <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path='/documents/:id' element={<ProtectedRoute><FileInfo /></ProtectedRoute>} />
        <Route path='/connexion' element={<Connexion />} /> 
      </Routes>
      </AuthProvider>
    </main>
  );
}

export default App;
