import queries from './documented-queries'
import { buildSparqlConnector } from '../utils/sparql-connector'
import credentials from '../credentials'
import config from '../config'

const { username, password } = credentials
const authorization = 'Basic ' + btoa(`${username}:${password}`)

const queryURL = config.queryURL

export const {
  sparqlConnect,
  enhanceReducer
} = buildSparqlConnector(queries, queryURL, authorization)
