import { buildRemote } from './remote'
import { buildProcessResultsFn } from './results'
import { buildActionConstants } from './action-constants'

const buildParams = (params, args) =>
  params.reduce((builtParams, param, i) => {
    //TODO check all arguments needed are present
    builtParams[param.name] = args[i]
    return builtParams
  }, {})
  
export function buildActionCreators(queryName, query, sparqlName) {

  const {
    params: paramsDescr,
    results: resultsDescr,
    singleResult,
    queryBuilder
  } = query
  
  const { 
    LOAD_ACTION,
    LOAD_SUCCESS_ACTION,
    LOAD_FAILURE_ACTION,
  } = buildActionConstants(queryName)
  
  // we build `checkIfNeeded` once for all
  const checkIfNeeded =  
    //TODO if there is no argument (for instance for the list of all
    //classifcations) handle `checkIfNeeded` properly to avoid multilple
    //loads of the same data)
    paramsDescr.length === 0 ? () => true :
    //There is no real need to distinguish one param only to multiple params,
    //but this special case can help understand the whole picture (plus
    //optimization, but it is surely unsignificant)
    paramsDescr.length === 1 ? 
      (pieceOfState, args) => !pieceOfState.hasOwnProperty(args[0]) :
    //We check recursively into the state (multiple params mean there is an
    //entry for the first param, and in this entry there is an entry for the
    //second param, and so forth) ; with `Array.every` we could stop as soon
    //as an entry does not exist, but we will need to create a local variable
    //to keep track of the current entry (hence the use of `Array.reduce`). We
    //reduce over `params` instead of `args` so we will be able to add checks
    //if some arguments are missing.
    (pieceOfState, args) => !paramsDescr.reduce((entry, args, i) => 
        entry && entry.hasOwnProperty(args[i]) && entry[args[i]]
       , pieceOfState)
  
  //wrap the query builder in a remote call function which returns a `Promise`.
  //This promise has to resolve to a javascript object (ie it must include the
  //parsing of the returned json)
  const remoteCall = buildRemote(queryBuilder)
  //Build the processing function that will be called when the `Promiese`
  //resolves.
  const processResults = buildProcessResultsFn(resultsDescr, singleResult)
  
  const loadIfNeeded = (...args) => (dispatch, getState) => {
    const { [sparqlName]: { [queryName]: resultsForQuery }} = getState()
    if (!checkIfNeeded(resultsForQuery, args)) return
    const params = buildParams(paramsDescr, args)
    dispatch({
      type: LOAD_ACTION,
      payload: { params }
    })
    
    return remoteCall(...args)
      .then(rawResults => {
        const results = processResults(rawResults)
        dispatch({
          type: LOAD_SUCCESS_ACTION,
          payload: {
            params,
            results
          }
        })
      })
      .catch(error => dispatch({
        type: LOAD_FAILURE_ACTION,
        payload: {
          params,
          error
        }
      }))
    }
  
  //We return `loadIfNeeded` that can be used by a react component, and the
  //action constants that can be used by a reducer.
  return {
    loadIfNeeded,
    actions: {
      LOAD_ACTION,
      LOAD_SUCCESS_ACTION,
      LOAD_FAILURE_ACTION
    }
  }
}
