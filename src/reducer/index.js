import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import user from './userReducer'
import notice from './noticeReducer'
import lecture from './lectureReducer'
import mileage from './mileageReducer'
import chapel from './chapelReducer'

const initialState = {};

const allReducers = combineReducers({
    user,
    notice,
    lecture,
    mileage,
    chapel
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store