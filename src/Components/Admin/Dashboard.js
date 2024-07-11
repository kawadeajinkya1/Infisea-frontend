
import React, { useState, useEffect, useRef } from 'react';
import "./Dashboard.module.css";
import classes from "./Dashboard.module.css"
import styles from './Dashboard.module.css';
import Nav from '../Nav/hmdn';
import Ftr from '../Footer/Ftr';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
axios.defaults.withCredentials = true;



function Dlunch_order() {

  const [d1, setUpdateProfile] = useState(true);
  const [d2, setAddProducts] = useState(false);
  const [d3, setViewProducts] = useState(false);
  const [d4, setOrderDetails] = useState(false);
  const [d5, setAddAdmin] = useState(false);

  const [userData, setUserData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const userPrimaryKeyCookie = Cookies.get('userPrimaryKey');
const token ='Nothing';

  const ch1 = () => {
    setUpdateProfile(true);
    setAddProducts(false);
    setViewProducts(false);
    setAddAdmin(false);
    window.scrollTo(0, 0);
  }

  const ch2 = () => {
    setUpdateProfile(false);
    setAddProducts(true);
    setViewProducts(false);
    setAddAdmin(false);
    window.scrollTo(0, 0);
  }

  const ch3 = () => {
    setUpdateProfile(false);
    setAddProducts(false);
    setViewProducts(true);
    setAddAdmin(false);


  }

  const ch4 = () => {

    setAddAdmin(false);
    setUpdateProfile(false);
    setAddProducts(false);
    setViewProducts(true);
    navigate('/Orders');

  }

  const ch5 = () => {


    setUpdateProfile(false);
    setAddProducts(false);
    setViewProducts(false);
    setAddAdmin(true);
    window.scrollTo(0, 0);

  }


  // ----------------------------------------------------------------



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


  const handleUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:8000/updateadminprofile', updatedData);
      if (response.data != 'error') {
        console.log(response.data);
        alert('Profile updated successfully!');
        //navigate('/Admin_dashboard');
      }

    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Profile Not Updated! Please Try Again');
    }
  };


  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };


  const handleGoBack = () => {
    navigate('/Dashboard');

    ch1();
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleGoLogin = () => {
    navigate('/login');
  };



  // ----------------------------------------------------------------



  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize Slick slider once the component has mounted
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Move to the first slide initially (optional)
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


    // Add more settings as per your requirement
  };


  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getproducts');
        console.log(response);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);


  const remove = async (CategoryID) => {

    try {
      await axios.delete('http://localhost:8000/removeproduct/' + CategoryID, {
      })
      window.location.reload();
    }
    catch (err) {
      console.log(err);

    }
  };





  // ----------------------------------------------------------------




  const [value, setValue] = useState({
    id: uuidv4(),
    name: '',
    productid: '',
    price: '',
    deliverycharges: '',
    finalPrice: '',
    tax: '',
    quantity: '',
    weight: '',
    ratings: "5",
    desc: '',
    selectedFiles: [],
    isAvailable: 0
  });


  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('id', value.id);
    formData.append('name', value.name);
    formData.append('productid', value.productid);
    formData.append('price', value.price);
    formData.append('deliverycharges', value.deliverycharges);
    formData.append('quantity', value.quantity);
    formData.append('weight', value.weight);
    formData.append('ratings', value.ratings);
    formData.append('desc', value.desc);
    formData.append('isAvailable', value.isAvailable);
    formData.append('finalPrice', value.finalPrice);
    formData.append('tax', value.tax);

    for (let i = 0; i < value.selectedFiles.length; i++) {
      formData.append('images', value.selectedFiles[i]);
    }

    try {
      const response = await axios.post('http://localhost:8000/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response);

      if (response.data === 'error') {
        alert(
          'YOUR EMAIL IS ALREADY REGISTER. PLEASE TRY LOGIN WITH OLD ACCOUNT OR USE ANOTHER CREDENTIALS'
        );
      } else {
        alert('Product Added Successfully');
      }
    } catch (err) {
      console.log(err);
    }
  };


  const handleFinalPrice = () => {
    // Calculate final price by adding product price and delivery charges
    const finalPrice = parseFloat(value.price) + parseFloat(value.deliverycharges) + + parseFloat(value.tax);
    setValue({ ...value, finalPrice: finalPrice.toFixed(2) }); // Round to 2 decimal places
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


  const submitForm = async (event) => {
    event.preventDefault();
    //console.log(value)

    try {
      const response = await axios.post('http://localhost:8000/register', value);
      console.log(response);
      if (response.data == 'error') {
        alert("YOUR EMAIL OR MOBILE IS ALREADY REGISTER. PLEASE TRY LOGIN WITH OLD ACCOUNT OR USE ANOTHER CREDENTIALS")
      } else {
        alert("Data Registered Successfully");
        setUpdateProfile(true);
        window.scroll(0,0)
      }


    } catch (err) {
      console.log(err)
    }


  }

  return (
    <>
      <Nav />



      <div className={styles.cont}>
        <div className={styles.fb}>
          <div className={classes.rn2}>
            <button className={d1 ? styles.AccBtn1 : styles.AccBtn} onClick={ch1}>Update Profile</button>
            <button className={d2 ? styles.AccBtn1 : styles.AccBtn} onClick={ch2}>View Products </button>
            <button className={d3 ? styles.AccBtn1 : styles.AccBtn} onClick={ch3}>Add Products</button>
            <button className={d5 ? styles.AccBtn1 : styles.AccBtn} onClick={ch5}>Add Admin</button>
            <button className={d4 ? styles.AccBtn1 : styles.AccBtn} onClick={ch4}>Order Details</button>
          </div>
          <br /><br />
          <div className={classes.rn}>

            {d1 && <div className={styles.r}>



              <div className={classes.Su}>

                <form className={`${classes.form} ${classes.card}`} onSubmit={handleUpdate} >
                  <div className={classes.card_header}>
                    <h1 className={classes.form_heading}>UPDATE YOUR PROFILE</h1>
                  </div>
                  <div className={classes.formclm}>
                    <div className={classes.formrows}>
                      <div className={classes.field}>
                        <label className={classes.label} htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Update Your Name" className={classes.input} defaultValue={userData.name} onChange={handleChange} pattern="[A-Za-z][A-Za-z ]*" required />
                      </div>


                      <div className={classes.field}>
                        <label className={classes.label} htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Update Your Mail" className={classes.input} name="email" defaultValue={userData.email} onChange={handleChange} required />
                      </div>

                    </div>
                    <div className={classes.formrows}>
                      <div className={classes.field}>
                        <label className={classes.label} htmlFor="mobno">Mobile Number:</label>
                        <input type="text" id="mobno" className={classes.input} name="mobno" defaultValue={userData.mobno} placeholder="Eg. 9112233177 (10 DIGITS ALLOWED)" minLength={10} maxLength={10} pattern="[0-9]*" onChange={handleChange} required />
                      </div>


                      <div className={classes.field}>
                        <label className={classes.label} htmlFor="pass">Password:</label>
                        <input type={showPassword ? 'text' : 'password'} id="pass" placeholder="Your Password" className={classes.input} name="pass" defaultValue={userData.pass} onChange={handleChange} required />
                        <label>
                          <input type="checkbox" checked={showPassword} onChange={handleCheckboxChange} className={classes.field2} />
                          Show Password
                        </label>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className={`${classes.field} ${classes.field1}`}>
                    <input type="submit" value="Update Profile" className={classes.addToCart} />
                    {/*}    <input type="button" value=" ←  Go Back" className={classes.addToCart} onClick={handleGoBack} /> */}
                  </div>


                </form>


              </div>



            </div>}


            {d2 && <div className={classes.r}>


              <div className={classes.Sup}>

                <div>




                  <center> <button className={classes.addToCart} onClick={handleGoBack}> ←  GO BACK</button> </center>

                  {products.map((product) => (

                    <div key={product.CategoryID} className={classes.pro1}>


                      <center>
                        <div className={classes.pro11}>
                          <center>
                            <Slider ref={sliderRef} {...slickSettings} className={classes.Image}>
                              {product.Images && product.Images.split(',').map((image, index) => (
                                <div key={index}>
                                  <img src={`http://localhost:8000/uploads/${image}`} alt={`Product ${index + 1}`} className={classes.Image} />
                                </div>
                              ))}
                            </Slider>
                          </center>


                        </div>
                      </center>




                      <div className={classes.pro12}>


                        <div className={classes.pro121}>  <h3 className={classes.Title}>{product.ProductName}</h3> </div>

                        <div className={classes.pro121}>

                          <p className={classes.info}><span className={classes.io}>Price in <span className={classes.ior}> ₹ </span>: </span>{product.Price}</p>
                          <p className={classes.info}><span className={classes.io}> Taxes Included <span className={classes.ior}> ₹ </span>: </span>{product.Tax}</p>
                          <p className={classes.info}><span className={classes.io}>Delivery Charges <span className={classes.ior}> ₹ </span>: </span>{product.DeliveryCharge}</p>
                          <p className={classes.info}><span className={classes.io}>Final Price : </span>{product.FinalPrice} <span className={classes.ior}> ₹  </span></p>

                        </div>


                        <div className={classes.pro121}>

                          <p className={classes.info}><span className={classes.io}>Weight : </span>{product.Weight}</p>
                          <p className={classes.info}><span className={classes.io}>Quantity : </span>{product.StockQuantity}</p>
                          <p className={classes.info}><span className={classes.io}>Ratings : </span>{product.Rating}</p>
                          <p className={classes.info}><span className={classes.io}>Id : </span>{product.ProductID}</p>
                          <p className={classes.info}><span className={classes.io}>Is Available : </span>{product.IsAvailable}</p>

                        </div>


                        <div className={classes.pro121}>
                          <p className={classes.info}><span className={classes.io}>Description : </span><br />{product.Description}</p>


                        </div>

                      </div>




                      <div className={classes.pro12}>
                        <center> <Link to={`/Updateproduct/${product.CategoryID}`}><button className={classes.addToCart}> UPDATE </button></Link>
                          <br />
                          <td className={classes.td}><button className={classes.addToCart} onClick={() => remove(product.CategoryID)}>REMOVE</button></td> </center>
                      </div>




                    </div>
                  ))}

                </div>
              </div>

              <center> <button className={classes.addToCart} onClick={handleGoBack}> ←  GO BACK</button> </center>


            </div>}


            {d3 && <div className={classes.r}>

              <div className={classes.Su}>
                <form className={`${classes.form} ${classes.card}`} encType="multipart/form-data" onSubmit={(e) => e.preventDefault()}>
                  <div className={classes.card_header}>
                    <h1 className={classes.form_heading}>ADD PRODUCT</h1>
                  </div>

                  <div className={classes.formclm}>
                    <div className={classes.formrows}>

                      <div className={classes.field}>
                        <label htmlFor="name">Product Name</label>
                        <input className={classes.input} name="name" type="text" placeholder="Your Product's Name" id="name" onChange={e => setValue({ ...value, name: e.target.value })} required />
                      </div>

                      <div className={classes.field}>
                        <label htmlFor="productid">Product Id</label>
                        <input className={classes.input} name="productid" type="text" placeholder="Your Product's Id" id="productid" onChange={e => setValue({ ...value, productid: e.target.value })} required />
                      </div>

                      <div className={classes.field}>
                        <label htmlFor="price">Price</label>
                        <input className={classes.input} name="price" type="text" placeholder="Write price of the Product" id="price" onChange={e => setValue({ ...value, price: e.target.value })} onBlur={handleFinalPrice} required />
                      </div>

                      <div className={classes.field}>
                        <label htmlFor="deliverycharges">Delivery Charges</label>
                        <input className={classes.input} name="deliverycharges" type="text" placeholder="Write Delivery Charges" id="deliverycharges" onChange={e => setValue({ ...value, deliverycharges: e.target.value })} onBlur={handleFinalPrice} required />
                      </div>

                      <div className={classes.field}>
                        <label htmlFor="tax">Included Taxes</label>
                        <input className={classes.input} name="tax" type="text" placeholder="Write Delivery Charges" id="tax" onChange={e => setValue({ ...value, tax: e.target.value })} onBlur={handleFinalPrice} required />
                      </div>


                    </div>

                    <div className={classes.formrows}>



                      <div className={classes.field}>
                        <label htmlFor="weight">Weight</label>
                        <input className={classes.input} name="weight" type="text" placeholder="Weight of Product" id="weight" onChange={e => setValue({ ...value, weight: e.target.value })} required />
                      </div>


                      <div className={classes.field}>
                        <label htmlFor="Rating">Ratings</label>
                        <select className={classes.input} value={value.ratings} onChange={e => setValue({ ...value, ratings: e.target.value })} required>
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
                        <textarea className={classes.input} name="description" type="text" placeholder="Write About Product" id="description" rows={2} cols={40} onChange={e => setValue({ ...value, desc: e.target.value })} required />
                      </div>
                      <br />
                      <div className={classes.field}>
                        <input type="file" multiple onChange={(e) => setValue({ ...value, selectedFiles: e.target.files })} />
                        {/*  <button type="button">Upload </button> */}
                      </div>
                      <br />
                      <div className={classes.field}>
                        <label htmlFor="isAvailable">Is Available</label> &nbsp; <input type="checkbox" name="isAvailable" id="isAvailable" checked={value.isAvailable} onChange={(e) => setValue({ ...value, isAvailable: e.target.checked ? 1 : 0 })} />
                      </div>
                    </div>
                  </div>

                  <br />

                  <div className={`${classes.field} ${classes.field1}`}>
                    <input type="submit" value="Add Product" className={classes.addToCart} onClick={handleUpload} />
                    <input type="button" value=" ←  Go Back" className={classes.addToCart} onClick={handleGoBack} />
                  </div>


                </form>
              </div>

            </div>}

            {d5 && <div className={classes.r}>

              <div className={classes.Su}>

                <form className={`${classes.form} ${classes.card}`} onSubmit={submitForm} >
                  <div className={classes.card_header}>

                    <h1 className={classes.form_heading}>Add New Admin</h1>
                  </div>

                  <div className={classes.formclm}>
                    <div className={classes.formrows}>
                      <div className={classes.field}>
                        <label htmlFor="name">Name</label>
                        <input className={classes.input} name="name" type="text" placeholder="Your Name" id="name" pattern="[A-Za-z][A-Za-z ]*" onChange={e => setValue({ ...value, name: e.target.value })} required />
                      </div>

                      <div className={classes.field}>
                        <label htmlFor="username">Email Id</label>
                        <input className={classes.input} name="email" type="email" placeholder="Your Email" id="email" onChange={e => setValue({ ...value, email: e.target.value })} required />
                      </div>

                    </div>
                    <div className={classes.formrows}>

                      <div className={classes.field}>
                        <label htmlFor="username">Mobile Number</label>
                        <input className={classes.input} name="mobno" type="text" placeholder="Eg. 9112233177 (10 DIGITS ALLOWED)" id="mobile" minLength={10} maxLength={10} pattern="[0-9]*" onChange={e => setValue({ ...value, mobno: e.target.value })} required />
                      </div>

                      <div className={classes.field}>
                        <label htmlFor="password">Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="pass" placeholder="Update Your Name" className={classes.input} name="pass" maxLength={15} minLength={8} onChange={e => setValue({ ...value, pass: e.target.value })} required />
                        <label>
                          <input type="checkbox" checked={showPassword} onChange={handleCheckboxChange} />
                          Show Password
                        </label>
                      </div>

                    </div></div>
                  <br />
                  *The New Added Admin Also Able To Do All The Tasks That You Are Doing <br/>
                  <br />
                  <div className={`${classes.field} ${classes.field1}`}>
                    <input type="submit" value="Add Admin" className={classes.addToCart} />
                  </div>

                </form>

              </div>

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

export default Dlunch_order;
