import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import classes from "./Order.module.css";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Order = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get('http://localhost:8000/fetchOrder');
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };

    fetchOrder();
  }, []);



  console.log(order); // Moved the log outside useEffect

  return (
    <div>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            <th className={classes.th}>ORDER ID</th>
            <th className={classes.th}>PRODUCT NAME</th>
            <th className={classes.th}>PRICE</th>
            <th className={classes.th}>QUANTITY</th>
            <th className={classes.th}>SUM</th>
            <th className={classes.th}>TOTAL</th>
            <th className={classes.th}>STATUS</th>
        
            <th className={classes.th} colSpan="2">Operations</th> 
          </tr>
        </thead>
        <tbody>
          {order.map(products => (
            <tr key={products.ProductId}>
              <td className={classes.td}>{products.OrderID}</td>
              <td className={classes.td}>{products.ProductNames}</td>
               <td className={classes.td}>{products.Exp}</td>
              <td className={classes.td}>{products.Quantities}</td>
              <td className={classes.td}>{products.Fps}</td>     
              <td className={classes.td}>{products.Total}</td>
              <td className={classes.td}>{products.status}</td>
              <td className={classes.td}>
                <button className={classes.addToCart1}>CANCEL</button>
              <Link to={`/Printorder/${products.OrderID}`}><button className={classes.addToCart}> PRINT </button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;

