import React, { useState } from 'react';

const CarComponent = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ id: '', name: '', year: '' });

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

  return (
    <div>
      <h2>Car CRUD Application</h2>
      <div>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={newCar.id}
          onChange={handleInputChange}
        />
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
        <button onClick={handleAddCar}>Add Car</button>
      </div>
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
