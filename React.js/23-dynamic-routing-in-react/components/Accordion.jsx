import React from 'react'

export default function Accordion() {
  return (
    <select className="filter-by-region" name='accordion-component'>
                <option value="Filter by Region" hidden="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
  )
}
