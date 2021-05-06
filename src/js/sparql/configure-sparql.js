import queries from './documented-queries';
import { buildSparqlConnector } from 'sparql-connect';

export const {
  mainReducer,
  sparqlConnect,
  enhanceReducer,
  setFetchQuery,
} = buildSparqlConnector(queries);
