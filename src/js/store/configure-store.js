import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { classificationListReducer } from '../reducers/classification-list'

const loggerMiddleware = createLogger()

export default function configureStore() {
  return createStore(
    classificationListReducer,
    undefined,
    compose(
	    applyMiddleware(
	      thunkMiddleware,
	      loggerMiddleware
	     ),
	    window.devToolsExtension ? window.devToolsExtension() : f => f)
    )
}

