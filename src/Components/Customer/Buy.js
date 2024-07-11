import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './Buy.module.css';
import { v4 as uuidv4 } from 'uuid';
axios.defaults.withCredentials=true;

const Buy = () => {
  const navigate = useNavigate();

  // Retrieve values from local storage
  const custPrimaryKey = localStorage.getItem('custPrimaryKey');
  const totalExpprice = localStorage.getItem('totalExpprice');
  const productsDetails = JSON.parse(localStorage.getItem('productsDetails')) || [];
const fixedTotalExpprice = parseFloat(totalExpprice).toFixed(2); 
  // State for user data and updated data
  const [userData, setUserData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('cash');
  
  // State for controlling checkbox and popup visibility
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [showAdditionalInfo2, setShowAdditionalInfo2] = useState(false);

  // Effect to fetch user data
  useEffect(() => {
    const fetchUserAddress = async () => {
      try {
        const response = await axios.get('http://localhost:8000/gcaddr');
        setUserData(response.data);
        setUpdatedData(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Optionally update the state to show the error message
      }
    };

    fetchUserAddress();
  }, []); // If custPrimaryKey is expected to change, include it in dependency array

  // Function to handle profile update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:8000/updatecustadd', updatedData);
      if (response.data !== 'error') {
        console.log(response.data);
        alert('Address updated successfully!');
        setShowAdditionalInfo(!showAdditionalInfo);
         setUserData(updatedData); 
      }
    } catch (error) {
      console.error('Error updating Address:', error);
      alert('Address Not Updated! Please Try Again');
    }
  };

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle going back
  const handleGoBack = () => {
    setShowAdditionalInfo(!showAdditionalInfo); // Close the popup
  };

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked); // Toggle checkbox state
    setShowAdditionalInfo(true); // Toggle additional info visibility
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setShowAdditionalInfo2(e.target.value === 'online'); 
  };



 const orderid = uuidv4();

  const handleNext = async () => {   
try{
const response =  await axios.post('http://localhost:8000/fpidcc',  {custprimary: custPrimaryKey,orderid: orderid,productsDetails: productsDetails,fixedTotalExpprice:fixedTotalExpprice});
if(response.data=="error"){
   alert("Please Check your console As there is something missing in your code")
} else if(response.data=="ProductInserted"){
   alert("Your Order is Confirmed. We Will Reach You Soon");
 navigate('/OrderHistory');;
} else if(response.data=="InsufficientData"){
     alert("Sorry for inconvience, We dont have that much Quantity");
}else {
     alert("Internal Server Error");
}

}
    catch(err){
console.log(err);
    }

  };

  return (
    <div>
      <p>Customer Primary Key: {custPrimaryKey}</p>
      <br /><br />

      <div className={classes.flex}>
        <p className={classes.pp}>ProductName</p>
        <p className={classes.pp}>Quantity</p>
        <p className={classes.pp}>Price</p>
        <p className={classes.pp}>Delivery Charges</p>
        <p className={classes.pp}>Tax</p>
        <p className={classes.pp}>Total</p>
        <p className={classes.pp}>Total Price</p>
        <br />
      </div>

      {productsDetails.map((product, index) => (
        <div key={index} className={classes.flex}>
          <p className={classes.pp}>{product.ProductName}</p>
          <p className={classes.pp}>{product.Quantity}</p>
          <p className={classes.pp}>{product.Price}</p>
          <p className={classes.pp}>{product.Delivery}</p>
          <p className={classes.pp}>{product.Tax}</p>
          <p className={classes.pp}>{product.Total}</p>
          <p className={classes.pp}>{product.Expprice}</p>
          <br/>
        </div>
      ))}

      <br /><br />

      <center>
        <p>Total Price: {fixedTotalExpprice}</p>
        <input
          type="checkbox"
          checked={checkboxChecked}
          onChange={handleCheckboxChange}
        />
        The Above items, I have selected are Correct and I want to Order It. I have also Read The TERMS AND CONDITIONS
        <br /><br />
      </center>

      {showAdditionalInfo && checkboxChecked && (
        <div className={classes.additionalInfo}>
          <div className={classes.popup}>
            <div className={classes.popupinner}>
              <div className={classes.Su}>
                <form className={`${classes.form} ${classes.card}`} onSubmit={handleUpdate}>
                  <div className={classes.card_header}>
                    <h1 className={classes.form_heading}>Check Your Address Once...</h1>
                  </div>
                  <div className={classes.sde}>
                    <div className={classes.sde1}>
                      <div className={classes.field}>
                        <label htmlFor="al1">Address Line 1</label>
                        <input className={classes.input} name="al1" type="text" placeholder="Enter Building name, Survey no, Flat no" id="al1" defaultValue={userData.al1} onChange={handleChange}   required/>
                      </div>
                      <div className={classes.field}>
                        <label htmlFor="al2">Address Line 2</label>
                        <input className={classes.input} name="al2" type="text" placeholder="Lane no, Road name, Landmark " id="al2" defaultValue={userData.al2}  onChange={handleChange}  required/>
                      </div>
                      <div className={classes.field}>
                        <label htmlFor="vt">Village / Town / City</label>
                        <input className={classes.input} name="vt" type="text" placeholder="Village / Town / City" id="vt" defaultValue={userData.vt}  onChange={handleChange} required/>
                      </div>
                      <div className={classes.field}>
                        <label htmlFor="State"> State</label>
                        <input className={classes.input} name="state" type="text" placeholder="State" id="state" defaultValue={userData.state}  onChange={handleChange} required/>
                      </div>
                    </div>
                    <div className={classes.sde1}>
                      <div className={classes.field}>
                        <label htmlFor="country">Country</label>
                        <input className={classes.input} name="country" type="text" placeholder="Country " id="country" defaultValue={userData.country}  onChange={handleChange} required/>
                      </div>
                      <div className={classes.field}>
                        <label htmlFor="pincode">Pincode</label>
                        <input className={classes.input} name="pin" type="text" placeholder="Enter Your Pincode " id="pin"  minLength={6} maxLength={6} pattern="[0-9]*"  defaultValue={userData.pin}  onChange={handleChange} required/>
                      </div>
                      <div className={classes.field}>
                        <label htmlFor="amno">Alternate Mobile Number</label>
                        <input className={classes.input} name="amno" type="text"  placeholder="Eg. 9112233177 (10 DIGITS ALLOWED)" id="amno" minLength={10} maxLength={10} pattern="[0-9]*" defaultValue={userData.amno}  onChange={handleChange}/>
                      </div>
                      <div className={classes.field}>
                        <input type="submit" value="Update Profile" className={classes.button} />
                      </div>
                    </div>
                  </div>
                  <br />
                  <center>
                    <button className={classes.button} onClick={handleGoBack}>Adrress Is Correct</button>
                  </center>  
                </form>
              </div>
              <br />
            </div>
          </div>
        </div>
      )}

      {checkboxChecked && (
        <div>

          <div className={classes.pymd}>
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="cash">Cash on Delivery</label>

          <input
            type="radio"
            id="online"
            name="paymentMethod"
            value="online"
            checked={paymentMethod === 'online'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="online">Online Payment</label>
          </div>

          {paymentMethod === 'online' && (
            <div className={classes.additionalInfo2}>
              <div className={classes.popup}>
                <div className={classes.popupinner}>
                  <h3>Online Payment Popup</h3>
                  <p>This is the online payment popup content.</p>
                  <button onClick={handleNext}>Next</button>
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'cash' && (
            <center>
              <button onClick={handleNext}>CONFIRM ORDER</button>
            </center>
          )}
        </div>
      )}
    </div>
  );
};

export default Buy;
