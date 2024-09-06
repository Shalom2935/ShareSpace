import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Afficher un indicateur de chargement pendant la vérification
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
    return <Navigate to="/connexion" />;
  }

  return children;
};

export default ProtectedRoute;
