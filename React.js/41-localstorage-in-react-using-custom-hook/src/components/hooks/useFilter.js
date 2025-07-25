import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useFilter(passData, callback) {

    // const [query, setQuery] = useState("")
    const [query, setQuery] = useLocalStorage("Filter","")

    const filteredData = passData.filter((element) =>  callback(element).toLowerCase().includes(query))

 return [filteredData, setQuery]
}
