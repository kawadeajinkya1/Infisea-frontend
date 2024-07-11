import React from 'react'
import "./Nav.css"
import {Link} from "react-router-dom" 
import H from "./../../Asset/home.png";
import A from "./../../Asset/info.png";
import B from "./../../Asset/blog.png";
import S from "./../../Asset/circuit.png";
import G from "./../../Asset/gallery.png";
import C from "./../../Asset/support.png";
import Cn from "./../../Asset/shopping-cart.png";
import L from "./../../Asset/profile.png";



const Nav = () => {
  return (
    <div className='navbar'>
<nav className='nav'>


<div className='no'>

<Link to="/" className="link"><h5> <img src={H} className="Ni" />&nbsp;  HOME </h5></Link>
<Link to="/" className="link"><h5> <img src={A} className="Ni" />&nbsp;   ABOUT </h5> </Link>
<Link to="/" className="link"><h5> <img src={B} className="Ni" />&nbsp;   BLOGS </h5> </Link>
<Link to="/" className="link"><h5> <img src={S} className="Ni" />&nbsp;   SERVICES </h5> </Link>

</div>

<div className='nto'>
<h1>INFISEA</h1> 
</div>

<div className='nth'>

<Link to="/" className="link"><h5> <img src={G} className="Ni" />&nbsp;   GALLERY </h5> </Link>
<Link to="/" className="link"><h5> <img src={C} className="Ni" />&nbsp;   CONTACT </h5> </Link>
<Link to="/" className="link"><h5> <img src={L} className="Ni" />&nbsp;   SIGN-UP / LOGIN</h5> </Link>
<Link to="/" className="link"><h5> <img src={Cn} className="Ni" />&nbsp;   CART </h5> </Link>

</div>



    </nav>

    </div>
  )
}

export default Nav