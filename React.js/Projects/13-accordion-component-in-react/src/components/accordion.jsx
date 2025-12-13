import React, { useState } from 'react'
import itemsList from './itemsList'

// console.log(itemsList)

const Accordion = () => {

    const [isAccordionOpen, setAccordionOpen] = useState(null)

    const handleClick = (count) => {
        setAccordionOpen(isAccordionOpen === count ? null : count)
    }

  return (
    <div className='accordion'>
        {
           itemsList.map((item, index) => {
            return <div className='accordion-item' key={index}> 
                <h3 className='accordion-title flex justify-between' onClick={() => {
                    handleClick(index)
                }}>{item.title}{
                    isAccordionOpen === index ?
                    <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
                    }</h3>
                {isAccordionOpen === index && <p className='accordion-content'>{item.content}</p>}
            </div>
           }) 
        }
        </div>
  )
}

export default Accordion