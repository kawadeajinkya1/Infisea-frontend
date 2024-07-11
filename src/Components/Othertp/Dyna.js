/*
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dyna1 = () => {
  const navigate = useNavigate();
  const [numericPrice, setNumericPrice] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getprice');
        const priceString = response.data; // Assuming the price string is directly in the response data

        // Process the price string and convert it to a numeric value
        const numericValue = convertAndFormatPrice(priceString);

        // Set the numeric value in the state
        setNumericPrice(numericValue);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle error as needed
      }
    };

    fetchUserProfile();
  }, []);

  const convertAndFormatPrice = (priceString) => {
    const regex = /^([\d.]+)([T|L|Cr])$/;
    const match = priceString.match(regex);

    if (match) {
      const value = parseFloat(match[1]);
      const unit = match[2];

      // Convert the value based on the unit
 switch (unit) {
        case 'H':
          return value * 10000000;
        case 'T':
          return value * 1000000;
        case 'L':
          return value * 100000;
        case 'Cr':
          return value * 10000;
        default:
          return 'Invalid unit'; // Invalid unit
    }
    } else {
      return NaN; // Invalid format
    }
  };

  return (
    <div>
      <form>

        <label>
          Price:
          <input
            type="number"
            placeholder="Enter price"
            id="newPriceInput"
            value={numericPrice !== null ? numericPrice : ''}
            onChange={(e) => setNumericPrice(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Dyna1;
*/


import React from 'react'

const Dyna = () => {
  return (
    <div>Dyna</div>
  )
}

export default Dyna