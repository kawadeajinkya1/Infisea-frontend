import React from 'react';
import classes from './Footer.module.css';
import logo from './../../Assets/logo.png';
import facebook from './../../Assets/facebook.png';
import linked from './../../Assets/lkdin.png';
import insta from './../../Assets/instagram.png';
import yut from './../../Assets/youtube.png';
import mail from './../../Assets/gmail.png';
import phone from './../../Assets/smartphone.png';
import hrt from './../../Assets/heart.gif';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
    <div className={classes.container}>
<hr className={classes.cont}/>
<br/>
        <div className={classes.hold}>
            <center>
            <div className={classes.fr1}>
                <img src={logo} className={classes.logo}></img>
                <div className={classes.socialHold}>
                    <a href='#'><img src={facebook} className={classes.insta}></img></a>
                    <a href='#'><img src={linked} className={classes.insta}></img></a>
                    <a href='#'><img src={insta} className={classes.insta}></img></a>
                    <a href='https://www.youtube.com/@sharvarikolhe469'><img src={yut} className={classes.insta}></img></a>
                </div>
            </div>
            </center>
            <div className={classes.fr2}>
                <p className={classes.extraHead}>Quick Links
                    <hr color='red' className={classes.line}></hr></p>
                <div className={classes.extra}>
                    <div className={classes.e1}>
                        <Link to='/' className={classes.li}><li>Home</li></Link>
                        <Link to='/About'  className={classes.li}><li>About</li></Link>
                        <Link to='/Facilities'  className={classes.li}><li>Facilities</li></Link>
                        <Link to='/Gallery'  className={classes.li}><li>Gallery</li></Link>
                        <Link to='/Client' className={classes.li}><li>Client</li></Link>
                        <Link to='/Product'  className={classes.li}><li>Products</li></Link>
                        <Link to='/Contact'  className={classes.li}><li>Contact</li></Link>
                        <Link to='/Enquiry'  className={classes.li}><li>Enquiry</li></Link>
                    </div>
                    
                </div>

            </div>

            <div className={classes.fr5}>
            <p className={classes.extraHead}>Products
                    <hr color='red' className={classes.line}></hr></p>
                <div className={classes.extra}>
                   <center>
                        <Link to='/Product' className={classes.li}><li>DEWATERING PUMPS</li></Link>
                        <Link to='/Product'  className={classes.li}><li>ELECTRIC_SUBMERSIBLE DEWATERING_PUMPS</li></Link>
                        <Link to='/Product'  className={classes.li}><li>NON-CLOG PUMPS</li></Link>
                        <Link to='/Product'  className={classes.li}><li>SLURRY PUMPS</li></Link>
                        <Link to='/Product' className={classes.li}><li>SEWAGE PUPMS</li></Link>
                        </center>
                
                    
                </div> 

            </div>
            

            <div className={classes.fr3}>
            <div className={classes.reachHold}>
                <p className={classes.extraHead}>Reach Us
                    <hr color='red' className={classes.line}></hr></p>
                <div className={classes.locHold}>

                    <p className={classes.locTxt}>
                    Shed No.9, Sr.No. 82 / 6A, House No. 1527, Gurukrupa Industrial Estate, Opp. Venkatesh Engg., Shivane, Pune - 411023, Maharashtra, India.</p>

                </div>
                <div className={classes.locHold}>
                   
                    <p><a href="mailto:info@kprspumps.in" className={classes.locTxt}>info@kprspumps.in</a></p>
                </div>
                <div className={classes.locHold}>
                 
                    <p><a href="tel:9552006841" className={classes.locTxt}>+ 91 9552006841 </a> <br></br><a href="tel:9623772704" className={classes.locTxt}> +91 9623772704</a></p>
                </div>
            </div>
            </div>


            <div className={classes.map}>

            <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.3585300010836!2d73.790568!3d18.4674122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065a7c56561%3A0xc7c48d87dac47246!2sKPR&#39;s%20Pumps!5e0!3m2!1sen!2sin!4v1696842549257!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

        </div>
        <hr className={classes.cont}/>
        <p className={classes.company}>Copyright &#169; 2023 KPR'S PUMPS | Made with
            <img src={hrt} className={classes.hrt}></img> by Cortica Web Solutions Pvt. Ltd</p>
    </div>
    )
}

export default Footer;