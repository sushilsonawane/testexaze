import { applyMiddleware, combineReducers, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import nameReducer from "./NameReducer"

const rootReducer = combineReducers({
    name: nameReducer
})

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(ReduxThunk)
    )
}

export default configureStore
