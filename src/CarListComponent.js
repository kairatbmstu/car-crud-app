import React, { useState } from 'react';

import CarCreateComponent from './CarCreateComponent';
import CarUpdateComponent from './CarUpdateComponent';



const CarComponent = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ id: '', name: '', year: '' });
  const [selectedCar, setSelectedCar] = useState(null);

  const [renderCreateCarForm, setRenderCreateCarForm] = useState(false);;
  const [renderUpdateCarForm, setRenderUpdateCarForm] = useState(false);;

  const handleAddCar = () => {
    setCars([...cars, newCar]);
    setNewCar({ id: '', name: '', year: '' });
  };

  const handleInputChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setNewCar((prevCar) => ({ ...prevCar, [name]: value }));
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
    if (renderCreateCarForm) {
      setRenderUpdateCarForm(false);
    } else {
      setRenderUpdateCarForm(true);
    }
  }

  const handleRenderUpdateCarForm = () => {
    console.log('renderUpdateCarForm : ', renderUpdateCarForm)
    if (renderUpdateCarForm) {
      setRenderCreateCarForm(false);
    } else {
      setRenderCreateCarForm(true);
    }
  }

  return (
    <div>
      <h2>Car CRUD Application</h2>

      {renderCreateCarForm &&
        <CarCreateComponent
          cars={cars}
          newCar={newCar}
          handleAddCar={handleAddCar}
          handleInputChange={handleInputChange} />}

      {renderUpdateCarForm &&
        <CarUpdateComponent
          cars={cars}
          newCar={newCar}
          handleUpdateCar={handleUpdateCar}
          handleInputChange={handleInputChange} />}

      <button onClick={handleRenderCreateCarForm}>Create Car</button>
      <button onClick={handleRenderUpdateCarForm}>Update Car</button>
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
              <td onClick={handleCarClick}>{car.id}</td>
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
