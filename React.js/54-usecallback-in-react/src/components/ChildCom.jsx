import React, { memo } from 'react'

const ChildCom = ({addFunction}) => {
        // console.log(addFunction)
        // addFunction()
        console.log("Child Component is Rendering")
  return (
    <div>
        <p className='text-element'>{addFunction()}</p>
    </div>
  )
}

export default memo(ChildCom)