import React, { useState } from 'react'

export const DisclaimerAccordion = () => {

    // const [displayAnswer, setDisplayAnswer] = useState([])
    const [displayAnswer, setDisplayAnswer] = useState(null)

    // storing the accordion opening state logic in [] to handle the click action on each element with no relation with other accordion
    // const handleAnswer = (id) => {
    //     console.log(id)
    //    setDisplayAnswer((prev) => prev.includes(id) ? prev.filter((addNumber) => addNumber !== id) : [...prev, id])
    // }

    //other accordion opening logic
    const handleAnswer =  (id) => {
        setDisplayAnswer(displayAnswer === id ? null: id)
    }

    const accordionItems = [
        {
            accordionId: 1,
            accordionTitle: "Disclaimer",
            accordionDescription: "For more details on risk factors, terms and conditions, please read policy wordings available under download section carefully before concluding a sale."
        }
    ]
  return (
    <div className={`bg-white p-4 border-gray-100 m-4 rounded-xl add-shadow`}>
        {
            accordionItems.map((items, index) => {
                return <div key={index}>
                    <h3 className='flex items-center justify-between cursor-pointer hover:text-amber-500' onClick={() => {
                        handleAnswer(items.accordionId)
                    }}>{items.accordionTitle} 
                    {/* {displayAnswer.includes(items.accordionId) ? <i className="fa-solid fa-angle-up"></i>: <i className="fa-solid fa-angle-down"></i>} */}
                    {displayAnswer === items.accordionId ? <i className="fa-solid fa-angle-up"></i>: <i className="fa-solid fa-angle-down"></i>}
                    </h3>
                    {/* {displayAnswer.includes(items.accordionId) && <p className='bg-gray-50 p-2'>{items.accordionDescription}</p>} */}
                    {displayAnswer === items.accordionId && <p className='bg-gray-50 p-2'>{items.accordionDescription}</p>}
                </div>
            })
        }
    </div>
  )
}
