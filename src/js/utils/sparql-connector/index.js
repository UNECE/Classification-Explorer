import { buildActionCreators } from './action-creators'
import { buildConnect } from './connect'
import { buildReducer } from './reducer'
import { LOADED, LOADING, FAILED } from './remote-constants'

/**
 * Build utility functions to connect components to documented sparql queries
 * 
 * It returns:
 * - a reducer enhancer: called with a main reducer, it will add a `results`
 * entry to the state; all the data under this entry will be related to sparql
 * queries and will be handled by dedicated reducers;
 * - a collection of functions (one per query) that enable to feed a component
 * with the results of sparql query.
 *
 * The `collect` functions extend the `react-redux` connect function. It means
 * that we can pass `mapStateToProps` and `mapDispatchToProps` arguments in the
 * same way we do with `react-redux`.
 * The `collect` function will expose special props to the wrapped component:
 * - loaded (LOADING, LOADED, FAILED): status of the query;
 * - the results, with the `whatWeGet` property of the query documentation as
 * a name (it allows to manipulate the results in the wrapped component with
 * a meaningful name, not just a generic `results` name).
 *
 * The documentation of a query must contain:
 * - a `queryBuilder`: a function that takes arguments and returns the query
 * string;
 * - a `results` array which describe each expected field (`name` and `descr`);
 * this description will be used to build the results exposed to the component;
 * if not provided, the generic name `results` will be used;
 * - a `params` array which the parameters needed to build the query; these
 * parameters must be provided as `props` to the enhanced component.
 * 
 * @param  {Object} queries     documented queries
 * @param  {String} sparqlName  the key to access the sparql reducer
 * @return {Object}             utilities to connect to sparql queries
 */
function buildSparqlConnector(queries, sparqlName='results') {
  const { 
    reducers: sparqlReducers,
    connectFns: sparqlConnect
  } = Object.keys(queries).reduce(({ reducers, connectFns }, queryName) => {
    const query = queries[queryName]
    const { loadIfNeeded, actions } = buildActionCreators(queryName, query, sparqlName)
    reducers[queryName] = buildReducer(query, actions)
    connectFns[queryName] = 
      buildConnect(queryName, query, loadIfNeeded, sparqlName)
    return { reducers, connectFns }
  }, { reducers: {}, connectFns: {} })

  
  function enhanceReducer(reducer) {
    // empty state for sparql related data (one entry per query)
    const defaultState = {
      [sparqlName]: Object.keys(sparqlReducers).reduce((empty, reducerId) => {
        empty[reducerId] = {}
        return empty
      }, {})
    }
      
    return function enhancedWithSparqlReducer(state=defaultState, action) {
      //we need to split the state in two parts: the part handled by the main
      //reducer and the part handled by the sparql reducer (under the
      //`results` entry if `sparqlName` was not provided). We could be tempted
      //to give the whole state to both reducers, but if the main reducer was
      //built with `combineReducers`, `redux` will complain about 'unexpected
      //keys' (not harmful but anyway).
      
      let { [sparqlName]: sparqlState, ...mainState } = state
      return {
        ...reducer(mainState, action),
        [sparqlName]: Object.keys(sparqlReducers)
          .reduce((states, reducerId) => {
            states[reducerId] = 
              sparqlReducers[reducerId](sparqlState[reducerId], action)
            return states
          }, {})
      }
    }
  }
  
  return {
    sparqlConnect,
    enhanceReducer
  }
} 

export {
  buildSparqlConnector,
  // these constants will be imported by components
  LOADED,
  LOADING,
  FAILED
}
