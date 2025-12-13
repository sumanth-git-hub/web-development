import React, { useState } from 'react'
import itemsList from './itemsList'

const FaqAccordion = () => {

    const [openAccordion, setOpenAccordion] = useState([])
    
        console.log("prev:", openAccordion)

    const toggleFunction = (id) => {
        console.log(id)
            setOpenAccordion((prev) => prev.includes(id) ? prev.filter((itemId) => itemId !== id): [...prev, id])
    }

  return (
<>
<h2 className='font-bold text-center my-4'>Frequently asked questions about <span className='text-sky-300'>React</span></h2>
   <p className='text-center mb-4'>Multiple accordion items to stay open, and only the clicked item should toggle itself (open ↔ close), without affecting others.</p>
    <div className='accordion'>
        {
            itemsList.map((item) => {
                return <div key={item.id} className='accordion-item'>
                    <h3 className='accordion-title flex justify-between' onClick={() => {
                        toggleFunction(item.id)
                        console.log(item.id)
                    }}>{item.title} 
                        {
                            openAccordion.includes(item.id)  ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
                        }
                    </h3>
                    {openAccordion.includes(item.id) && <p className='accordion-content'>{item.content}</p>}
                </div>
            })
        }
    </div>
</>
  )
}

export default FaqAccordion