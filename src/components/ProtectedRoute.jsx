import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider'; // Assure-toi d'importer le hook correctement

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, redirige vers la page de connexion
    return <Navigate to="/connexion" />;
  }
  
  return children;
};

export default ProtectedRoute;
