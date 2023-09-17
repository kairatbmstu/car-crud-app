import React, { useState } from 'react';

import axios from 'axios';

import { useNavigate } from "react-router-dom";

const CarCreateComponent = () => {
  const navigate = useNavigate();

  const [newCar, setNewCar] = useState({ name: '', year: '' });

  const navigateToList = () => {
    navigate("/");
  }

  const handleAddCar = () => {
    const apiUrl = 'http://localhost:8080/cars';

    let request = {
      name : newCar.name,
      year : parseInt(newCar.year)
    }
    axios.post(apiUrl, request)
      .then((response) => {
        // Handle the response from the server
        console.log('Object saved successfully:', response.data);
        navigateToList();
      })
      .catch((error) => {
        // Handle any errors that occurred during the POST request
        console.error('Error saving object:', error);
      });
  };

  const handleInputChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setNewCar((prevCar) => ({ ...prevCar, [name]: value }));
  };


  return (<div>
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newCar.name}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={newCar.year}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <button onClick={handleAddCar}>Save</button>
    </div>
  </div>);
}

export default CarCreateComponent;