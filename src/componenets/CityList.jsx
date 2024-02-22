import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
 import { useCities } from "../contexts/CitiesContext";
//import { useValues } from "../contexts/CitContext";

export default function CityList() {
  const {isLoading, cities} = useCities();
    if (isLoading) return <Spinner />;
    if(!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>

    return <ul className={styles.cityList}>
      {cities.map(city=> <CityItem city = {city} key={city.id} />)}
      </ul>;
  }
