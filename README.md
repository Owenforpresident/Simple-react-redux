Simpliest possible react-redux app for illustration puposes 


-A user "does something" to a component 
-this calls a local function 
-this function dispatches an action and a payload to a reducer 
-this reducer then evaluates the action type and payload and decides how the app level state should change 
-the state is re-created with the appropriate changes added and returned to the store

-components are provided app level state by a provider which wraps the components in app.js 
-the provider gets the app level state from the store 
-the store initialises and creates the app level state 
-The state in the store is then re-created via the roots reducer 
-the root reducer is a combination of all the reducers
