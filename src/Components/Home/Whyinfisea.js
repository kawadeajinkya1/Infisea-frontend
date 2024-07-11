import React from 'react';
import classes from "./Wcy.module.css";
import { Link } from 'react-router-dom';
import a1 from "./../../Asset/a1.png";
import a2 from "./../../Asset/a2.png";
import a4 from "./../../Asset/a4.png";
import a3 from "./../../Asset/a3.png";

import A from './../../Asset/crs5.gif';
import B from './../../Asset/crs6.gif';

const Wcy = () => {
  return (
  <div className={classes.heddd}>



<div className={classes.left1}>

    <div className={classes.h1}>

<h1>
 <span className={classes.head}>  WHY INFISEA</span> <br></br>

</h1>

    </div>

<br></br>

    <div className={classes.p1}>

    INFISEA, as an Electronic Manufacturing Services (EMS) provider, delivers comprehensive solutions in the design, manufacturing, testing, and distribution of electronic components and assemblies. Based in India, INFISEA is committed to offering professional EMS services to meet the diverse needs of original equipment manufacturers (OEMs).
    </div>

    <br></br>
{/*
    <div>

      <button className={classes.b1}><Link to='/Contact'  className={classes.be}>CONTACT US</Link></button>
    
    </div>  */}

</div>
   





<div className={classes.right1}>

<h5>
  <span className={classes.hd}>  What We Do...    </span> 
 </h5>
 <br></br>

{/*?}
<div className={classes.d}>
<img src={a1} className={classes.i1}/>

<div className={classes.d2}>
<h5  className={classes.h5}>
PUMP DESIGNING
</h5>
<p className={classes.p5}>
Consider factors like pump size, impeller design, and materials for durability and longevity.
</p>
</div>

</div>



<div className={classes.d}>
<img src={a2} className={classes.i1}/> 

<div className={classes.d2}>
<h5 className={classes.h5}>
EFFICIENCY AND PERFORMANCE
</h5>
<p className={classes.p5}>
Conduct performance testing to ensure pumps meet specified flow rates, head pressures, and other performance parameters.
</p>
</div>

</div>

*/}

<div className={classes.d}>
<img src={A} className={classes.i1}/>

<div className={classes.d2}>
<h5 className={classes.h5}>
TESTING AND QUALITY
</h5>
<p className={classes.p5}>
Implement rigorous testing procedures to ensure product meet quality and performance standards.
</p>
</div>

</div>
   

   
<div className={classes.d}>
<img src={B} className={classes.i1}/> 

<div className={classes.d2}>
<h5 className={classes.h5}>
MATERIAL SELECTION
</h5>
<p className={classes.p5}>
Choose high-quality materials for our products components to ensure resistance to wear, unboadeing.
</p>
</div>

</div>
   
    </div>

    </div>
  
  )
}

export default Wcy