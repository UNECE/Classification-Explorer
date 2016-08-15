# Application cinematics

The application starting point is `index.html`, which just loads the `js/classification.js` script and declares an HTML `div` element.

The `classification.js` script is a bundle produced by the build process from the different JavaScript files that constitute the source code. The entry point is `main.js`, which calls `ReactDOM.render` on the `Root` React component into the `div` element in `index.html`. The `Root` component only has a `render` method which returns a `Provider` component from the [React Redux](https://github.com/reactjs/react-redux), which itself embeds the top-level business component, `ClassificationExplorer`.

The `Provider` component is passed a `store` property with a value provided by the `store/configure-store` script. This script returns in fact the result of the Redux `createStore` [method](https://github.com/reactjs/redux/blob/master/docs/api/createStore.md) applied to the following arguments:

* `reducer`: `mainReducer` which is a [combination](http://redux.js.org/docs/api/combineReducers.html) of the application reducers, defined in `reducers/index.js`.
* `preloadedState`: `undefined` at this stage.
* `enhancer`: a [composition](https://github.com/reactjs/redux/blob/master/docs/api/compose.md) of two Redux middlewares ([Redux Thunk](https://github.com/gaearon/redux-thunk) and [Redux Logger](https://github.com/evgenyrodionov/redux-logger)) and of the [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) extension.

In short, the `Provider` component initiates the application state in its `store` property and creates the `ClassificationExplorer` component.

`ClassificationExplorer` has no rendering of its own: it just creates a child component depending on the state of the application:
* `Classifications` if `state.appState.view` is set to `VIEW_CLASSIFICATIONS` (this is the default value, as specified in `reducers/app-state.js`).
* `ClassificationDetails` if it is set to `VIEW_CLASSIFICATION_DETAILS`; in that case, `state.appState.activeClassification` contains the URI of the classification that is currenly viewed.

The connection between the application state and the component is made through the `connect` Redux mechanism.
