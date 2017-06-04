import articleReducer from './articleReducer'
import userReducer from './usersReducers'
import postsReducer from './postsReducers'
import { combineReducers } from 'redux'


const reducer = combineReducers({
  userReducer,
  postsReducer,
  articleReducer
})

export default reducer
