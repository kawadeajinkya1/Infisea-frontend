
import React, { useState, useEffect, useRef } from 'react';
import classes from './Orders.module.css';
import styles from './Orders.module.css';
import Nav from '../Nav/hmdn';
import Ftr from '../Footer/Ftr';
import axios from 'axios';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

import { useNavigate, Link } from 'react-router-dom';
axios.defaults.withCredentials = true;

const UpdateProfile = () => {

  const [userData, setUserData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const userPrimaryKeyCookie = Cookies.get('userPrimaryKey');



  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admindashboard');
        setUserData(response.data);
        setUpdatedData(response.data);
        //  console.log(userData)
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle error as needed
      }
    };

    fetchUserProfile();
  }, []);




  const handleGoBack = () => {
    navigate('/Admin_dashboard');
  };





  const [d1, setOrders] = useState(true);
  const [d2, setNewOrders] = useState(false);
  const [d3, setOutOrders] = useState(false);
  const [d4, setDeliveredorder] = useState(false);
  const [d5, setCanceledorders] = useState(false);
  const [d6, setdashboard] = useState(false);



  const ch1 = () => {
    setOrders(true);
    setNewOrders(false);
    setOutOrders(false);
    setDeliveredorder(false);
    setCanceledorders(false);
    setdashboard(false);
    window.scrollTo(0, 0);
  }

  const ch2 = () => {
    setOrders(false);
    setNewOrders(true);
    setOutOrders(false);
    setDeliveredorder(false);
    setCanceledorders(false);
    setdashboard(false);
    window.scrollTo(0, 0);
  }

  const ch3 = () => {
    setOrders(false);
    setNewOrders(false);
    setOutOrders(true);
    setDeliveredorder(false);
    setCanceledorders(false);
    setdashboard(false);
    window.scrollTo(0, 0);

  }

  const ch4 = () => {
    setOrders(false);
    setNewOrders(false);
    setOutOrders(false);
    setDeliveredorder(true);
    setCanceledorders(false);
    window.scrollTo(0, 0);

  }

  const ch5 = () => {
    setOrders(false);
    setNewOrders(false);
    setOutOrders(false);
    setDeliveredorder(false);
    setCanceledorders(true);
    setdashboard(false);
    window.scrollTo(0, 0);

  }

  const ch6 = () => {
    window.scroll(0,0)
    navigate('/Dashboard')
    

  }

  // ----------------------------------------------------------------


  const [allorders, setAllorders] = useState([]);
  const [placedorders, setplacedorders] = useState([]);
  const [ofdorders, setofdorders] = useState([]);
  const [deliveredorders, setdeliverdorders] = useState([]);
  const [canceldorders, setcanceledorders] = useState([]);




  useEffect(() => {
    const fetchAllorders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/allorders');
        setAllorders(response.data);

      } catch (error) {
        console.error('Error fetching Orders:', error);
        // Handle error as needed
      }
    };

    fetchAllorders();
  }, []);


  useEffect(() => {

    const fetchNeworders = async () => {

      try {
        const response = await axios.get('http://localhost:8000/neworders')
        setplacedorders(response.data);
      }
      catch (error) {
        console.error('Error Fetching New Orders :', error)
      }
    }
    fetchNeworders();
  }, []);



  useEffect(() => {
    const fetchofdorders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/ofdorders')
        setofdorders(response.data);
      }
      catch (error) {
        console.error('Error while fetching Out for Delivery Orders :', error)
      }
    }
    fetchofdorders();
  }, []);



  useEffect(() => {
    const fetchdeliveredorders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/deliveredorders')
        setdeliverdorders(response.data);
      }
      catch (err) {
        console.log('Error while fetching Delivered Orders :', err)
      }
    }
    fetchdeliveredorders();

  }, []);


  useEffect(() => {
    const fetchcanceledorders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/canceledorders')
        setcanceledorders(response.data);
      }
      catch (err) {
        console.log('Error while fetching Out for canceled Orders :', err)
      }

    }
    fetchcanceledorders();
  }, [])

  {/*
*/}

  const handleStatusChange = async (orderID, event) => {
    const newStatus = event.target.value;

    try {
      const response = await axios.put('http://localhost:8000/updateOrderStatus', { OrderID: orderID, newStatus });
      if (response.data !== 'error') {
        console.log(response.data.message);
        alert('Order status updated successfully!');
        window.location.reload()
        // Optionally, update the local state to reflect the status change immediately
        // You might want to refresh the order list or handle it locally
      } else {
        console.error('Error updating order status:', response.data);
        alert('Order status not updated! Please try again.');
      }
    } catch (error) {
      console.error('There was an error updating the order status!', error);
      alert('Order status not updated! Please try again.');
    }
  };



  const handleStatusChange2 = async (orderID, event) => {


    try {
      const response = await axios.put('http://localhost:8000/updateOrderStatus2', { OrderID: orderID });
      if (response.data !== 'error') {
        console.log(response.data.message);
        alert('Order  Has Been Canceled!');
        window.location.reload()
        // Optionally, update the local state to reflect the status change immediately
        // You might want to refresh the order list or handle it locally
      } else {
        console.error('Error updating order status:', response.data);
        alert('Order status not updated! Please try again.');
      }
    } catch (error) {
      console.error('There was an error updating the order status!', error);
      alert('Order status not updated! Please try again.');
    }
  };






  // ----------------------------------------------------------------




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


  // ----------------------------------------------------------------

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };



  return (
    <>
      <Nav />



      <div className={styles.cont}>
        <div className={styles.fb}>
          <div className={classes.rn2}>
            <button className={d1 ? styles.AccBtn1 : styles.AccBtn} onClick={ch1}>All Orders</button>
            <button className={d2 ? styles.AccBtn1 : styles.AccBtn} onClick={ch2}>New </button>
            <button className={d3 ? styles.AccBtn1 : styles.AccBtn} onClick={ch3}>O.F.Delivery </button>
            <button className={d4 ? styles.AccBtn1 : styles.AccBtn} onClick={ch4}>Delivered</button>
            <button className={d5 ? styles.AccBtn1 : styles.AccBtn} onClick={ch5}>Cancelled</button>
            <button className={d6 ? styles.AccBtn1 : styles.AccBtn} onClick={ch6}>Dashboard</button>
          </div>
          <br /><br />
          <div className={classes.rn}>

            {d1 && <div className={styles.r}>

              {allorders.map((order) => (
                <div className={classes.orderContainer} key={order.OrderID}>
                  <div className={classes.orderDetails}>
                    <div className={classes.fise}>
                      <div className={classes.firstDiv}>
                        <p><span className={classes.span}> Order ID: </span> {order.OrderID}</p>
                        <p className={classes.p1}><span className={classes.span}> Order Date: </span>{formatDate(order.orderdate)}</p>
                        <p className={classes.p1}><span className={classes.span}> Alternate Mobile No: </span>{order.amno}</p>
                      </div>
                      <div className={classes.secondDiv}>
                        <p><span className={classes.span}> Name: </span>{order.cname}</p>
                        <p className={classes.p1}><span className={classes.span}> Mobile No: </span>{order.mobno}</p>
                        <p className={classes.p1}><span className={classes.span}> Address: </span>{order.adl1} {order.adl2}
                          {order.vtc}, {order.state}, {order.country}, {order.pin}</p>
                      </div>
                    </div>
                    <hr className={classes.hr}></hr><br />
                    <div className={classes.fourthDiv}>
                      <center className={classes.span}>Product Details</center>
                      <br />
                      {order.ProductNames.split(',').map((name, index) => (
                        <div key={index} className={classes.productDetails}>
                          <p><span className={classes.span}> Product: </span>{name}</p>
                          <p><span className={classes.span}> Base Price: </span>{order.Fps.split(',')[index]}</p>
                          <p><span className={classes.span}> Quantity: </span>{order.Quantities.split(',')[index]}</p>
                          <p><span className={classes.span}> Price:</span> {order.Exp.split(',')[index]}</p>
                        </div>
                      ))}
                    </div>
                    <hr className={classes.hr}></hr>
                    <br />
                    <div className={classes.fifthDiv}>
                      <p><span className={classes.span}> Total: </span>{order.Total} ₹</p>
                      <p><span className={classes.span}> Status: </span> {order.status}</p>
                    </div>


                  </div>
                </div>
              ))}


            </div>}


            {d2 && <div className={classes.r}>


              {placedorders.map((order) => (
                <div className={classes.orderContainer} key={order.OrderID}>
                  <div className={classes.orderDetails}>
                    <div className={classes.fise}>
                      <div className={classes.firstDiv}>
                        <p><span className={classes.span}> Order ID: </span> {order.OrderID}</p>
                        <p className={classes.p1}><span className={classes.span}> Order Date: </span>{formatDate(order.orderdate)}</p>
                        <p className={classes.p1}><span className={classes.span}> Alternate Mobile No: </span>{order.amno}</p>
                      </div>
                      <div className={classes.secondDiv}>
                        <p><span className={classes.span}> Name: </span>{order.cname}</p>
                        <p className={classes.p1}><span className={classes.span}> Mobile No: </span>{order.mobno}</p>
                        <p className={classes.p1}><span className={classes.span}> Address: </span>{order.adl1} {order.adl2}
                          {order.vtc}, {order.state}, {order.country}, {order.pin}</p>
                      </div>
                    </div>
                    <hr className={classes.hr}></hr><br />
                    <div className={classes.fourthDiv}>
                      <center className={classes.span}>Product Details</center>
                      <br />
                      {order.ProductNames.split(',').map((name, index) => (
                        <div key={index} className={classes.productDetails}>
                          <p><span className={classes.span}> Product: </span>{name}</p>
                          <p><span className={classes.span}> Base Price: </span>{order.Fps.split(',')[index]}</p>
                          <p><span className={classes.span}> Quantity: </span>{order.Quantities.split(',')[index]}</p>
                          <p><span className={classes.span}> Price:</span> {order.Exp.split(',')[index]}</p>
                        </div>
                      ))}
                    </div>
                    <hr className={classes.hr}></hr>       <br />
                    <div className={classes.fifthDiv}>
                      <p><span className={classes.span}> Total: </span>{order.Total} ₹</p>
                      <p><span className={classes.span}> Status: </span>
                        <select
                          defaultValue={order.status}
                          onChange={(event) => handleStatusChange(order.OrderID, event)}
                        >
                          <option value="placed" disabled >Placed</option>
                          <option value="ofd">Out for Delivery</option>

                        </select>
                      </p>
                    </div>

                    <center>                         <button className={classes.addToCart} onClick={() => handleStatusChange2(order.OrderID)}>REMOVE</button></center>

                  </div>
                </div>
              ))}

            </div>}


            {d3 && <div className={classes.r}>

              {ofdorders.map((order) => (
                <div className={classes.orderContainer} key={order.OrderID}>
                  <div className={classes.orderDetails}>
                    <div className={classes.fise}>
                      <div className={classes.firstDiv}>
                        <p><span className={classes.span}> Order ID: </span> {order.OrderID}</p>
                        <p className={classes.p1}><span className={classes.span}> Order Date: </span>{formatDate(order.orderdate)}</p>
                        <p className={classes.p1}><span className={classes.span}> Alternate Mobile No: </span>{order.amno}</p>
                      </div>
                      <div className={classes.secondDiv}>
                        <p><span className={classes.span}> Name: </span>{order.cname}</p>
                        <p className={classes.p1}><span className={classes.span}> Mobile No: </span>{order.mobno}</p>
                        <p className={classes.p1}><span className={classes.span}> Address: </span>{order.adl1} {order.adl2}
                          {order.vtc}, {order.state}, {order.country}, {order.pin}</p>
                      </div>
                    </div>
                    <hr className={classes.hr}></hr><br />
                    <div className={classes.fourthDiv}>
                      <center className={classes.span}>Product Details</center>
                      <br />
                      {order.ProductNames.split(',').map((name, index) => (
                        <div key={index} className={classes.productDetails}>
                          <p><span className={classes.span}> Product: </span>{name}</p>
                          <p><span className={classes.span}> Base Price: </span>{order.Fps.split(',')[index]}</p>
                          <p><span className={classes.span}> Quantity: </span>{order.Quantities.split(',')[index]}</p>
                          <p><span className={classes.span}> Price:</span> {order.Exp.split(',')[index]}</p>
                        </div>
                      ))}
                    </div>
                    <hr className={classes.hr}></hr>       <br />
                    <div className={classes.fifthDiv}>
                      <p><span className={classes.span}> Total: </span>{order.Total} ₹</p>
                      <p><span className={classes.span}> Status: </span>
                        <select
                          defaultValue={order.status}
                          onChange={(event) => handleStatusChange(order.OrderID, event)}
                        >
                          <option value="ofd" disabled >Out For Delivery</option>
                          <option value="delivered">Delivered</option>

                        </select>
                      </p>
                    </div>

                  </div>
                </div>
              ))}


            </div>}



            {d4 && <div className={classes.r}>


              {deliveredorders.map((order) => (
                <div className={classes.orderContainer} key={order.OrderID}>
                  <div className={classes.orderDetails}>
                    <div className={classes.fise}>
                      <div className={classes.firstDiv}>
                        <p><span className={classes.span}> Order ID: </span> {order.OrderID}</p>
                        <p className={classes.p1}><span className={classes.span}> Order Date: </span>{formatDate(order.orderdate)}</p>
                        <p className={classes.p1}><span className={classes.span}> Alternate Mobile No: </span>{order.amno}</p>
                      </div>
                      <div className={classes.secondDiv}>
                        <p><span className={classes.span}> Name: </span>{order.cname}</p>
                        <p className={classes.p1}><span className={classes.span}> Mobile No: </span>{order.mobno}</p>
                        <p className={classes.p1}><span className={classes.span}> Address: </span>{order.adl1} {order.adl2}
                          {order.vtc}, {order.state}, {order.country}, {order.pin}</p>
                      </div>
                    </div>
                    <hr className={classes.hr}></hr><br />
                    <div className={classes.fourthDiv}>
                      <center className={classes.span}>Product Details</center>
                      <br />
                      {order.ProductNames.split(',').map((name, index) => (
                        <div key={index} className={classes.productDetails}>
                          <p><span className={classes.span}> Product: </span>{name}</p>
                          <p><span className={classes.span}> Base Price: </span>{order.Fps.split(',')[index]}</p>
                          <p><span className={classes.span}> Quantity: </span>{order.Quantities.split(',')[index]}</p>
                          <p><span className={classes.span}> Price:</span> {order.Exp.split(',')[index]}</p>
                        </div>
                      ))}
                    </div>
                    <hr className={classes.hr}></hr>
                    <div className={classes.fifthDiv}>
                      <p><span className={classes.span}> Total: </span>{order.Total} ₹</p>
                      <p><span className={classes.span}> Status: </span>{order.status}</p>
                    </div>


                  </div>
                </div>
              ))}

            </div>}


            {d5 && <div className={classes.r}>


              {canceldorders.map((order) => (
                <div className={classes.orderContainer} key={order.OrderID}>
                  <div className={classes.orderDetails}>
                    <div className={classes.fise}>
                      <div className={classes.firstDiv}>
                        <p><span className={classes.span}> Order ID: </span> {order.OrderID}</p>
                        <p className={classes.p1}><span className={classes.span}> Order Date: </span>{formatDate(order.orderdate)}</p>
                        <p className={classes.p1}><span className={classes.span}> Alternate Mobile No: </span>{order.amno}</p>
                      </div>
                      <div className={classes.secondDiv}>
                        <p><span className={classes.span}> Name: </span>{order.cname}</p>
                        <p className={classes.p1}><span className={classes.span}> Mobile No: </span>{order.mobno}</p>
                        <p className={classes.p1}><span className={classes.span}> Address: </span>{order.adl1} {order.adl2}
                          {order.vtc}, {order.state}, {order.country}, {order.pin}</p>
                      </div>
                    </div>
                    <hr className={classes.hr}></hr><br />
                    <div className={classes.fourthDiv}>
                      <center className={classes.span}>Product Details</center>
                      <br />
                      {order.ProductNames.split(',').map((name, index) => (
                        <div key={index} className={classes.productDetails}>
                          <p><span className={classes.span}> Product: </span>{name}</p>
                          <p><span className={classes.span}> Base Price: </span>{order.Fps.split(',')[index]}</p>
                          <p><span className={classes.span}> Quantity: </span>{order.Quantities.split(',')[index]}</p>
                          <p><span className={classes.span}> Price:</span> {order.Exp.split(',')[index]}</p>
                        </div>
                      ))}
                    </div>
                    <hr className={classes.hr}></hr>       <br />
                    <div className={classes.fifthDiv}>
                      <p><span className={classes.span}> Total: </span>{order.Total} ₹</p>
                      <p><span className={classes.span}> Status: </span>{order.status}</p>
                    </div>
                    <hr className={classes.hr}></hr>

                  </div>
                </div>
              ))}

            </div>}

          </div>

        </div>
        <div className={styles.sb}>
          <center><p><b> MY DASHBOARD</b></p></center>


          <div className={styles.sb1}>

            {userProfile ? (
              <div>
                {/*<p className={styles.sbp}>ID: {userProfile.id}</p>*/}
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

      <br />

      <Ftr />
    </>
  );
};

export default UpdateProfile;
