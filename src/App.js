import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';


import CarListComponent from './CarListComponent';
import CarCreateComponent from './CarCreateComponent';
import CarUpdateComponent from './CarUpdateComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<CarListComponent />}>
            </Route>
            <Route path="/create" element={<CarCreateComponent />}>
            </Route>
            <Route path="/update/:id" element={<CarUpdateComponent />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>


    // <div className="App">
    //   <BrowserRouter><CarListComponent/></BrowserRouter> 
    //   </div>
   
  );
}

export default App;
