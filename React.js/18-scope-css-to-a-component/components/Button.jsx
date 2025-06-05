import React from 'react'

function Button(props) {
    const {passClass, fetchUrl ,children} = props
    // console.log(children)
  return (
    <a href={fetchUrl} target='_blank'>
        <button className={passClass}>{children}</button>
    </a>
  )
}

export default Button