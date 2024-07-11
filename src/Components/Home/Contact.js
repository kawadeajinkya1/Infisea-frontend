import React, { useRef } from 'react';
/*import emailjs from '@emailjs/browser';*/


import classes from './Contact.module.css';
import contact from './../../Asset/contact.jpg';
import visit from './../../Asset/visit.png';
import phone from './../../Asset/phone.png';
import mail from './../../Asset/mail.png';
import A from "./../../Asset/emsbg1.avif"








const Cont = () => {
{/*  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5nlyw6e', 'template_87vuotr', form.current, 'bsz7LIwTvX6ZYGIM3')
      .then((result) => {

        alert("Message Sent Successfully !!!")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };*/}
  return (
    <div className={classes.Cmain}> 
      
      {/*    <div className={classes.top}>
      
        <div className={classes.flex}>
        <div className={classes.para1}>
          <h1>Contact Us</h1>
          <p>Need an Expert?<br/>
          You are more than welcome to leave your <br></br>contact info and we will be in touch shortly</p><br></br>
          <div className={classes.Abt12}> 
<img className={classes.Abti} src={A}/>
</div>
          </div>
          <div className={classes.left}>
        {/*  <form ref={form} onSubmit={sendEmail} className={classes.bg}> * /}
        <form className={classes.bg}>
              <label> Frist Name</label><br></br>
              <input type='text' name="name" className={classes.bg1}/><br></br><br></br>
              <label> Last Name</label><br></br>
              <input type='text' name="Lname" className={classes.bg1}></input><br></br><br></br>
              <label> Email address</label><br></br>
              <input type='text'name="email" className={classes.bg1}></input><br></br><br></br>
              <label> Mobile Number</label><br></br>
              <input type='text'name="phn" className={classes.bg1}></input><br></br><br></br>
              <label>Message</label><br></br>
              <textarea cols='45' rows='10' name="message" className={classes.bg1}>

              </textarea><br></br>
              <div>
                <button type="submit" value="Send" className={classes.btn}>SEND</button>
              </div>


            </form>
          </div>
         </div>
      </div>   */}


      
      <div className={classes.add}>
        <div className={classes.frist}>
          <div className={classes.A1}>
      
          <h3 className={classes.hed}>ADDRESS:</h3>
          <p className={classes.Abtp3}>INFISEA, S No 36, 1/2/4, Ashtavinayak Industrial Estate,<br/> Near Canara Bank Narhe, Pune, Maharashtra 411041</p>
          </div>
        </div>
        <div className={classes.second}>
          <div className={classes.A2}>
       
          <h3 className={classes.hed}>CALL US</h3>
          <p className={classes.Abtp3}><a href='tel:9112233188' className={classes.Abtp3}>+91-9112233188</a></p>
          <p className={classes.Abtp3}><a href='tel:9112233177' className={classes.Abtp3}>+91-9112233177</a></p>
     
          </div>

        </div>
        <div className={classes.third}>
          <div className={classes.A3}>
    
          <h3 className={classes.hed}>MESSAGE US</h3>
          <p className={classes.Abtp3}><a href='mailto:swastikelectrotech.pune@gmail.com' className={classes.Abtp3}>swastikelectrotech.pune@gmail.com</a></p>

          </div>

         
        </div>
      </div>

      <br></br>
      <div className={classes.bottom}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1888.6475542096496!2d73.82058821910064!3d18.44649820927969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953e4c951a33%3A0xa03077bd87a9b301!2sSWASTIK%20ELECTROTECH%20AUTOMATION!5e0!3m2!1sen!2sus!4v1702464744259!5m2!1sen!2sus" className={classes.map}></iframe>

      </div>

    </div>
  )
  
}

export default Cont;