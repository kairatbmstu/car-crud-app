import React, { useState, useEffect } from 'react';

import CarCreateComponent from './CarCreateComponent';
import CarUpdateComponent from './CarUpdateComponent';
import CarItem from './CarItem';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const CarListComponent = () => {
  
  const [cars, setCars] = useState([]);

  
  const [selectedCar, setSelectedCar] = useState(null);
  const [isSelected, setIsSelected] = useState('');

  const [renderCreateCarForm, setRenderCreateCarForm] = useState(false);;
  const [renderUpdateCarForm, setRenderUpdateCarForm] = useState(false);;

  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/create");
  }

  const navigateToUpdate = (id) => {
    navigate("/update/"+id);
  }

  const onSelect = (car) => {
    console.log('onSelect car : ', car)
    setSelectedCar(car)
  }
 
  const handleInputChangeForSelectedCar = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setSelectedCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleUpdateCar = (id, updatedCar) => {
    console.log("id : ", id);
    console.log("updatedCar : ", updatedCar);
    const updatedCars = cars.map((car) => (car.id === id ? updatedCar : car));
    setCars(updatedCars);
    handleRenderUpdateCarForm();
  };

  const handleDeleteCar = (id) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
  };

  const handleRenderCreateCarForm = () => {
    console.log('renderCreateCarForm : ', renderCreateCarForm)
    if (renderCreateCarForm) {
      setRenderCreateCarForm(false);
    } else {
      setRenderCreateCarForm(true);
    }
  }

  const handleRenderUpdateCarForm = () => {
    console.log('renderUpdateCarForm : ', renderUpdateCarForm)
    if (renderUpdateCarForm) {
      setRenderUpdateCarForm(false);
    } else {
      setRenderUpdateCarForm(true);
    }
  }

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://localhost:8080/cars'; // Replace with your API URL
    // Fetch data from the API using Axios
    axios.get(apiUrl)
      .then(response => {
        // Update the state with the fetched data
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log("Redner CarList Component")
  return (
    <div>
      <h2>Car CRUD Application</h2>

      <button onClick={navigateToCreate}>Create Car</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <CarItem car={car} onSelect={onSelect} isSelected={false}
            handleDeleteCar={handleDeleteCar} navigateToUpdate={navigateToUpdate} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarListComponent;
