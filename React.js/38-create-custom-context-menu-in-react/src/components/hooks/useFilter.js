import React, { useState } from 'react'

export function useFilter(passData, callback) {

    const [query, setQuery] = useState("")

    const filteredData = passData.filter((element) =>  callback(element).toLowerCase().includes(query))

 return [filteredData, setQuery]
}
