import { useEffect, useState } from "react"

export const useStoreLocal = (key, initialData) => {
    const [isData, setData] = useState(initialData)

    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem(key));
        if(existingData) {
            setData(existingData)
        }
        else {
            localStorage.setItem(key, JSON.stringify(isData))
        }
    },[])

    function updateLocalStorage(localData) {
            if(typeof localData === "function"){
                localStorage.setItem(key, JSON.stringify(localData(isData)))
            }
            else {
                localStorage.setItem(key, JSON.stringify(localData))
            }
            setData(localData)
    }
    return [isData, updateLocalStorage]
}