import { enhanceReducer } from '../sparql/configure-sparql'
import { combineReducers } from 'redux'

const emptyReducer = (state={}, action) => state

//The use of `enhanceReducer` will add a
//`results` (by default) entry to the state. All the data related to sparql queries
//will stay under this entry.
//TODO upgrade `sparql-connect` to have a simple `getReducer` function to use
//where there is no other reducer
export default enhanceReducer(combineReducers({ emptyReducer }))

