import React from 'react'
import classes from "./Signup.module.css"
import Nav from "./../Nav/hmdn"
import Ftr from "./../Footer/Ftr"
import {Link} from "react-router-dom"
import {useEffect} from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
axios.defaults.withCredentials=true;



const Signup = () => {

const [showPassword,setShowPassword]= useState(false)

const [value, setValue] = useState({

  id: uuidv4(),
  name: '',
  email: '',
  mobno: '',
  pass: '',
  al1: '',
  al2: '',
  vt: '',
  state: '',
  country : '',
  pincode : '',
  amno : ''

})

  const navigate = useNavigate();

 const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const submitForm =async (event) => {
    event.preventDefault();
    //console.log(value)

    try{
     const response= await axios.post('http://localhost:8000/registercust', value);
     console.log(response);
     if(response.data=='error'){
      alert("YOUR EMAIL OR MOBILE IS ALREADY REGISTER. PLEASE TRY LOGIN WITH OLD ACCOUNT OR USE ANOTHER CREDENTIALS")
     }else{
      alert("Data Registered Successfully");
     navigate('/customerlogin'); 
     }
     

    }catch(err){
      console.log(err)
    }


  }




  return ( 
     <div>
            <Nav/> <br/><br/><br/>
    <div className={classes.Su}>

<form className= {`${classes.form} ${classes.card}`}  onSubmit={submitForm} >
  <div className={classes.card_header}>
  
    <h1 className={classes.form_heading}>SIGN UP</h1>
  </div>
  <div className={classes.field}>
    <label htmlFor="name">Name</label>
    <input className={classes.input} name="name" type="text" placeholder="Your Name" id="name" pattern="[A-Za-z][A-Za-z ]*" onChange={e => setValue({...value, name:e.target.value})} required/>
  </div>

  <div className={classes.field}>
    <label htmlFor="username">Email Id</label>
    <input className={classes.input} name="email" type="email" placeholder="Your Email" id="email" onChange={e => setValue({...value, email:e.target.value})} required/>
  </div>

  <div className={classes.field}>
    <label htmlFor="username">Mobile Number</label>
    <input className={classes.input} name="mobno" type="text"  placeholder="Eg. 9112233177 (10 DIGITS ALLOWED)" id="mobile" minLength={10} maxLength={10} pattern="[0-9]*" onChange={e => setValue({...value, mobno:e.target.value})} required/>
  </div>

 <div className={classes.field}>
    <label htmlFor="al1">Address Line 1</label>
    <input className={classes.input} name="al1" type="text" placeholder="Enter Building name, Survey no, Flat no" id="al1" onChange={e => setValue({...value, al1:e.target.value})} required/>
  </div>

  <div className={classes.field}>
    <label htmlFor="al2">Address Line 2</label>
    <input className={classes.input} name="al2" type="text" placeholder="Lane no, Road name, Landmark " id="al2" onChange={e => setValue({...value, al2:e.target.value})} required/>
  </div>

    <div className={classes.field}>
    <label htmlFor="vt">Village / Town / City</label>
    <input className={classes.input} name="vt" type="text" placeholder="Village / Town / City" id="al2" onChange={e => setValue({...value, vt:e.target.value})} required/>
  </div>

    <div className={classes.field}>
    <label htmlFor="State"> State</label>
    <input className={classes.input} name="state" type="text" placeholder="State" id="state" onChange={e => setValue({...value, state:e.target.value})} required/>
  </div>

  <div className={classes.field}>
    <label htmlFor="country">Country</label>
    <input className={classes.input} name="country" type="text" placeholder="Country " id="country" onChange={e => setValue({...value, country:e.target.value})} required/>
  </div>

    <div className={classes.field}>
    <label htmlFor="pincode">Pincode</label>
    <input className={classes.input} name="pincode" type="text" placeholder="Enter Your Pincode " id="al2"  minLength={6} maxLength={6} pattern="[0-9]*"  onChange={e => setValue({...value, pincode:e.target.value})} required/>
  </div>

  <div className={classes.field}>
    <label htmlFor="amno">Mobile Number</label>
    <input className={classes.input} name="amno" type="text"  placeholder="Eg. 9112233177 (10 DIGITS ALLOWED)" id="amno" minLength={10} maxLength={10} pattern="[0-9]*" onChange={e => setValue({...value, amno:e.target.value})}/>
  </div>

  <div className={classes.field}>
    <label htmlFor="password">Password</label>
     <input type={showPassword ? 'text' : 'password'} id="pass" placeholder="Enter Your Password" className={classes.input} name="pass" maxLength={15} minLength={8} onChange={e => setValue({...value, pass:e.target.value})}  required/>
       <label>
        <input type="checkbox" checked={showPassword} onChange={handleCheckboxChange}/>
        Show Password
      </label>
  </div>

  <div className={classes.field}>
    <input type="submit" value="Sign Up" className={classes.button} />
  </div>

  Click Here To Login <Link to="/customerlogin"><button  className={classes.kd}>Login</button></Link>
</form>

    </div>
        <Ftr/>
     </div>
  )
}

export default Signup