import React from 'react'

export default function InputElement({id, name, value, onChange, error, label, place}) {
  return (
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={place}
        />
        <p className="error-element">{error}</p>
      </div>
  )
}
