import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
// import countriesData from "./countriesData";

export default function CardContainer({query}) {
    // const filterData = countriesData.filter((country) => country.name.common.includes('India'))
  const [countriesData, setCountriesData] = useState([])
  const [count, setCount] = useState(0)

useEffect(() => {
  fetch('https://gist.githubusercontent.com/sumanth-git-hub/f48ba4fff04cbe336717c1c8c4804c77/raw/cb9dff2df94f30cdc69032a382c296b26b386e72/rest-countries-api-file.json')
.then(res => res.json())
.then((data) => {
  setCountriesData(data)
  console.log(countriesData)
});

//   const intervalId  = setInterval(() => {
//     console.log("Hello")
//   }, [1000]);
//   console.log(intervalId)

//    console.log(countriesData.length)
// return  () => {
//     clearInterval(intervalId)
//   }
}, [count])

useEffect(() => {
  console.log("Namasthe React.JS")
}, [])

// if(countriesData.length === 0){
//     fetch('http://127.0.0.1:5500/JavaScript/projects/06-rest-countries-api-project/countrydata.json')
// .then(res => res.json())
// .then((data) => {
//   setCountriesData(data)
// });
// }

  return (

    <>
    <h2>{count}</h2>
    <button onClick={() => {
      setCount(count + 1)
    }}>Remove Button</button>
    {/* <input type="text" onChange={((e) => {
        setQuery(e.target.value.toLowerCase())
        console.log(e.target.value.toLowerCase())
    })}/> */}
    <div className="countries-card-container">
      {countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country, i) => {
        // console.log(country);
        return (
          <CountryCard
          countryFlag = {country.flags.svg}
            key={i}
            name={country.name.common}
            population={country.population.toLocaleString("en-In")}
            region={country.region}
            capital={country.capital ?. [0]}
          ></CountryCard>
        );
      })}
    </div>
    </>

  );
}
