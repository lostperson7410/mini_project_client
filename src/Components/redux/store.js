import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import{reducers} from './Rootreducers'
export const store = createStore(reducers,applyMiddleware(logger));