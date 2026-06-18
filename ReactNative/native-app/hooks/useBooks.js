import { useContext } from "react"
import { BooksContext } from "../context/BooksContext"


export const useBooks = () => {
    const context = useContext(BooksContext)

    if(!context) {
        throw new Error("useBook must be used within a BooksProvider")
    }

    return context
}