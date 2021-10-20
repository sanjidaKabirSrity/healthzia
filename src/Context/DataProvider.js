import React, { createContext } from 'react';
import { useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    // Service Data 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://sanjidakabirsrity.github.io/fake-data/serviceData.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    // console.log(services);
    return (
        <DataContext.Provider value={services}>
            { children }
        </DataContext.Provider>
    );
};

export default DataProvider;