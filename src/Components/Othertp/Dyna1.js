/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Dyna1 = () => {
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    // Get the input value
    const newPriceInput = document.getElementById('newPriceInput');
    const newPriceValue = Number(newPriceInput.value);

    let newPrice2 = 0;


    if (newPriceValue < 100) {
        newPrice2 = newPriceValue.toFixed(2).toString();
    } else if (newPriceValue < 1000) {
        newPrice2 = (newPriceValue / 1000).toFixed(1).toString() + 'T';
    } else if (newPriceValue < 10000) {
        newPrice2 = (newPriceValue / 1000).toFixed(0).toString() + 'T';
    } else if (newPriceValue < 100000) {
        newPrice2 = (newPriceValue / 1000).toFixed(2).toString() + 'T';
    } else if (newPriceValue < 1000000) {
        newPrice2 = (newPriceValue / 100000).toFixed(1).toString() + 'L';
    } else if (newPriceValue < 10000000) {
        newPrice2 = (newPriceValue / 1000000).toFixed(2).toString() + 'L';
    } else if (newPriceValue < 100000000) {
        newPrice2 = (newPriceValue / 1000000).toFixed(1).toString() + 'Cr';
    } else if (newPriceValue < 1000000000) {
        newPrice2 = (newPriceValue / 100000000).toFixed(2).toString() + 'cr';
    } else {
        newPrice2 = 'Price out of range';
    }



    // Log the result to the console
    console.log('Formatted Price:', newPrice2);

    try {
      const response = await axios.post('http://localhost:8000/setprice', {
        formattedPrice: newPrice2  // Include formattedPrice in the request body
      });

      console.log(response);

      if (response.data === 'error') {
        alert("Price Not set");
      } else {
        alert("Price is set");
        navigate('/customerlogin');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="number"
          placeholder="Dhiraj chutyaaaa"
          id="newPriceInput"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Dyna1;*/
import React from 'react'

const Dyna1 = () => {
  return (
    <div>Dyna1</div>
  )
}

export default Dyna1