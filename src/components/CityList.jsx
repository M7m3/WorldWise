import styles from "./CityList.module.css";
import React from "react";
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
