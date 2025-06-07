import React from 'react'

export default function CountryCard(props) {

    const {countryName, countryPopulation, findRegion, findCapital, findFlags} = props

  return (
    <a className="countries-list" href={`/country.html?name=${countryName}`}><img src={findFlags} alt={countryName + " Flag"}/>  
                <div className="text-content">
                    <h3>{countryName}</h3>
                    <p><b>Population: </b>{countryPopulation}</p>
                    <p><b>Region: </b>{findRegion}</p>
                    <p><b>Capital: </b>{findCapital}</p>
                </div></a>
  )
}
