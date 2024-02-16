/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";
const CitContext = createContext();

function CitProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
  

  return (
    <CitContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitContext.Provider>
  );
}
function useValues() {
    const value = useContext(CitContext);
    if(value===undefined) throw new Error("CitContext was used outside the CitProvider");
    return value;
}
 
export {CitProvider, useValues};
