import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Ajout d'un état de chargement
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false); // Fin du chargement après vérification
  }, []);

  const login = (token, matricule, rememberMe) => {
    if (rememberMe) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('matricule', matricule);
    } else {
      sessionStorage.setItem('authToken', token);
      sessionStorage.setItem('matricule', matricule);
    }
    console.log({ token, matricule })
    setIsAuthenticated(true);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('matricule');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('matricule');
    setIsAuthenticated(false);
    navigate('/connexion');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
