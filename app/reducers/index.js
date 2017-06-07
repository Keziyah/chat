import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  chat: require('./chatReducer.js').default
})

export default rootReducer