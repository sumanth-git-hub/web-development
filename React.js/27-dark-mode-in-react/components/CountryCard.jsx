import React from 'react'
import {Link} from 'react-router-dom'

export default function CountryCard({name, population, region, capital, countryFlag, passData}) {
  // console.log(passData)
  return (
    <Link className="countries-list" to={`/${name}`} state={passData}><img src={countryFlag} alt={`${name} flag`}/>  
                <div className="text-content">
                    <h3>{name}</h3>
                    <p><b>Population: </b>{population}</p>
                    <p><b>Region: </b>{region}</p>
                    <p><b>Capital: </b>{capital}</p>
                </div></Link>
  )
}
