import React from 'react'
import axios from 'axios';
import Hdmn from '../Components/Nav/hmdn'
import Banner from '../Components/Home/Contactbanner';
import Cnt from '../Components/Home/Contact';
import Ftr from "./../Components/Footer/Ftr"

const Bpp = () => {

return (
    <div>
      
      <Hdmn></Hdmn>

      <Cnt/>
      <Ftr />

    </div>
  )
}

export default Bpp;