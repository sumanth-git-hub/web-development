import React from 'react'

export default function 
CounterElement({renderCounts, renderFunction}) {
  return (
    <div>
        <h1 className='alignElements'>{renderCounts}</h1>
        <button className='button-element setMargin' onClick={renderFunction}>Render</button>
    </div>
  )
}
