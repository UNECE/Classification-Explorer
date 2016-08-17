import queries from './documented-queries'
import { buildSparqlConnector } from '../utils/sparql-connector'

export const {
  sparqlConnect,
  enhanceReducer
} = buildSparqlConnector(queries)

