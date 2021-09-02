import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"
import RootReducer from "./reducers/RootReducer"

const initialState = {}

const middlewares = [thunk]

const store = createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
