import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Cookies from 'js-cookie';
import classes from './Cart.module.css';
import Nav from './../Nav/hmdn';

const Cart = () => {



  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);
   const totalExpprice = cartData.reduce((acc, product) => acc + parseFloat(product.expprice), 0);

 const custPrimaryKey = Cookies.get('custPrimaryKey');

useEffect(() => {
  // Fetch cart data when the component mounts
  const custPrimaryKey = Cookies.get('custPrimaryKey');

  axios.get('http://localhost:8000/getCartData', {
    params: {
      custPrimaryKey: custPrimaryKey,
    },
  })
    .then(response => {
      console.log(response.data);
      setCartData(response.data);
    })
    .catch(error => {
      console.error('Error fetching cart data:', error);
    });
}, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);


   const sliderRef = useRef(null);
  const navigate = useNavigate();  

  const slickSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

 const handleGoBack= () => {
       navigate('/Home');
  };



const handleBuy = () => {
  const productsDetails = cartData?.map(product => ({
    ProductName: product.ProductName,
    ProductID : product.ProductID,
    Description : product.Description,
    Quantity: product.Quantity,
    Price: product.Price,
    Tax: product.Tax,
    Delivery : product.DeliveryCharge,
    Total : product.FinalPrice,
    Expprice: product.expprice,
    CategoryID: product.CategoryID,
    Weight : product.Weight }));

  if (productsDetails && productsDetails.length > 0) {
    // Store productsDetails in local storage
    localStorage.setItem('custPrimaryKey', custPrimaryKey);
    localStorage.setItem('totalExpprice', totalExpprice);
    localStorage.setItem('productsDetails', JSON.stringify(productsDetails));

    // Navigate to the Buy page
    navigate('/Buy');
  } else {
    console.error('No products details found');
  }
};



  const remove = async(CategoryID) => {
  
    try{
      await axios.delete('http://localhost:8000/removefromcart/'+CategoryID, {
      params: {
      custPrimaryKey: custPrimaryKey,
    },
      })
      window.location.reload();
    }
    catch(err){
      console.log(err);
    
    }
  };

  return (
   /* <div>
      <h1>Your Cart</h1>
      <div>
        {cartData.map(products => (
          <div key={products.ProductId}>
            <p>{products.ProductID} - {products.Description} - {products.ProductName} - {products.Price} -  <Slider ref={sliderRef} {...slickSettings}>
                      {products.Images && products.Images.split(',').map((image, index) => (
                          <div key={index}>
                            <img src={`http://localhost:8000/uploads/${image}`} alt={`Product ${index + 1}`} className={classes.Image} />
                          </div>
                        ))}
                    </Slider>  </p>
            {/* Add more details as needed * /}
          </div>
        ))}
      </div>
     
    </div>*/
    <div>
        <Nav/>
  <center><h1>Your Cart</h1>    &emsp;
        <button className={classes.addToCart} onClick={handleGoBack}> ←  GO BACK</button>
        </center><br/>
  <table className={classes.table}>
    <thead className={classes.thead}>
      <tr>
        <th className={classes.th}>Product ID</th>
        <th className={classes.th}>Description</th>
        <th className={classes.th}>Product Name</th>
        <th className={classes.th}>Price</th>  
        <th className={classes.th}>Delivery</th>
        <th className={classes.th}>Tax</th>
        <th className={classes.th}>Total</th>
        <th className={classes.th}>Images</th>
        <th className={classes.th}>Quantity</th>
        <th className={classes.th}>Expected Price</th>
       <th className={classes.th} colspan="2">Operations</th>
        {/* Add more headers as needed */}
      </tr>
    </thead>
    <tbody>
      {cartData.map(products => (
        <tr key={products.ProductId}>
          <td className={classes.td}>{products.ProductID}</td>
          <td className={classes.td}>{products.Description}</td>
          <td className={classes.td}>{products.ProductName}</td>
          <td className={classes.td}>{products.Price}</td>
          <td className={classes.td}>{products.DeliveryCharge}</td>
          <td className={classes.td}>{products.Tax}</td>
          <td className={classes.td}>{products.FinalPrice}</td>
          <td className={classes.td}><center>
            <Slider ref={sliderRef} {...slickSettings}    className={classes.imgs}>
              {products.Images &&
                products.Images.split(',').map((image, index) => (
                  <div key={index}>
                    <img
                      src={`http://localhost:8000/uploads/${image}`}
                      alt={`Product ${index + 1}`}
                      className={classes.img}
                    />
                  </div>
                ))}
            </Slider>
            </center>
          </td>
               <td className={classes.td}>{products.Quantity}  </td>
                <td className={classes.td}>{products.expprice}</td>
               <td className={classes.td}><button className={classes.addToCart1}  onClick={() => remove(products.CategoryID)}>REMOVE</button></td> 
          {/* Add more columns as needed */}
        </tr>
      ))}
    </tbody>
  </table>


 <div className={classes.totalExpprice}>
         <p>Number of Items in Cart: {cartData.length}</p>
        <p>Total Price: {totalExpprice.toFixed(2)}</p>

        <button className={classes.addToCart} onClick={handleBuy}> <b>BUY</b></button>
      </div>


</div>

  );
};

export default Cart;
