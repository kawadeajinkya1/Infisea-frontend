import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Cookies from 'js-cookie';
import ReactPaginate from 'react-paginate';

import Carousel from './../Home/Carousel';
import Crd from './../Home/Crd';
import Wcy from './../Home/Whyinfisea';
import Big from './../Home/Big';
import Dashboard from './Dashboard';
import Nav from './../Nav/hmdn';
import Footer from './../Footer/Ftr';
import classes from './Card.module.css';

const Card = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

    const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 3;

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);

  const slickSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState();



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getproductscs');
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };                                               

    fetchProducts();
  }, []);

  const fetchProduct = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:8000/getproductsinfo/${categoryId}`);
      setProduct(response.data);
      setPrice(response.data.finalPrice)
    } catch (err) {
      console.log(err);
    }                        
  };

  const openPopup = (categoryId) => {
    fetchProduct(categoryId);
    setSelectedProductId(categoryId);
  };

  const closePopup = () => {
    setSelectedProductId(null);
  };


  const [expprice, setExprice] = useState();

      useEffect(() => {
    // Calculate expprice whenever quantity changes
    setExprice(quantity * price);
  }, [quantity, product]);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const AddToCart = async () => {
    const custPrimaryKey = Cookies.get('custPrimaryKey');

    if (custPrimaryKey) {
      const selectedProduct = products.find((p) => p.CategoryID === selectedProductId);

      if (!selectedProduct) {
        console.error('Selected product not found');
        alert('Selected product not found. Please try again.');
        return;
      }

    if (quantity > selectedProduct.StockQuantity) {
      alert(`We don't have ${quantity} units in stock. Available quantity is ${selectedProduct.StockQuantity}.`);
      return;
    }
    
      const cartData = {
        cid: custPrimaryKey,
        productId: selectedProduct.ProductID,
        productName: selectedProduct.ProductName,
        categoryId: selectedProduct.CategoryID,
        //id: selectedProduct.id,
        desc: selectedProduct.Description,
        price: selectedProduct.Price,
        tax: selectedProduct.Tax,
        deliverycharges: selectedProduct.DeliveryCharge,
        finalPrice: selectedProduct.FinalPrice,
        stock: selectedProduct.StockQuantity,
        Weight: selectedProduct.Weight,
        images: selectedProduct.Images,
        available: selectedProduct.IsAvailable,
        quantity: quantity,
        expprice: expprice


      };
      console.log(cartData)

      try {
       const response = await axios.post('http://localhost:8000/addToCart', cartData);
         console.log('Response from server:', response.data);

    if (response.data === 'recordexists') {
        console.log('Record already exists');
        alert('You Have The Product In cart. Please CHECK in the Cart');
      } else if (response.data === 'Productinserted') {
        console.log('Product inserted into the cart');
        alert('Product added to the cart successfully.');
      } else {
        console.log('Unexpected response from the server');
        alert('Unexpected response from the server. Please try again.');
      }

        //alert('Product added to cart!');
      } catch (error) {
        console.error('Error adding product to cart:', error);
        alert('Failed to add product to cart. Please try again.');
      }
    } else {
      alert('Please Login to Your Account for Adding product to the cart  ');
      navigate('/customerlogin');
    }
  };





    const AddToWishlist = async () => {
    const custPrimaryKey = Cookies.get('custPrimaryKey');

    if (custPrimaryKey) {
      const selectedProduct = products.find((p) => p.CategoryID === selectedProductId);

      if (!selectedProduct) {
        console.error('Selected product not found');
        alert('Selected product not found. Please try again.');
        return;
      }

      const cartData = {
        cid: custPrimaryKey,
        productId: selectedProduct.ProductID,
        productName: selectedProduct.ProductName,
        categoryId: selectedProduct.CategoryID,
        //id: selectedProduct.id,
        desc: selectedProduct.Description,
        price: selectedProduct.Price,
        tax: selectedProduct.Tax,
        deliverycharges: selectedProduct.DeliveryCharge,
        finalPrice: selectedProduct.FinalPrice,
        stock: selectedProduct.StockQuantity,
        Weight: selectedProduct.Weight,
        images: selectedProduct.Images,
        available: selectedProduct.IsAvailable,
        quantity: quantity,
        expprice: expprice


      };
      console.log(cartData)

      try {
       const response = await axios.post('http://localhost:8000/addTowishlist', cartData);
         console.log('Response from server:', response.data);

    if (response.data === 'recordexists') {
        console.log('Record already exists');
        alert('You Have The Product In Your WISHLIST. Please CHECK YOUR WISHLIST');
      } else if (response.data === 'Productinserted') {
        console.log('Product inserted into the wishlist');
        alert('Product added to the Wishlist successfully.');
      } else {
        console.log('Unexpected response from the server');
        alert('Unexpected response from the server. Please try again.');
      }

        //alert('Product added to cart!');
      } catch (error) {
        console.error('Error adding product to cart:', error);
        alert('Failed to add product to Wishlist. Contact us to resolve the error.');
      }
    } else {
      alert('Please Login to Your Account for Adding product to the cart  ');
      navigate('/customerlogin');
    }
  };


  const offset = pageNumber * productsPerPage;
  const paginatedProducts = products.slice(offset, offset + productsPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Nav/>
      <Big />
      <Carousel />

      <div className={classes.dd}>
        <div className={classes.Heading}>
          <h3>Our Products </h3>
        </div>

        <div className={classes.items}>
          {paginatedProducts.map((product) => (
            <li key={product.CategoryID} className={classes.card}>
              <div className={classes.item}>
                <div className={classes.imgbox}>
                  <center>
                    <Slider ref={sliderRef} {...slickSettings}>
                      {product.Images && product.Images.split(',').map((image, index) => (
                          <div key={index}>
                            <img src={`http://localhost:8000/uploads/${image}`} alt={`Product ${index + 1}`} className={classes.Image} />
                          </div>
                        ))}
                    </Slider>
                  </center>
                </div>

                <div className={classes.details}>
                  <center>
                    <span className={classes.middle}> PRODUCT INFORMATION</span>
                  </center>
                  <div className={classes.hh}>
                    <h5 className={classes.heading1}>{product.ProductName}</h5>
                    <h5 className={classes.price}> {product.Price}₹</h5>
                  </div>
                  <center>
                    <button className={classes.addToCart} onClick={() => openPopup(product.CategoryID)}>
                      Details
                    </button>
                  </center>

                  {selectedProductId === product.CategoryID && (
                    <div className={classes.popup}>
                      <div className={classes.popupcontent}>
                        <button className={classes.jjj} onClick={closePopup}>
                          X
                        </button>
                        <h5 className={classes.heading1}>{product.ProductName}</h5>
                        <p>
                          <h5 className={classes.price}> {product.Price}₹</h5>
                        </p>
                          <p>
                          <h5 className={classes.price}> {product.DeliveryCharge}₹</h5>
                        </p>
                        <p>
                          <h5 className={classes.price}> {product.Tax}₹</h5>
                        </p>
                        <p>
                          <h5 className={classes.price}> {product.FinalPrice}₹</h5>
                        </p>
                        <div className={classes.Imagessn}>
                          {product.Images &&
                            product.Images.split(',').map((image, index) => (
                              <div key={index}>
                                <img
                                  src={`http://localhost:8000/uploads/${image}`}
                                  alt={`Product ${index + 1}`}
                                  className={classes.Imagess}
                                />
                              </div>
                            ))}
                              
                        </div>
                        <h5 className={classes.heading1}>Product Id : {product.ProductID}</h5>
                        
                           <div className={classes.quantityControl}>
                              <button onClick={decrementQuantity}>-</button>
                                <span>{quantity}</span>
                              <button onClick={incrementQuantity}>+</button>
                            </div>

                            <p>Expected Price: {expprice}₹</p>
                        <br />
                        
                        <button className={classes.Images} onClick={closePopup}>
                          Close
                        </button>
                        <br />
                        <br/>

<div className={classes.btnss}>
                                <button className={classes.addToCartd} onClick={AddToWishlist} value="Add to cart">
                          ADD TO WHISHLIST
                        </button>
                        
                        <button className={classes.addToCart} onClick={AddToCart} value="Add to cart">
                          ADD TO CART
                        </button>
  </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </div>

        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={Math.ceil(products.length / productsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          className={classes.pagination}
        />

      </div>

      {Cookies.get('custPrimaryKey') ? <Dashboard /> : null}

      <Crd />
      <Wcy />
      <Footer/>
    </div>
  );
};

export default Card;

