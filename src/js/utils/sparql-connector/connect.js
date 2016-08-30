import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntry } from './state-utils'
import { LOADING, LOADED, FAILED } from './remote-constants'

export function buildConnect(queryName, query, loadIfNeeded, sparqlName) {

  return function sparqlConnect(mapStateToProps, mapDispatchToProps) {
    // the local variable that holds the wrapped component must start with an
    // uppercase (ie  `function(myComponent)` won't work)
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    let { whatWeGet, params, singleResult } = query
    whatWeGet = whatWeGet || 'results'
    //TODO check if the use of `connect` here is ok (we might better build the
    //component outside, in order to avoid useless calls to `connect`:
    //`connect` produces a formal description, not a per-instance based function; in other
    //words, `connect` won't build `mapDispatchToProps` for each instance, but
    //only once for the component, and we should not lose this benefit).
    const propsToArgs = props => Object.keys(params).map(param =>
      props[params[param].name])

    const loadIfNeededWithArgs = props => loadIfNeeded(...propsToArgs(props))

    return function (WrappedComponent) {
      class Connect extends Component {

        componentWillMount() {
          this.props.loadIfNeeded(this.props)
        }

        render() {
          return <WrappedComponent {...this.props} />
        }
      }
      //TODO generate `propTypes`

      //We feed `WrappedComponent` with props related to the sparql query:
      //- loaded: LOADING, LOADED or FAILED ;
      //- if LOADED: [whatWeGet]: the results, we use the `whatWeGet` property for the
      //query documentation to expose the results with the right name (instead
      //of a generic name)
      //- if FAILED: error, the error message returned by the promise when
      //trying to load the results.
      const enhanceMSTP = (state, ownProps) => {
        const props = mapStateToProps ?
          Object.assign({}, ownProps, mapStateToProps(state, ownProps)) :
          {}
        const entry = getEntry(state[sparqlName][queryName], query.params, props)
        const loaded = entry ? entry.status  : LOADING
        //success
        if (loaded === LOADED) {
          if (singleResult) return {
            ...props,
            loaded,
            ...entry.results
          }
          else return {
            ...props,
            loaded,
            [whatWeGet]: entry.results
          }
        }
        //failure
        if (loaded === FAILED) return {
          ...props,
          loaded,
          error: entry.error
        }
        //loading
        return {
          ...props,
          loaded
        }
        return props
      }

      const enhanceMDTP = Object.assign(mapDispatchToProps || {}, {
        loadIfNeeded: loadIfNeededWithArgs
      })

      return connect(enhanceMSTP, enhanceMDTP)(Connect)
    }
  }
}
