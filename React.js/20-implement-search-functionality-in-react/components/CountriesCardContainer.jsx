import React, { useState } from "react";
import countriesData from "./countriesData";
import CountryCard from "./CountryCard"; 

export default function CountriesCardContainer({query}) {

  // const [query, setQuery] = useState("")

//  const filteredCountries = countriesData.filter((filterData)=> filterData.name.common.toLowerCase().includes("india"))
//   console.log(filteredCountries)
  return (
    <>
{/* <input type="text" onChange={(e) => {
  setQuery(e.target.value.toLowerCase())
}}/> */}
    <div className="countries-card-container">
      {countriesData.filter((getCountriesData)=> getCountriesData.name.common.toLowerCase().includes(query)).map((getCountriesData, i) => {
        // console.log(getCountriesData.capital ? getCountriesData.capital[0] : "no");
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
    </>
          
  );
}
