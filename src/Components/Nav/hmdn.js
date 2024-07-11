import React from 'react';
import {  useEffect,useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './hmdn.css';
import Cookies from 'js-cookie';
import Cart from "./../../Asset/crs8.gif"
import Wt from "./../../Asset/wishlist.gif"
const Nav = () => {

  const [burger,setBurger]=useState(false);

   
  function show(){
      setBurger(!burger);
  }


  const [display,setDisplay]=useState();
  function dis(){
      setDisplay(!display)
  }



  
  const menuRef = useRef(null);
  const imgRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
      const handleOutsideClick = (event) => {
        // Check if the click is outside the menuRef
        if ((menuRef.current && !menuRef.current.contains(event.target)) && (imgRef.current && !imgRef.current.contains(event.target))) {
          setDisplay(false);
        }
      };
  
      // Attach the event listener to the document
      document.addEventListener('mousedown', handleOutsideClick);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

   
  const custPrimaryKey = Cookies.get('custPrimaryKey');




  return (
    <div>

<header>
            <nav>


          

            <div class="navbar">

              
            <div className='right'>
            
            <div className="btn">
               
               <button className ="hammer" onClick={dis}><i className={burger ? "fas fa-bars icon_bar " : "fas fa-bars icon_bar" } ref={imgRef}  onClick={show}></i></button>
           </div>
           <div className={display? "burgerdata" : "burgerdata2"} ref={menuRef}>
               <div className="dkd">
               <li className="burgerItem"><button id="closeButton" class="dkd" onClick={() => setDisplay(false)}>X</button></li>
               <Link to="/" className="dkd" smooth={true} duration={500}> <li className="burgerItem">HOME</li></Link> 
               <Link to="/about" className="dkd" smooth={true} duration={500}> <li className="burgerItem">ABOUT</li></Link> 
              {/*<Link to="skills" className="dkd" smooth={true} duration={500}><li className="burgerItem">BLOGS</li></Link> 
               <Link to="projects" className="dkd" smooth={true} duration={500}><li className="burgerItem">PRODUCTS</li></Link> */}
               <Link to="/contact" className="dkd" smooth={true} duration={500}><li className="burgerItem">CONTACT</li></Link> 
 
               </div>
           </div>
            </div>
        {/*        <div class="left">
                    <h1 class="name">INFISEA</h1>

                  <a href="/cart" className='cart' ><img src={Cart} className='cart' /> </a>
                </div>
        */}



      <div class="left">
              <h1 class="name">INFISEA</h1>
              <div>
           {/*   {custPrimaryKey ? (<div className='carttt'><Link to="/cart"><img src={Cart} className='cart2' /></Link> <Link to="/Wishlist"><img src={Wt} className='cart' /></Link> </div>) : null}  */}
      {(location.pathname === '/customersignup' || location.pathname === '/customerlogin' || location.pathname === '/Home' || location.pathname === '/cart' || location.pathname === '/Updatecustprofile' || location.pathname === '/Wishlisst') && custPrimaryKey && (<div className='carttt'><Link to="/cart"><img src={Cart} className='cart2' /></Link> <Link to="/Wishlist"><img src={Wt} className='cart' /></Link> </div> )}
            </div>
              </div>
              </div>
            </nav>
        </header>


    </div>
  )
}

export default Nav