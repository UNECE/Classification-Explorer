import { routes } from './config-routes.js'
import { connect } from 'react-redux'

export const path = Object.keys(routes).reduce((mapping, route) => {
  mapping[route] = routes[route].pattern
  return mapping
}, {})

export const paramsToProps = Object.keys(routes).reduce((mapping, route) => {
  mapping[routes[route].pattern] = (state, { routeParams }) => 
    routes[route].paramsToProps(state, routeParams)
  return mapping
}, {})

export const uriToLink = Object.keys(routes).reduce((mapping, route) => {
  mapping[route] = routes[route].uriToLink
  return mapping
}, {})

export const connectFromRoute = (...args) => connect(
  (state, ownProps) => {
    const mapRoute = paramsToProps[ownProps.route.path]
    //TODO warning if no mapping is found for the route (because it fails
    //silently but it can hide an error)
    return mapRoute ? mapRoute(state, ownProps) : {}
  })(...args)



