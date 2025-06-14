import React, { useEffect, useState } from "react";
import CreateCard from "./CreateCard";

export default function CardContainer({query}) {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch(
      "http://127.0.0.1:5500/React.js/23-dynamic-routing-in-react/components/countrydata.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
        // console.log(countryData)
      });
  }, []);

  //added filter method for search feature and map for looping the cards
  const filterView = countryData.filter((filterData) =>
    filterData.name.common.toLocaleLowerCase().includes(query)
  );

  console.log(filterView);
  return (
   <>
      {/* <input type="text" onChange={(e) => {
            setQuery(e.target.value.toLocaleLowerCase())
            console.log(query)
        }} /> */}
      <div className="countries-card-container">
        {filterView.map((findData, i) => {
          // console.log(findData)
          return (
            <CreateCard
              key={i}
              flag={findData.flags.svg}
              name={findData.name.common}
              population={findData.population.toLocaleString("en-IN")}
              region={findData.region}
              capital={findData.capital?.[0]}
            />
          );
        })}
      </div>
    </>
  );
}
