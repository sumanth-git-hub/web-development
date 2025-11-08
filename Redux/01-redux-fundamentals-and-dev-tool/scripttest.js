//clean code is available here of redux fundamentals
const displayState = document.querySelector(".showState")
console.log(displayState)

import { createStore } from "redux"
console.dir(createStore)
let initialState = {
    postCount: 0,
    userName: "Sumanth",
    userAge: 26
}

// const prevState = initialState

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASE_BY = 'post/increaseBy'
const DECREASE_BY = 'post/decreaseBy'

function reducers(passState = initialState,action) {
    switch(action.type){
        case INCREMENT:
            return  {...passState, postCount: passState.postCount + 1, action}
        case DECREMENT:
            return  {...passState, postCount: passState.postCount - 1, action}
        case INCREASE_BY:
            return  {...passState, postCount: passState.postCount + action.payload}
        case DECREASE_BY:
            return  {...passState, postCount: passState.postCount -  action.payload}
            default : return passState
    }
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)
console.log(store.getState())


displayState.innerText = store.getState().postCount


const unSubscribe = store.subscribe(() => {
    displayState.innerText = store.getState().postCount
    console.log(store.getState())
})

store.dispatch({type: INCREMENT})
store.dispatch({type: DECREMENT})
setTimeout(() => {
    store.dispatch({type: INCREASE_BY, payload: 10})
}, 2000);
store.dispatch({type: DECREASE_BY, payload: 6})

// unSubscribe() // to stop the subscribe Function

displayState.addEventListener("click", (e) => {
    store.dispatch({type: INCREMENT})
})

// console.log(store.getState())
