import { myCreateStore } from "./createStore"

//clean code is available here of redux fundamentals
const displayState = document.querySelector(".showState")
console.log(displayState)

// import { createStore } from "redux"
// console.dir(createStore)
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

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__?.())
const myStore = myCreateStore(reducers)
console.log(myStore)
console.log(myStore.getState())


displayState.innerText = myStore.getState().postCount


const unSubscribe = myStore.subscribe(() => {
    displayState.innerText = myStore.getState().postCount
    console.log(myStore.getState())
})

myStore.dispatch({type: INCREMENT})
myStore.dispatch({type: DECREMENT})
setTimeout(() => {
    myStore.dispatch({type: INCREASE_BY, payload: 10})
}, 2000);
myStore.dispatch({type: DECREASE_BY, payload: 6})

unSubscribe() // to stop the subscribe Function

displayState.addEventListener("click", (e) => {
    myStore.dispatch({type: INCREMENT})
})

// console.log(store.getState())
