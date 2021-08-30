import {combineReducers} from 'redux'
import repo from './repo'
import loggedReducer from './logform'
import counterReducer from './search'
import periodReducer from './period'


export default combineReducers({
    repo: repo,
    counter : counterReducer,
    isLog :loggedReducer,
    period: periodReducer




})
