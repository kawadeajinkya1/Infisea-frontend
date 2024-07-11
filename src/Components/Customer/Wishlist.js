import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Cookies from 'js-cookie';
import classes from './Cart.module.css';

const Wishlist = () => {
  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);

 const custPrimaryKey = Cookies.get('custPrimaryKey');

useEffect(() => {
  // Fetch cart data when the component mounts
  const custPrimaryKey = Cookies.get('custPrimaryKey');

  axios.get('http://localhost:8000/getWishlistData', {
    params: {
      custPrimaryKey: custPrimaryKey,
    },
  })
    .then(response => {
      console.log(response.data);
      setCartData(response.data);
    })
    .catch(error => {
      console.error('Error fetching Whishlist data:', error);
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

  const remove = async(CategoryID) => {
  
    try{
      await axios.delete('http://localhost:8000/removefromWishlist/'+CategoryID, {
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
  <center><h1>Your WISHLIST</h1>    &emsp;
        <button className={classes.addToCart} onClick={handleGoBack}> ←  GO BACK</button>
        </center><br/>
  <table className={classes.table}>
    <thead className={classes.thead}>
      <tr>
        <th className={classes.th}>Product ID</th>
        <th className={classes.th}>Description</th>
        <th className={classes.th}>Product Name</th>
        <th className={classes.th}>Price</th>
        <th className={classes.th}>Delivery Charge</th>
        <th className={classes.th}>Tax</th>
        <th className={classes.th}>Total Price</th>
        <th className={classes.th}>Images</th>
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

               <td className={classes.td}><button className={classes.addToCart1}  onClick={() => remove(products.CategoryID)}>REMOVE</button></td> 
          {/* Add more columns as needed */}
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default Wishlist;
