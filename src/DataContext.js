import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [cars, setCars] = useState([]);

  return (
    <DataContext.Provider value={{ cars, setCars }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;