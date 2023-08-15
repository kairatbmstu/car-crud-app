import React, { useState } from 'react';


const CarCreateComponent = ({ cars, newCar, handleAddCar, handleInputChange }) => {
  return (<div>
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
    <button onClick={handleAddCar}>Save</button>
  </div>);
}

export default CarCreateComponent;