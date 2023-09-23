import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

import { useParams } from 'react-router-dom';

const CarUpdateComponent = ({}) => {
  
  const { id } = useParams();

  console.log("car.id : ", id);
  const [car, setCar] = useState(null);
  
  const navigate = useNavigate();

  const navigateToList = () => {
    navigate("/");
  }

  const handleUpdateCar = () => {
    const apiUrl = 'http://localhost:8080/cars/'+id;
    let request = {
      name : car.name,
      year : parseInt(car.year)
    }
    axios.put(apiUrl, request)
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
    setCar((prevCar) => ({ ...prevCar, [name]: value }));
  };


  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://localhost:8080/cars/'+id; // Replace with your API URL
    // Fetch data from the API using Axios
    axios.get(apiUrl)
      .then(response => {
        // Update the state with the fetched data
        setCar(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (<div>
    <input
      type="text"
      name="id"
      placeholder="ID"
      value={car.id}
      onChange={handleInputChange}
    />
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={car.name}
      onChange={handleInputChange}
    />
    <input
      type="number"
      name="year"
      placeholder="Year"
      value={car.year}
      onChange={handleInputChange}
    />
    <button onClick={() => handleUpdateCar(id, car)}>Save</button>
  </div>);
}

export default CarUpdateComponent;