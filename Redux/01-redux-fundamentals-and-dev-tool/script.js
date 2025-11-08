import { createStore } from "redux";

// console.dir(createStore)
// let reduxState = {
//     post: 0,
//     userName: "Sumanth",
//     userAge: 26
// }
const initialState = {
  post: 0,
  userName: "Sumanth",
  userAge: 26,
};

// let prevState = reduxState
// console.log("PrevState", prevState)

// function increaseCount() {
//     //*** mutating way of increasing the number ***//
//     // state.count = state.count + 1

//         //*** not mutating way of increasing the number ***//
//         state = {...state, count: state.count + 1}
// }
// increaseCount()
// console.log(state)
// increaseCount()
// console.log(state)
// increaseCount()
// console.log(state)

// console.log(prevState === state)

/*

function reducers(passState = {},action) {
    if(action.type === 'post/increment'){
        return {...passState, post: passState.post + 1, action}
    }
    else if (action.type === 'post/decrement'){
        return {...passState, post: passState.post - 1 ,  action}
    }
    else if (action.type === 'post/increaseBy') {
        return {...passState, post: passState.post + action.payload}
    }
    else if (action.type === 'post/decreaseBy') {
        return {...passState, post: passState.post - action.payload}
    }

    return passState
}

reduxState = reducers(reduxState, {type: 'post/increment'})
console.log(reduxState)
reduxState = reducers(reduxState, {type: 'post/decrement'})
console.log(reduxState)
reduxState = reducers(reduxState, {type: 'post/increaseBy', payload: 10})
console.log(reduxState)
reduxState = reducers(reduxState, {type: 'post/decreaseBy', payload: 2})
console.log(reduxState)
reduxState = reducers(reduxState, {type: 'none of the above'})
console.log(reduxState)
*/

// declaring the variables for type
const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREASE_BY = "post/increaseBy";
const DECREASE_BY = "post/decreaseBy";

/*

//if condition written

function reducers(passState = initialState, action) {
        if(action.type === INCREMENT){
        return {...passState, post: passState.post + 1, action}
    }
    else if (action.type === DECREMENT){
        return {...passState, post: passState.post - 1 ,  action}
    }
    else if (action.type === INCREASE_BY) {
        return {...passState, post: passState.post + action.payload}
    }
    else if (action.type === DECREASE_BY) {
        return {...passState, post: passState.post - action.payload}
    }

    return passState
}
*/

// switch case written instead of if else condition
function reducers(passState = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...passState, post: passState.post + 1, action };
    case DECREMENT:
      return { ...passState, post: passState.post - 1, action };
    case INCREASE_BY:
      return { ...passState, post: passState.post + action.payload };
    case DECREASE_BY:
      return { ...passState, post: passState.post - action.payload };
    default:
      return passState;
  }
}

const store = createStore(reducers);
console.log(store);

// dispatching the action with the help of subscribe (each action is printed in console)
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: INCREMENT });
// console.log(store.getState())
store.dispatch({ type: DECREMENT });
// console.log(store.getState())
store.dispatch({ type: INCREASE_BY, payload: 10 });
store.dispatch({ type: DECREASE_BY, payload: 6 });
