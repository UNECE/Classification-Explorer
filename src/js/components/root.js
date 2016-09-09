
import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../store/configure-store'
import ClassificationExplorer from './classification-explorer'
import ClassificationDetails from './classification-details'
import ItemDetails from './item-details'
import CorrespondenceDetails from './correspondence-details'
import { path } from '../router-mapping'
import SearchResults from './search-results'
import Classifications from './classifications'

const store = configureStore()

//TODO use nested to avoids having to add <Menu /> to each view (problem: we
//cannot use `import { path } from '../router-mapping'` directly anymore
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={ClassificationExplorer}>
            <IndexRoute component={Classifications} />
            <Route path={path.classificationDetails}
                   component={ClassificationDetails} />
            <Route path={path.itemDetails}
                   component={ItemDetails} />
            <Route path={path.correspondenceDetails}
                   component={CorrespondenceDetails} />
            <Route path={path.searchItems}
                   component={SearchResults} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
