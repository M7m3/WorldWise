import styles from "./CountryList.module.css";
import React from "react";
import Spinner from "./Spinner.jsx";
import CountryItem from "./CountryItem.jsx";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
