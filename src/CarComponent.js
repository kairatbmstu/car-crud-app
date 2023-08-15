import React, { useState } from 'react';

import CarCreateComponent from './CarCreateComponent';
import CarUpdateComponent from './CarUpdateComponent';



const CarComponent = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ id: '', name: '', year: '' });

  const [renderCreateCarForm , setRenderCreateCarForm] = useState(false);;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleAddCar = () => {
    setCars([...cars, newCar]);
    setNewCar({ id: '', name: '', year: '' });
  };

  const handleUpdateCar = (id, updatedCar) => {
    const updatedCars = cars.map((car) => (car.id === id ? updatedCar : car));
    setCars(updatedCars);
  };

  const handleDeleteCar = (id) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
  };

  const handleRenderCreateCarForm = () => {
    console.log('renderCreateCarForm : ', renderCreateCarForm)
    if (renderCreateCarForm){
      setRenderCreateCarForm(false);
    } else {
      setRenderCreateCarForm(true);
    }
  }
  
  return (
      <div>
        <h2>Car CRUD Application</h2>

        {renderCreateCarForm && <CarUpdateComponent car={newCar}/>} 

        <button onClick={handleRenderCreateCarForm}>Create Car</button>
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
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.year}</td>
                <td>
                  <button onClick={() => handleUpdateCar(car.id, { ...car, name: 'UpdatedName' })}>Update</button>
                  <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default CarComponent;
