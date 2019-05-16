import { createStore } from "redux"
import todoReducers from "./todoStore/reducer"
import initialState from "./todoStore/state"

const store = createStore(todoReducers, initialState + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store