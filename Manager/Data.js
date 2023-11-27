import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [categories, Setcategories] = useState([]);
    return (
        <DataContext.Provider value={{
            categories, Setcategories
        }}>
            {children}
        </DataContext.Provider>
    );
}



export { DataContext, DataProvider };