import React from 'react'
import axios from 'axios';
import Hdmn from '../Components/Nav/hmdn'
import Carousel from '../Components/Home/Carousel';
import Card from '../Components/Home/Card';
import Crd from '../Components/Home/Crd';
import Wcy from './../Components/Home/Whyinfisea';
import Big from './../Components/Home/Big';
import Ftr from "./../Components/Footer/Ftr"

axios.defaults.withCredentials=true;

const Bpp = () => {

  {/*
  const hndClk=async()=>{
    try{
      console.log('hndclk')
      const res=await axios.get('http://localhost:8000/my')
      console.log(res.data);
    }catch(err){
      console.log(err)
    }
  }
*/}

  return (
    <div>
      
      <Hdmn></Hdmn>
      <Big/>
      <Carousel/>
      <Card/>
      <Crd/>
      <Wcy/>
      <Ftr />

   { /*App<button onClick={hndClk}>get</button>*/}

    </div>
  )
}

export default Bpp;