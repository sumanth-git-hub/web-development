const customMiddleware = ({dispatch}) => (next) => (action) => {

    const baseUrl = 'https://fakestoreapi.com'

    if(action.type === 'api/makeApiCall'){
        // console.log(action)
        next(action)
        const {url, onSuccess, onError, onLoadHandle} = action.payload
        dispatch({
            type: onLoadHandle
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