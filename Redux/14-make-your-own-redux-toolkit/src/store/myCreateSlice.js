import { produce } from "immer";
// instead of getting the createSlice from the redux toolkit library we created the function that can be re used
const myCreateSlice = (config) => {
  const {name, initialState, reducers} = config;
  const actions = {}
  Object.keys(reducers).forEach((keys) => {
    actions[keys] = function(payload) {
    return {
      type: `${name}/${keys}`,
      payload,
    }
  }
  }
)

function reducer(originalState = initialState, action){
 return produce(originalState, (state) => {
    const caseReducer = reducers[action.type.split("/")[1]]
  if(caseReducer){
    return caseReducer(state, action)
  }
  return state 
  })
}

return {actions, reducer}
}

export default myCreateSlice