import { pointToStateEntry } from './state-utils'
import { LOADING, LOADED, FAILED } from './remote-constants'

function loadHndlr(stateEntry, { params }) {
  return {
    status: LOADING
  }
}

function loadSuccesHndlr(stateEntry, { params, results }) {
  return {
    status: LOADED,
    results
  }
}

function loadFailureHndlr(stateEntry, { params, error }) {
  return {
    status: FAILED,
    error
  }
}

export function buildReducer(query, actions) {
  //`pointToStateEntry` allows to process only one entry from an immutable
  //collection and to replace it
  const hndlrs = pointToStateEntry(query.params, {
    [actions.LOAD_ACTION]: loadHndlr,
    [actions.LOAD_SUCCESS_ACTION]: loadSuccesHndlr,
    [actions.LOAD_FAILURE_ACTION]: loadFailureHndlr
  })
  
  return function (state={}, action) {
    const hndlr = hndlrs[action.type]
    return hndlr ? hndlr(state, action.payload) : state
  }
}
