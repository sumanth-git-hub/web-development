import React from 'react'

function Counter(props) {
    const {passClass, counterFunction, passClassH2, passClassButton, buttonContent, renderingCounts, children} = props
  return (
        <div className={passClass}>
        <h2 className={passClassH2}>{renderingCounts}</h2>
        <button className={passClassButton} onClick={counterFunction}>{buttonContent}</button>
        {children}
    </div>
  )
}

export default Counter