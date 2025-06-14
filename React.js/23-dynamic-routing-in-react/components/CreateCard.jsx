import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateCard({name, population, region, capital, flag}) {
  return (
    <Link className="countries-list" to={`./${name}`}><img src={flag} alt={`${name} flag`} />  
                <div className="text-content">
                    <h3>{name}</h3>
                    <p><b>Population: </b>{population}</p>
                    <p><b>Region: </b>{region}</p>
                    <p><b>Capital: </b>{capital}</p>
                </div></Link>
  )
}
