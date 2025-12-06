import { useDispatch } from "react-redux"

const customMiddleware = ({dispatch}) => (next) => (action) => {
    const baseUrl = 'https://fakestoreapi.com'
    if(action.type === 'api/customMiddleware'){

        next(action)

        const {url, onSuccess, onStart, onError} = action.payload
        dispatch({
            type: onStart
        })
        fetch(`${baseUrl}/${url}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: onSuccess,
                payload: data
            })
        }).catch(() => {
            dispatch({
                type: onError,
            })
        })
    }
    else {
         next(action)
    }

}

export default customMiddleware

export const fetchMiddlewareData = (payload) => ({type: 'api/customMiddleware', payload})