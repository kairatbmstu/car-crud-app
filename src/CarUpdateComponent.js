import React, { useState } from 'react';


const CarUpdateComponent = ({ car, handleUpdateCar, handleInputChange }) => {
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
      type="text"
      name="year"
      placeholder="Year"
      value={car.year}
      onChange={handleInputChange}
    />
    <button onClick={handleUpdateCar}>Add Car</button>
  </div>);
}

export default CarUpdateComponent;