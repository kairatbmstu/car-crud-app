import React, { useState } from 'react';

import CarCreateComponent from './CarCreateComponent';
import CarUpdateComponent from './CarUpdateComponent';
import CarItem from './CarItem';



const CarComponent = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ id: '', name: '', year: '' });
  const [selectedCar, setSelectedCar] = useState(null);
  const [isSelected, setIsSelected] = useState('');

  const [renderCreateCarForm, setRenderCreateCarForm] = useState(false);;
  const [renderUpdateCarForm, setRenderUpdateCarForm] = useState(false);;

  const onSelect = (car) => {
    console.log('onSelect car : ' , car)
    setSelectedCar(car)
  }

  const handleAddCar = () => {
    setCars([...cars, newCar]);
    setNewCar({ id: '', name: '', year: '' });
    handleRenderCreateCarForm();
  };

  const handleInputChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setNewCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

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

  return (
    <div>
      <h2>Car CRUD Application</h2>

      {renderCreateCarForm &&
        <CarCreateComponent
          cars={cars}
          newCar={newCar}
          handleAddCar={handleAddCar}
          handleInputChange={handleInputChange} />}

      {selectedCar!=null && renderUpdateCarForm &&
        <CarUpdateComponent
          cars={cars}
          car={selectedCar}
          handleUpdateCar={handleUpdateCar}
          handleInputChange={handleInputChangeForSelectedCar} />}

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
            <CarItem car={car} onSelect={onSelect} isSelected={isSelected}
            handleUpdateCar={handleUpdateCar} handleDeleteCar={handleDeleteCar}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarComponent;
