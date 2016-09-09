import config from '../config'
import buildFetch from '../sparql/stardog-remote-call'
import { setFetchQuery } from '../sparql/configure-sparql'

const queryURL = config.queryURL
const testQuery = 'SELECT ?s { ?s ?p ?o} LIMIT 1'

const auth = { login: false, pending: false }

export function requireAuth(nextState, replace) {
  if (!auth.login) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export function checkFromPassword(username, password) {
  const authorization = 'Basic ' + btoa(`${username}:${password}`)
  return check(authorization)
}

export function checkFromStorage() {
  return check(window.localStorage.token)
}

export function check(authorization) {
  const fetchQuery = buildFetch(queryURL, authorization)
  return fetchQuery(testQuery)
    .then(() => {
      auth.login = true
      window.localStorage.token = authorization
      setFetchQuery(fetchQuery)
    })
    .catch(() => auth.login = false)
}
