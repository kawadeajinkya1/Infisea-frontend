import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      // Redirect to the homepage after 5 seconds
      window.location.href = '/Home';
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(redirectTimer); // Clear the timer on component unmount
  }, []);

  return (
    <div>
      <center> 
        <h1>This Page Is Not Exist </h1>
        <h1>We Are Directing You to Homepage </h1>
      </center>
    </div>
  );
}

export default NotFound;