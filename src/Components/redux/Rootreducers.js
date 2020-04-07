import {combineReducers} from 'redux'
import {numberReducer} from './Number/reducer'


export const reducers = combineReducers({
    number : numberReducer,
})