import { enhanceReducer } from '../sparql/configure-sparql'
import { combineReducers } from 'redux'
import appState from './app-state'

//`combineReducers` is used to allow future additions of reducers. It creates a
//state with the `appState` entry. The use of `enhanceReducer` will add a
//`results` (by default) entry to the state. All the data related to sparql queries
//will stay under this entry.
export default enhanceReducer(combineReducers({ appState }))

