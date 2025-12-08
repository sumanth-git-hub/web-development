const customMiddleware = ({dispatch}) => (next) => (action)  => {
    const baseUrl = 'https://fakestoreapi.com'

    if(action.type === 'call/makeApiCall'){
        next(action)
        const {url, onSuccess, onLoadHandle, onHandleError} = action.payload
        dispatch({
            type: onLoadHandle
        })
        try {
        fetch(`${baseUrl}/${url}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: onSuccess,
                payload: data
            })
        })
        } catch (error) {
                dispatch({
                type: onHandleError
            })
        }
    }else {
        next(action)
    }
}

export default customMiddleware