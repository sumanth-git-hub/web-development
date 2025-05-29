import React from 'react'

export default function AppleCounter(props) {
    const {appleCounts, basketNo}= props
  return (
    <div className="apple-basket">
        <span>{appleCounts}</span>
        Apples
        <p>{basketNo}</p>
      </div>
  )
}
