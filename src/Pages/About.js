import React from 'react'
import axios from 'axios';
import Hdmn from '../Components/Nav/hmdn'
import Banner from '../Components/Home/Aboutbanner.js';
import Abt1 from "./../Components/Home/Abt1"
import Ftr from "./../Components/Footer/Ftr"

const Bpp = () => {

return (
    <div>
      
      <Hdmn></Hdmn>
      <Banner/>
      <Abt1/>
      <Ftr />


    </div>
  )
}

export default Bpp;