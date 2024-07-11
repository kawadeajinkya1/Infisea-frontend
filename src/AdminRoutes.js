import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import g from "./../src/Asset/load.gif";

const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get('http://localhost:8000/verifytoken');
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, [location.pathname]); // Re-run verification when the pathname changes

  if (isAuthenticated === null) {
    return (
      <div>
        <center><img src={g} alt="Loading..." /></center>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
