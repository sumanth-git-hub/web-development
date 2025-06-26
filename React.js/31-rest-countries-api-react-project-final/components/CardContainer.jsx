import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
export default function CardContainer({ query }) {
  const [countriesData, setCountriesData] = useState(null);
  // console.log(countriesData)
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/sumanth-git-hub/f48ba4fff04cbe336717c1c8c4804c77/raw/cb9dff2df94f30cdc69032a382c296b26b386e72/rest-countries-api-file.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        // console.log(countriesData);
      });
  }, []);
  return (
   countriesData === null ? <CountriesListShimmer /> : 
   <div className="countries-card-container">
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)).map((country, i) => {
          // console.log(country);
          return (
            <CountryCard
              countryFlag={country.flags.svg}
              key={i}
              name={country.name.common}
              population={country.population.toLocaleString("en-In")}
              region={country.region}
              capital={country.capital?.[0]}
              data = {country}
            ></CountryCard>
          );
        })}
    </div>
  );
}
