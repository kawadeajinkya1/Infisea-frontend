import React, { useState, useEffect } from 'react';

const ButtonSelection = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleButtonClick = (value) => {
    if (selectedValues.includes(value)) {
      // If the value is already selected, remove it
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else if (selectedValues.length < 5) {
      // If the value is not selected and there are less than 5 selected values, add it
      setSelectedValues([...selectedValues, value]);
    }
  };

  useEffect(() => {
    console.log(selectedValues);
  }, [selectedValues]);

  return (
    <div>
      <h2>Selected Values: {selectedValues.join(', ')}</h2>
      {["Drink", "Music", "Classical Music", "Dance", "Enroll", "Yeiii", "pyara", "Meko", "Charas", "Ganja"].map((value) => (
        <button
          key={value}
          onClick={() => handleButtonClick(value)}
          style={{ backgroundColor: selectedValues.includes(value) ? 'green' : 'gray' }}
        >
          {value}
        </button>
      ))}
      <button>Next</button>
    </div>
  );
};

export default ButtonSelection;
