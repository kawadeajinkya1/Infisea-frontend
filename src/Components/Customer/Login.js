import React from 'react'
import classes from "./Login.module.css"

import Nav from "./../Nav/hmdn"
import Ftr from "./../Footer/Ftr"
import {Link} from "react-router-dom"
import {useEffect} from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Cookies from 'js-cookie';
axios.defaults.withCredentials=true;


const Login = () => {


  
  const [value, setValue] = useState({

  
    lc: '',
    pass: ''
  
  })

 const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

const [showPassword,setShowPassword]= useState(false)


  const navigate = useNavigate();

//  axios.defaults.withCredentials = true;
  const submitForm =async (event) => {
    event.preventDefault();
   // console.log(value)

    try{
      const response= await axios.post('http://localhost:8000/custlogin', value);
     //console.log(response);
     if(response.data=='error'){
      alert("YOUR CREDENTIALS ARE NOT REGISTERED. Please TRY AGAIN")
     }else{
      const Abd=response.data;
      alert("WELCOME",response.data[0].name);
      console.log(response.data);
      Cookies.set('custPrimaryKey', response.data[0].cid, {sameSite: 'none',secure: true, expires: 1 / 24 });
      const CustPrimaryKeyCookie = Cookies.get('custPrimaryKey');
    
     // console.log('Value of userPrimaryKey cookie:', userPrimaryKeyCookie);  
//{expires: (1 / 1440) * minutes }
      navigate('/Home'); 
        window.location.reload();
     }

    }catch(err){
       console.log(err)
    }

  }



  return (
    <div>
            <Nav/> <br/><br/><br/>
   
    <div className={classes.ln}>

<form className={`${classes.form} ${classes.card}`} onSubmit={submitForm}>
    <div className={classes.card_header}>
      <h1 className={classes.form_heading}>Login</h1>
    </div>

    <div className={classes.field}>
    <label htmlFor="username">Email ✉</label>
    <input type="text" className={classes.input} placeholder="Enter Your Email or Mobile no" id="username" name="username" onChange={e => setValue({...value, lc:e.target.value})} />
    </div>


    <div className={classes.field}>
    <label htmlFor="password">Password 🔒</label>
     <input type={showPassword ? 'text' : 'password'} id="password" placeholder="Enter Your Password" maxLength={15} minLength={8} className={classes.input} name="user_password" onChange={e => setValue({...value, pass:e.target.value})} required />
       <label>
        <input type="checkbox" checked={showPassword} onChange={handleCheckboxChange}/>
        Show Password
      </label>
  </div>

    <div className={classes.field}>
    <input type="submit" value="Login" className={classes.button} />
    </div>

   Don't Have Account ? <Link to="/signup"><button  className={classes.kd}>Sign Up</button></Link>
  </form>

    </div>
       <Ftr/>
     </div>
  )
}

export default Login