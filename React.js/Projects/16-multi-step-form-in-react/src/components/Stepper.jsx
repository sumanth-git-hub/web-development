import React from 'react'
import ListItems from '../ListItems'

const Stepper = ({activeForm, setActiveForm}) => {
    
    const navStepper = (stepperIndex) => {
    setActiveForm(stepperIndex)
    }

  return <div className="stepper-component mb-8 flex items-center justify-center">
  {
              ListItems.map((item, index) => {
                return <div key={item.id}>
                  <span className={`bg-gray-100 px-2 rounded cursor-pointer ${index < activeForm + 1  && 'active-step'}`} onClick={() => {
                    navStepper(index)
                  }}>{item.name}</span>
                  {
                   index < ListItems.length - 1 && <span className={`w-7 h-0.5 inline-block bg-black align-middle ${index < activeForm + 1  && 'active-step-line'}`}></span>
                  }
        
                  </div>
              })
            }
  </div>
  
}

export default Stepper