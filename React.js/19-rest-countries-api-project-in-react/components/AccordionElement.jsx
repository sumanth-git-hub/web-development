import React from 'react'

export default function AccordionElement({children, option1, option2, option3, option4, option5}) {
  return (
<select className="filter-by-region" name='Accordion Element'>
                <option value="Filter by Region" hidden="Filter by Region">{children}</option>
                <option value={option1}>{option1}</option>
                <option value={option2}>{option2}</option>
                <option value={option3}>{option3}</option>
                <option value={option4}>{option4}</option>
                <option value={option5}>{option5}</option>
                {/* <option value="Africa">America</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option> */}
            </select>
  )
}
