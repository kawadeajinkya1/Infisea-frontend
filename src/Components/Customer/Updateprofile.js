import React, { useState, useEffect } from 'react';
import classes from './Uprofile.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';

import Nav from "./../Nav/hmdn"
import Ftr from "./../Footer/Ftr"

import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials=true;

const UpdateProfile = () => {

const [userData, setUserData] = useState({});
const [updatedData, setUpdatedData] = useState({});
const [showPassword,setShowPassword]= useState(false)
const navigate = useNavigate();
const CustPrimaryKeyCookie = Cookies.get('custPrimaryKey');



  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/custdashboard');
        setUserData(response.data);
        setUpdatedData(response.data);
      //  console.log(userData)
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle error as needed
      }
    };

    fetchUserProfile();
  }, []);


  const handleUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:8000/updatecustprofile', updatedData);
      if(response.data !='error')
      {console.log(response.data);
      alert('Profile updated successfully!');
      navigate('/Home');
      }
      
    } catch (error) {
      console.error('Error updating profile:', error);
       alert('Profile Not Updated! Please Try Again');
    }
  };


 const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };


 const handleGoBack= () => {
       navigate('/Home');
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


 const handleGoLogin= () => {
       navigate('/customerlogin');
  };





  // Check session status every 5 minutes (adjust the interval as needed)
/*

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('http://localhost:8000/session2');
        const isAuthenticated = response.data.isAuthenticated;

        if (!isAuthenticated) {
          // Session expired, perform logout
          handleLogout();
        }
      } catch (error) {
        console.error('Error checking session status:', error);
      }


    };
    
const sessionCheckInterval = setInterval(checkSession, 10 * 1000); // Check every 10 seconds
    //const sessionCheckInterval = setInterval(checkSession, 5 * 60 * 1000);
    return () => clearInterval(sessionCheckInterval);
  }, []);



*/
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/logoutcust');
      Cookies.remove('custPrimaryKey');
      alert('Logout successful');
  
      window.location.href = '/customerlogin';
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle error as needed
    }
  };

  if (!CustPrimaryKeyCookie) {
    // You can add loading spinner or handle the case when user data is not loaded yet
    return <p><br/>
        <center> <button className={classes.addToCart} onClick={handleGoLogin}> ←  GO BACK To Login Page</button> </center>
      <br /></p>;
  }

  return (
    <div>
      <Nav/> <br/><br/><br/>
    <div className={classes.Su}>
   
      <form className= {`${classes.form} ${classes.card}`}  onSubmit={handleUpdate} >
      <div className={classes.card_header}>
       <h1 className={classes.form_heading}>UPDATE YOUR PROFILE</h1>
      </div>

      <div className={classes.field}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Update Your Name"  className={classes.input} defaultValue={userData.name} onChange={handleChange} pattern="[A-Za-z][A-Za-z ]*" required />
      </div>


        <div className={classes.field}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Update Your Mail" className={classes.input} name="email" defaultValue={userData.email} onChange={handleChange} required />
        </div>


        <div className={classes.field}>
        <label htmlFor="mobno">Mobile Number:</label>
        <input type="text" id="mobno"  className={classes.input} name="mobno" defaultValue={userData.mobno}  placeholder="Eg. 9112233177 (10 DIGITS ALLOWED)" minLength={10} maxLength={10} pattern="[0-9]*" onChange={handleChange} required />
        </div>


    <div className={classes.field}>
    <label htmlFor="al1">Address Line 1</label>
    <input className={classes.input} name="al1" type="text" placeholder="Enter Building name, Survey no, Flat no" id="al1" defaultValue={userData.al1} onChange={handleChange}   required/>
  </div>

  <div className={classes.field}>
    <label htmlFor="al2">Address Line 2</label>
    <input className={classes.input} name="al2" type="text" placeholder="Lane no, Road name, Landmark " id="al2" defaultValue={userData.al2}  onChange={handleChange}  required/>
  </div>

    <div className={classes.field}>
    <label htmlFor="vt">Village / Town / City</label>
    <input className={classes.input} name="vt" type="text" placeholder="Village / Town / City" id="vt" defaultValue={userData.vt}  onChange={handleChange} required/>
  </div>

    <div className={classes.field}>
    <label htmlFor="State"> State</label>
    <input className={classes.input} name="state" type="text" placeholder="State" id="state" defaultValue={userData.state}  onChange={handleChange} required/>
  </div>

  <div className={classes.field}>
    <label htmlFor="country">Country</label>
    <input className={classes.input} name="country" type="text" placeholder="Country " id="country" defaultValue={userData.country}  onChange={handleChange} required/>
  </div>

    <div className={classes.field}>
    <label htmlFor="pincode">Pincode</label>
    <input className={classes.input} name="pin" type="text" placeholder="Enter Your Pincode " id="pin"  minLength={6} maxLength={6} pattern="[0-9]*"  defaultValue={userData.pin}  onChange={handleChange} required/>
  </div>

  <div className={classes.field}>
    <label htmlFor="amno">Alternate Mobile Number</label>
    <input className={classes.input} name="amno" type="text"  placeholder="Eg. 9112233177 (10 DIGITS ALLOWED)" id="amno" minLength={10} maxLength={10} pattern="[0-9]*" defaultValue={userData.amno}  onChange={handleChange}/>
  </div>
 

        <div className={classes.field}>
        <label htmlFor="pass">Password:</label>
        <input type={showPassword ? 'text' : 'password'} id="pass" placeholder="Update Your Name" className={classes.input} name="pass" defaultValue={userData.pass} onChange={handleChange} required />
       <label>
        <input type="checkbox" checked={showPassword} onChange={handleCheckboxChange}/>
        Show Password
      </label>
        </div>

        <div className={classes.field}>
       <input type="submit" value="Update Profile" className={classes.button} />
        </div>

        <br/>
        <center> <button className={classes.addToCart} onClick={handleGoBack}> ←  GO BACK</button> </center>
      <br />
      </form>

    </div>
    <Ftr/>
    </div>
  );
};

export default UpdateProfile;
