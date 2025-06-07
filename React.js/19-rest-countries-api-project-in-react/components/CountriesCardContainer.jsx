import React from "react";
import countriesData from "./countriesData";
import CountryCard from "./CountryCard";

export default function CountriesCardContainer() {
  // console.log(countriesData)
  return (
    <div className="countries-card-container">
      {countriesData.map((getCountriesData, i) => {
        console.log(getCountriesData.capital ? getCountriesData.capital[0] : "no");
        return (
          <CountryCard
            key={i}
            countryName={getCountriesData.name.common}
            countryPopulation={getCountriesData.population.toLocaleString(
              "en-IN"
            )}
            findRegion={getCountriesData.region}
            findCapital={getCountriesData.capital?.[0]}
            findFlags={getCountriesData.flags.svg}
          />
        );
      })}
    </div>
  );
}
