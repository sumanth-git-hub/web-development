import React from 'react'

export default function AccordionComp({setQuery}) {
  return (
    <select className="filter-by-region" id='filter-by-region-accordion' onChange={(e) => {
      setQuery(e.target.value.toLocaleLowerCase())
    }}>
                <option value="Filter by Region" hidden="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
)
}
