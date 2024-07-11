import React from 'react'
import "./Ftr.css"

import hrt from './../../Asset/heart.gif';
import facebook from './../../Asset/facebook.png';
import linked from './../../Asset/lkdin.png';
import insta from './../../Asset/instagram.png';
import yut from './../../Asset/youtube.png';
import {Link} from "react-router-dom" 

const Ftr = () => {
  return (
    <div className='footer'>
      <footer className='ftr'>

<div className="ftr1">

<h1>INFISEA</h1>
<b>  Subscribe to our email alerts! </b>
<br/>
<input type="email" placeholder='Enter Your Email Address' className='in' />
<br/>
<input type="submit"value='>' className='ine' />
</div>



<div className="ftr2">

<b> Shop </b>

<ul className='ful'>

<li className='fli'><Link to="/" className="link">Pcb component</Link></li>
<li className='fli'><Link to="#" className="link">Pcb Sheet</Link></li>
{/*<li className='fli'><Link to="/" className="link">BLOGS</Link></li>*/}
{/*<li className='fli'><Link to="/" className="link">SERVICES</Link></li>*/}
{/*<li className='fli'><Link to="/" className="link">GALLERY</Link></li>*/}
<li className='fli'><Link to="#" className="link">Pcb Elect</Link></li>
<li className='fli'><Link to="#" className="link">Pcb  Dlect</Link></li>
{/*<li className='fli'><Link to="/" className="link">SIGN-UP / LOGIN</Link></li>*/}
{/*<li className='fli'><Link to="/" className="link">CART</Link></li>*/}


</ul>
</div>

<div className="ftr3">
  {/*
 <b>  CONTACT US </b>
   <br /><br />

<b>ADDRESS :</b><br />
INFISEA, S No 36, 1/2/4, Ashtavinayak <br />Industrial Estate, Near Canara Bank Narhe, Pune, Maharashtra 411041
<br/> <br/>

<b>PHONE :</b><br />

<a href="tel:9112233188" className='alink'>9112233188 </a> &nbsp;| &nbsp; <a href="tel:9112233177"  className='alink'>9112233177</a>   
<br/> <br/>

<b>EMAIL :</b><br />
<a href="mailto:swastikelectrotech.pune@gmail.com" className='alink'>swastikelectrotech.pune@gmail.com</a>
  */}

<b>Help </b>

<ul className='ful'>

<li className='fli'><Link to="/" className="link">Warrenty & Support</Link></li>
<li className='fli'><Link to="#" className="link">Return Policy</Link></li>
{/*<li className='fli'><Link to="/" className="link">BLOGS</Link></li>*/}
{/*<li className='fli'><Link to="/" className="link">SERVICES</Link></li>*/}
{/*<li className='fli'><Link to="/" className="link">GALLERY</Link></li>*/}
<li className='fli'><Link to="#" className="link">Service Centeres</Link></li>
<li className='fli'><Link to="#" className="link">Bulk Orders</Link></li>
<li className='fli'><Link to="#" className="link">FAQ'S</Link></li>
<li className='fli'><Link to="#" className="link">Why Buy Direct</Link></li>
{/*<li className='fli'><Link to="/" className="link">SIGN-UP / LOGIN</Link></li>*/}
{/*<li className='fli'><Link to="/" className="link">CART</Link></li>*/}
</ul>

</div>


<div className="ftr4">
{/*}
<b>LOCATE US :</b><br /><br />
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1888.6475542096496!2d73.82058821910064!3d18.44649820927969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953e4c951a33%3A0xa03077bd87a9b301!2sSWASTIK%20ELECTROTECH%20AUTOMATION!5e0!3m2!1sen!2sus!4v1702464744259!5m2!1sen!2sus"  loading="lazy"  className='fmap'></iframe>
*/}


<b>Company </b>

<ul className='ful'>

<li className='fli'><Link to="/" className="link">About Company</Link></li>
<li className='fli'><Link to="#" className="link">News</Link></li>
{/*<li className='fli'><Link to="/" className="link">BLOGS</Link></li>*/}
{/*<li className='fli'><Link to="/" className="link">SERVICES</Link></li>*/}
{/*<li className='fli'><Link to="/" className="link">GALLERY</Link></li>*/}
<li className='fli'><Link to="#" className="link">Read Our Blogs</Link></li>
<li className='fli'><Link to="#" className="link">Career</Link></li>
<li className='fli'><Link to="#" className="link">Security</Link></li>
<li className='fli'><Link to="#" className="link">Investor Relation</Link></li>
<li className='fli'><Link to="#" className="link">Social Responsibility</Link></li>
<li className='fli'><Link to="#" className="link">Warrenty Policy</Link></li>
{/*<li className='fli'><Link to="/" className="link">SIGN-UP / LOGIN</Link></li>*/}
{/*<li className='fli'><Link to="/" className="link">CART</Link></li>*/}
</ul>


</div>

      </footer>


<footer className='ftrr'>

<div className='ssm'> Let's Get Social  
<img src={facebook} class='imgs' />
<img src={linked} class='imgs'  />
<img src={insta} class='imgs'  />
<img src={yut} class='imgs' />
</div>

<div className='ssm2'> 
<ul className='oll'>
<li>Privacy Policy</li> &emsp;&emsp;
<li>Terms And Conditions</li>
</ul>
</div>

<div className='ssm3'> 
<p className="company"> For Any Query : INFISEA, S No 36, 1/2/4, Ashtavinayak <br />Industrial Estate, Near Canara Bank Narhe, Pune, Maharashtra 411041   </p>
</div>

<div className='ssm3'> 
<p className="company">Copyright &#169; 2023 INFISEA | Made with
            <img src={hrt} className="hrt"></img> by Cortica Web Solutions Pvt. Ltd</p>
</div>



</footer>
    </div>
  )
}

export default Ftr