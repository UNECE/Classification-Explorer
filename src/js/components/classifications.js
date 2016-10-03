import React from 'react'
import { switchViewClassificationDetails } from '../actions/app-state'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connect } from 'react-redux'

function Classifications({ loaded, classifications,
    switchViewClassificationDetails }) {
  if (loaded !== LOADED) return <span>loading</span>
  //we could also write something like
  //if (loaded === FAILED) 
  //  return <span>error while retrieving clasifications/span>
  return (
    <div>
      <h1>Classifications</h1>
      <ul>
        { classifications.map(({ classification }) =>
            <li key={classification}>
              <a onClick={() => switchViewClassificationDetails(classification)} href='#'>
                {classification}
              </a>
            </li>
          )}
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  switchViewClassificationDetails
}

//`sparqlConnect.queryName` can be used with no argument if we do not need to
//connect to the store. Here, we need the store to dispacth the
//`switchViewClassificationDetails` action. In a future version, we could try
//to handle every navigation action via `react-router`, and avoid the need for
//that kind of `connect`. Another option could be to pass all `appState`
//information down the tree (might not be too difficult because `appState` is
//not a complex object) and a generic action dispatcher.

/*
sparql 'classifications' query documentation:
```
classifications: {
  descr: 'Retrieve all the classifications',
  whatWeGet: 'classifications',
  results: {
    classification: 'classification (uri)'
  },
  params: [],
  queryBuilder: classifications
}
```
It means that:
- the component does not need any sparql prop ;
- the results will be provided to the component with the key `classifications` ;
- the results will be an array of objects with one propery: `classification`
*/

export default connect(undefined, mapDispatchToProps)(
  sparqlConnect.classifications(Classifications))