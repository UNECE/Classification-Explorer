import { mainReducer } from '../sparql/configure-sparql';

//If there is nothing more than the sparql queries handling in the state,
//we can simpley use `mainReducer`
export default mainReducer;

//If there is more in the state, we should use `enhanceReducer` with
//`react-redux` `combineReducers` function

/*
import { enhanceReducer } from '../sparql/configure-sparql'
import { combineReducers } from 'redux'

const initialReducer = (state={}, action) => ...

export default enhanceReducer(combineReducers({ initialReducer  }))
*/
