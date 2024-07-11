import React, { useState, useEffect } from 'react';
import classes from './Upro.module.css';
import styles from './Upro.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import Nav from './../Nav/hmdn';
import Ftr from './../Footer/Ftr';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
axios.defaults.withCredentials = true;


  const Updateproduct = () => {
   const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { CategoryID } = useParams();





  
useEffect(() => {
    // Fetch the default values for each attribute
    const fetchDefaultValues = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/updateproduct/${CategoryID}`);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDefaultValues();
  }, [CategoryID]);




  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      // Handling checkbox input
      setUserData((prevData) => ({
        ...prevData,
        [name]: checked ? 1 : 0,
      }));
    } else {
      // Handling other input types
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };



  const handleFinalPrice = () => {
    // Calculate final price by adding product price and delivery charges
    const finalPrice = parseFloat(userData.price) + parseFloat(userData.deliverycharges) +  + parseFloat(userData.tax);
    setUserData({ ...userData, finalPrice: finalPrice.toFixed(2) }); // Round to 2 decimal places
  };
  

const handleUpdate = async () => {
     
      const formData = new FormData();
 
    formData.append('name', userData.name);
    formData.append('productid', userData.productid);
    formData.append('price', userData.price);
    formData.append('deliverycharges',userData.deliverycharges);
    formData.append('tax',userData.tax);
    formData.append('finalPrice',userData.finalPrice);
    formData.append('quantity', userData.quantity);
    formData.append('weight', userData.weight);
    formData.append('rating', userData.rating);
    formData.append('desc', userData.desc);
    formData.append('isAvailable', userData.isAvailable);
 
 


    try {
      console.log(userData);
      const response = await axios.put(`http://localhost:8000/updateProduct/${CategoryID}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response);
      

      if (response.data === 'error') {
        console.log(response.data);
        alert('Error updating product');
      } else {
            console.log(response.data);
        alert('Product Updated Successfully');
      }
    } catch (err) {
      console.log(err);
     
    }
  };


   const gotodashboard = () => {
    navigate('/Dashboard');
  };




  const [userProfile, setUserProfile] = useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admindashboard');
        setUserProfile(response.data);

      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle error as needed
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/logout');
      Cookies.remove('userPrimaryKey');
      alert('Logout successful');

      window.location.href = '/';
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle error as needed
    }
  };

  
  return (
     <div>
            <Nav/> <br/><br/><br/><br/><br/>
      <center>

          <div className={styles.cont}>
        <div className={styles.fb}>


          <div className={classes.Su}>
      <form className={`${classes.form} ${classes.card}`} onSubmit={handleUpdate}>
                      <div className={classes.card_header}>
                    <h1 className={classes.form_heading}>UPDATE PRODUCT</h1>
                  </div>

    <div className={classes.formclm}>
<div className={classes.formrows}>
          <div className={classes.field}>
            <label htmlFor="name">Product Name</label>
            <input className={classes.input} name="name" type="text" placeholder="Your Product's Name" id="name"  defaultValue={userData.name} onChange={handleChange}    />
          </div>

          <div className={classes.field}>
            <label htmlFor="productid">Product Id</label>
            <input className={classes.input} name="productid" type="text" placeholder="Your Product's Id" id="productid" defaultValue={userData.productid} onChange={handleChange}  />
         </div>

        <div className={classes.field}>
            <label htmlFor="price">Price</label>
            <input className={classes.input} name="price" type="text"  placeholder="Write price of the Product" id="price" defaultValue={userData.price}  onBlur={handleFinalPrice} onChange={handleChange} />
        </div>

        <div className={classes.field}>
            <label htmlFor="deliverycharges">Delivery Charges</label>
            <input className={classes.input} name="deliverycharges" type="text"  placeholder="Write Delivery Charges" id="deliverycharges" defaultValue={userData.deliverycharges}   onBlur={handleFinalPrice} onChange={handleChange} required/>
        </div>

      <div className={classes.field}>
            <label htmlFor="tax">Included Taxes</label>
            <input className={classes.input} name="tax" type="text"  placeholder="Write Delivery Charges" id="tax" defaultValue={userData.tax}  onBlur={handleFinalPrice}  onChange={handleChange} required/>
        </div>


       <div className={classes.field}>
            <label htmlFor="finalPrice">Final Price</label>
            <input className={classes.input} name="finalPrice" type="text"  placeholder="Write Delivery Charges" id="finalPrice" defaultValue={userData.finalPrice} required   disabled />
        </div>

</div>

<div className={classes.formrows}>

        <div className={classes.field}>
            <label htmlFor="quantity">Stock Quantity</label>
            <input className={classes.input} name="quantity" type="text"  placeholder="Quantity of Product" id="quantity" defaultValue={userData.quantity} onChange={handleChange}  />
        </div>

        <div className={classes.field}>
            <label htmlFor="weight">Weight</label>
            <input className={classes.input} name="weight" type="text"  placeholder="Weight of Product" id="weight" defaultValue={userData.weight} onChange={handleChange}  />
        </div>


        <div className={classes.field}>

            <label htmlFor="Rating"> Ratings</label>
           <select className={classes.input} value={userData.rating} onChange={(e) => setUserData({ ...userData, rating: e.target.value})} >
            <option value="0">0</option>
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
          
          </select>

        </div>


          <div className={classes.field}>
            <label htmlFor="desc">Description</label>
            <textarea className={classes.input} name="description" type="text" placeholder="Write About Product" id="description" rows={4} cols={50} defaultValue={userData.desc} onChange={(e) => setUserData({ ...userData, desc: e.target.value})} />
         </div>


          <div className={classes.field}>
            <label htmlFor="isAvailable">Is Available</label>
            <input type="checkbox" name="isAvailable" id="isAvailable" checked={userData.isAvailable} onChange={(e) => setUserData({ ...userData, isAvailable: e.target.checked ? 1 : 0 })}/>
          </div>
</div>
</div>

<br/>


    <div className={`${classes.field} ${classes.field1}`}>
                  <input type="submit" value="Update Product" className={classes.addToCart}  />
        <input type="button" value="Dashboard" className={classes.addToCart} onClick={gotodashboard}/>
        </div>

      </form>
      </div>

      </div>

 <div className={styles.sb}>
          <center><p><b> MY DASHBOARD</b></p></center>


          <div className={styles.sb1}>

            {userProfile ? (
              <div>
                <p className={styles.sbp}>ID: {userProfile.id}</p>
                <p className={styles.sbp}>Name: {userProfile.name}</p>
                <p className={styles.sbp}>Email: {userProfile.email}</p>
                <p className={styles.sbp}>Mobile Number: {userProfile.mobno}</p>
                <p className={styles.sbp}>Unique Id : {userProfile.aid}</p>
              </div>
            ) : (
              <p> <br /><br /><br />Loading...</p>
            )}
          </div>

          <button onClick={handleLogout} className={classes.button}>LOGOUT</button>
        </div>
</div>
      </center>
  
  <Ftr/>
    </div>
  );
};

export default Updateproduct;