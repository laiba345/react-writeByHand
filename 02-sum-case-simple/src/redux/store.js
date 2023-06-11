import { legacy_createStore as createStore } from 'redux'
import countReducer from './count_reducer'

// store总是与reducer打交道
export default createStore(countReducer)