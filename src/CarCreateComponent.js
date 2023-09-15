import React, { useState } from 'react';

import axios from 'axios';

const CarCreateComponent = () => {

  const [newCar, setNewCar] = useState({ name: '', year: '' });

  const handleAddCar = () => {
    const apiUrl = 'http://localhost:8080/cars'; 
    axios.get(apiUrl)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  };

  const handleInputChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setNewCar((prevCar) => ({ ...prevCar, [name]: value }));
  };


  return (<div>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={newCar.name}
      onChange={handleInputChange}
    />
    <input
      type="text"
      name="year"
      placeholder="Year"
      value={newCar.year}
      onChange={handleInputChange}
    />
    <button onClick={handleAddCar}>Save</button>
  </div>);
}

export default CarCreateComponent;