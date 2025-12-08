const funcMiddleware = ({dispatch, getStore}) => (next) => (action) => {
    if(typeof action === 'function'){
        action(dispatch, getStore)
    }
    else {
        next(action)
    }
}

export default funcMiddleware