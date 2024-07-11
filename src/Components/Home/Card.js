import React from 'react';
import classes from './Card.module.css';
import A from './../../Asset/img2.jpg';

const Card = () => {
  return (
    <div className={classes.dd}>

<div className={classes.Heading}>
  <h3>Our Products </h3> 
</div>



  <div className={classes.items}>
  <div className={classes.item}>
    <div className={classes.imgbox}>
    {/*  <img src={A} alt="Awesome Sunglasses" className={classes.img}/>*/}
    </div>



    <div className={classes.details}>
      <center><span className={classes.middle}> PRODUCT INFORMATION</span></center> 
     <div className={classes.hh}> <h5 className={classes.heading1}>RELAY SWITCH MODULE</h5>  <h5 className={classes.price}> 105₹</h5> </div>
   <center> <button className={classes.addToCart}>Add To Cart</button></center>
    </div>


</div>


 <div className={classes.item}>
    <div className={classes.imgbox}>
    {/*  <img src={A} alt="Awesome Sunglasses" className={classes.img}/>*/}
    </div>



    <div className={classes.details}>
      <center><span className={classes.middle}> PRODUCT INFORMATION</span></center> 
     <div className={classes.hh}> <h5 className={classes.heading1}>POCKET BEAGLE BONE BOARD</h5>  <h5 className={classes.price}> 15₹</h5> </div>
   <center> <button className={classes.addToCart}>Add To Cart</button></center>
    </div>


</div>


 <div className={classes.item}>
    <div className={classes.imgbox}>
    {/*  <img src={A} alt="Awesome Sunglasses" className={classes.img}/>*/}
    </div>



    <div className={classes.details}>
      <center><span className={classes.middle}> PRODUCT INFORMATION</span></center> 
     <div className={classes.hh}> <h5 className={classes.heading1}>Original Arduino Uno Rev3 SMD</h5>  <h5 className={classes.price}> 125₹</h5> </div>
   <center> <button className={classes.addToCart}>Add To Cart</button></center>
    </div>


</div>


 <div className={classes.item}>
    <div className={classes.imgbox}>
    {/*  <img src={A} alt="Awesome Sunglasses" className={classes.img}/>*/}
    </div>



    <div className={classes.details}>
      <center><span className={classes.middle}> PRODUCT INFORMATION</span></center> 
     <div className={classes.hh}> <h5 className={classes.heading1}>STM32F407 VET6 ARM CORTEX-M4 CORE</h5>  <h5 className={classes.price}> 105₹</h5> </div>
   <center> <button className={classes.addToCart}>Add To Cart</button></center>
    </div>


</div>
</div>
</div>

  );
};

export default Card;
