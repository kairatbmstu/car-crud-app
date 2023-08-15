import React, { useState } from 'react';


const CarItem = ({ car, onSelect, isSelected, handleUpdateCar, handleDeleteCar }) => {
    const handleCarClick = () => {
        onSelect(car);
    };

    return (
        <tr key={car.id} className={isSelected ? 'selected' : ''} onClick={handleCarClick}>
            <td>{car.id}</td>
            <td>{car.name}</td>
            <td>{car.year}</td>
            <td>
                <button onClick={() => handleUpdateCar(car.id, { ...car, name: 'UpdatedName' })}>Update</button>
                <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
            </td>
        </tr>
    );
}


export default CarItem;