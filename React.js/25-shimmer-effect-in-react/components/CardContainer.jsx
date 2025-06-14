import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

export default function CardContainer({ query }) {
  const [countriesData, setCountriesData] = useState(null);
  // console.log(countriesData)
  useEffect(() => {
    fetch(
      "http://127.0.0.1:5500/React.js/22-react-router/components/countrydata.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        console.log(countriesData);
      });
  }, []);
  return (
   countriesData === null ? <CountryListShimmer /> : 
   <div className="countries-card-container">
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .map((country, i) => {
          // console.log(country);
          return (
            <CountryCard
              countryFlag={country.flags.svg}
              key={i}
              name={country.name.common}
              population={country.population.toLocaleString("en-In")}
              region={country.region}
              capital={country.capital?.[0]}
            ></CountryCard>
          );
        })}
    </div>
  );
}
