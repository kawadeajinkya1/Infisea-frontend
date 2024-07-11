import React, { useEffect, useState } from 'react';
import classes from "./Dashboard.module.css";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Link} from 'react-router-dom'
axios.defaults.withCredentials=true;




const Dashboard = () => {
  const [userProfile, setUserProfile] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/custdashboard');
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/logoutcust');
      Cookies.remove('custPrimaryKey');
      alert('Logout successful');
  
      window.location.href = '/';
    } catch (error) {
      console.error('Error during logout:', error);

    }
  };

/*

  if (!userProfile.cid==custPrimaryKey) {
    
   navigate('/customerlogin');
    return null;
  }
*/

  
  return (
<div className={classes.buttoms}>

{userProfile ? (
        <div>
          <p>ID: {userProfile.id}</p>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Mobile Number: {userProfile.mobno}</p>
          <p>Unique Id : {userProfile.cid}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}



<Link to= "/Updatecustprofile"><button className={classes.button}> UPDATE PROFILE </button></Link>


<button onClick={handleLogout} className={classes.button}>Logout</button>



    </div>
  )
}

export default Dashboard