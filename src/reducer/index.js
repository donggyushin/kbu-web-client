import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import user from './userReducer'
import notice from './noticeReducer'
import lecture from './lectureReducer'
import mileage from './mileageReducer'
import chapel from './chapelReducer'
import calendar from './calendarReducer'
import cafeteria from './cafeteriaReducer'
import touchable from './touchableReducer'
import qrcode from './qrcodeReducer'
import prayer from './prayerReducer'

const initialState = {};

const allReducers = combineReducers({
    user,
    notice,
    lecture,
    mileage,
    chapel,
    calendar,
    cafeteria,
    touchable,
    qrcode,
    prayer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store