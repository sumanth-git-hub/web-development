import React from 'react'

export default function AccordionComp() {
  return (
    <select className="filter-by-region" id='filter-by-region-accordion'>
                <option value="Filter by Region" hidden="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
)
}
