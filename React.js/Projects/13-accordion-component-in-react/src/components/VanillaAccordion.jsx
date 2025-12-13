import React from 'react'
import itemsList from './itemsList'

function VanillaAccordion() {

  return (
  <>
  <h2 className='font-bold text-center my-4'>Frequently asked question about <span className='bg-yellow-300 p-2'>JavaScript</span></h2>
  <p className='text-center mb-4'>The below added Accordion section is built with <span className='bg-yellow-300'>Vanilla JS</span> for Practice Purpose</p>
    <div className='accordion'>
      {
        itemsList.map((item) => {
          return <div className='accordion-item' key={item.id}>
            <h3 className='accordion-title flex justify-between' onClick={(element) => {
              element.currentTarget.nextElementSibling.classList.toggle("show-answer")
              element.currentTarget.querySelector('i').classList.toggle("fa-angle-up")
            }}>{item.title}
              <i className="fa-solid fa-angle-down"></i>
            </h3>
            <p className='accordion-content hidden-answer'>{item.content}</p>
          </div>
        })
      }
    </div>
  </>
  )
}

export default VanillaAccordion