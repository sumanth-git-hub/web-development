import React from 'react'

export default function AppleCounter(props) {
    const {appleCounts, basketNo}= props
      // console.log("appleCounts:", appleCounts);

  return (
    <div className="apple-basket">
        <span>{appleCounts}</span>
        Apples
        {/* {console.log(typeof parseInt(appleCounts))} */}
                <p>{basketNo}  {Number(appleCounts) === 10 && "Full"} {Number(appleCounts) === 0 && "Empty"} {(Number(appleCounts) >= 5 &&  Number(appleCounts) != 10) && "Half"}</p>
      </div>
  )
}
