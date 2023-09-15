import React, { useState } from 'react';



const CarItem = ({ car, onSelect, isSelected, navigateToUpdate, handleDeleteCar }) => {
    const handleCarClick = () => {
        onSelect(car);
    };

    return (
        <tr key={car.id} className={isSelected ? 'selected' : ''} onClick={handleCarClick}>
            <td>{car.id}</td>
            <td>{car.name}</td>
            <td>{car.year}</td>
            <td>
                <button onClick={() => navigateToUpdate(car.id)}>Update</button>
                <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
            </td>
        </tr>
    );
}


export default CarItem;