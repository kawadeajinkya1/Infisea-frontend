import React from 'react'
import classes from "./Crd.module.css"
import I1 from "./../../Asset/I1.png"
import I2 from "./../../Asset/I2.png"
import I3 from "./../../Asset/I3.png"
import I4 from "./../../Asset/I4.png"

import A from './../../Asset/crs1.gif';
import B from './../../Asset/crs2.gif';
import C from './../../Asset/crs3.gif';
import D from './../../Asset/crs4.gif';

const Crd = () => {
  return (
    <div>

<div className={classes.Heading}>
  <h3>  We Assure .... </h3>
</div>

<div className={classes.crds}>


<div className={classes.crs}>
<img src={A} alt="Assurance"  className={classes.Ih} />
<h5 className={classes.Ihp} >QUALITY ASSURANCE</h5>
{/*<h6 className={classes.Ihp1}>Rigorous Quality Testing Standards</h6>*/}
</div>

<div className={classes.crs}>
<img src={B} alt="Assurance"  className={classes.Ih} />
<h5 className={classes.Ihp} >QUANTITY ASSURANCE</h5>
{/*<h6 className={classes.Ihp1}>Uncompromising Quantity Assurance</h6>*/}
</div>

<div className={classes.crs}>
<img src={C} alt="Assurance"  className={classes.Ih} />
<h5 className={classes.Ihp} > 24 * 7 CUSTOMER SUPPORT</h5>
{/*<h6 className={classes.Ihp1}>We are always with you</h6>*/}
</div>

<div className={classes.crs}>
<img src={D} alt="Assurance"  className={classes.Ih} />
<h5 className={classes.Ihp} > FASTEST SHIPPING SERVICE</h5>
{/*<h6  className={classes.Ihp1}>Rapid Dispatch, Timely Arrival.</h6>*/}
</div>


</div>

 </div>
  )
}

export default Crd