import {  combineReducers } from  'redux'
import counterReducer from './count_reducer'
import postReducer from  './post_reducer'


// 通过combineReducers把多个reducer合并

 const rootReducer = combineReducers({
  counter: counterReducer,
  post: postReducer
})

export default rootReducer


