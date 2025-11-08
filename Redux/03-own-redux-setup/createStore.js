export function myCreateStore(reducers) {

    let state 
    const listeners = []
    const store = {
        getState() {
            return state
        },
        dispatch(action) {
           state = reducers(state, action)
           listeners.forEach((listener) => listener())
        },
        subscribe(listener) {
            listeners.push(listener)
           return function () {
                const listenerIndex = listeners.findIndex((regListeners) => regListeners === listeners)

                listeners.splice(listenerIndex, 1)
            }
        }
    }
    store.dispatch({type: '@@INIT'})
    return store
}