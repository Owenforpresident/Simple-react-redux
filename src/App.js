import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'; 
import {Provider, useSelector, useDispatch} from 'react-redux'


/***************************************************************************/
//This is the countReducer.js, in the "reducers folder"

//Takes in the current application state and an action
//switch statement used for checking the incoming action types
//then creates a new updated application level state accordingly
function reducer (state, action) {
  switch(action.type){
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count +1
      }
      break; 
      case "DECREMENT_COUNT":
        return{
          ...state,
          count: state.count -1
        }
      default: return {...state}
      break; 
    
  }
}
/****************************************************************************************/
//This would be the store.js file

// Setting the inital state
const INITIAL_STATE = {
  count : 0
}
//creating a store for the state to live in 
//takes in the root reducer (all reducers), inital state and middleware (not necessary in this example)
const store= createStore(reducer, INITIAL_STATE);

/***************************************************************************************/
//This is "App.js" file

function App() {                  
  return (
    <Provider store= {store} >
   <Counter/>
    </Provider>
  );
}

/***************************************************************************************/
//This is a component in a "./components/Counter.js" file

function Counter() {
  //pulling in the application level state using useSelector hook
  //assigning it to the variable count
  const count = useSelector(state => state.count )
  //bringing in the dispatch hook so 
  //we can dispatch actions to the reducer
  const dispatch = useDispatch()

//function within a component which wants to change application level state
//dispatches an action to the reducer(doesnt change anything itself directly)
function increment(){
  dispatch({
    type: "INCREMENT_COUNT",
    payload: null
  }) 
}

function decrement(){
  dispatch({
    type:"DECREMENT_COUNT",
    payload: null
  })
  
} 
//The component is "provided" the application level state (from the provider, wrapped around app.js) which it gets from the store 
//the store itself contains the state which is kept up to date by the reducer
// {count} below is the state.count, from the store, which we initalised as 0
return (
    <div className= "container"> 
    <h1>Count: {count}</h1>
    <button onClick= {increment}>+</button>
    <button onClick= {decrement}>-</button>
    </div>
    )
};
/****************************************************************************************/

export default App;