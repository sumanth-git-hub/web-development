import React from 'react'

export default function SelectMenu({CompId, name, value, label, onChange, error, options, defaultOption}) {
  return (
        <div className="input-container">
        <label htmlFor={CompId}>{label}</label>
        <select
          id={CompId}
          name={name}
          value={value}
          onChange={onChange}
        >
          {
            defaultOption && <option value="" hidden>
            {defaultOption}
          </option>
          }
          {
            options.map((option, i) => {
                return <option key={i} value={option}>{option}</option>
            })
          }
        </select>
        <p className="error-element">{error}</p>
      </div>
  )
}
