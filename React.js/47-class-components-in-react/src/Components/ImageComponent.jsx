import React, { useState } from 'react'

export default function ImageComponent({source, altText}) {

    const [loading, setLoading] = useState(false)

  return (
    <div>
        <img src={source} alt={altText} loading='lazy' onLoad={() => setLoading(true)} className={`w-full max-w-sm mx-auto ${loading ? 'transition duration-1000 ease-in-out opacity-100 blur-0': 'bg-gray-200 opacity-0 blur-sm'}`}/>
    </div>
  )
}
