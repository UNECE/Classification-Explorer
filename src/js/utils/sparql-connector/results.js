/**
 * Compare results `vars` with expected results
 *
 * Throw an error if some expected results are not found in `vars`.
 * Return only `vars` entries mentioned in expected results.
 * Return initial `vars` if no results description was provided.
 * 
 * @param  {Object} vars         variables descriptions found in the results
 *                               returned by the server
 * @param  {Object} resultsDescr results description found in the query
 *                               documentation
 * @return {Object}              variables that need to be valued
 */
const checkVars = (vars, resultsDescr) => {
  if (!resultsDescr) return vars
  return Object.keys(resultsDescr).reduce((names, rsltName) => {
    if (vars.indexOf(rsltName) === -1) throw new Error(
`expected variable \`${rsltName}\` was not found in the results`)
    names.push(rsltName)
    return names
  }, [])
}

const buildProcessLine = vars => line =>
  //TODO we should throw an error if some non optional variables are not present
  //for a line (for that we need to handle information about optional variables
  //in the query documentation)
  vars.reduce((rslts, rsltDescr) => {
    const field = line[rsltDescr]
    //some optional variables might not be present in the line
    rslts[rsltDescr] = field !== undefined ? field.value : ''
    return rslts
  }, {})
  
const buildProcessFn = resultsDescr => rawResults => {
  //If no results description was provided, we will rely on the `heads.var`
  //property returned by the server
  const vars = checkVars(rawResults.head.vars, resultsDescr)
  return rawResults.results.bindings.map(buildProcessLine(vars))
}

const singleResultAjustments = results => {
  if (results.length === 1) return results[0]
  //If there is no result when a single result is expected, we throw an error.
  //The common use case for single results is when we try to show details for 
  //a selected object.
  if (results.length === 0) 
    throw new Error('One result was expected but no result was found')
  throw new Error(`Only one result expected, got ${results.length}`)
}
/**
 * Build a function to process raw results returned by the server
 *
 * If `resultsDescr` is provided, it will rely on it to check the shape of the
 * results returned by the server and process them.
 *
 * If `singleResult` evaluates to `true`, one and only one row is expected in
 * the results, and an exception will be thrown otherwise.
 * 
 * @param  {Object}  resultsDescr describe expected results (one entry per
 *                                expected result)
 * @param  {Boolean} singleResult `true` if we expect the results to containe
 *                                one and only one line
 * @return {Function}             proccess the results
 */
export function buildProcessResultsFn(resultsDescr, singleResult) {
  const processFn = buildProcessFn(resultsDescr)
  return singleResult ? 
    //special adjustments for `singleResult` requests
    rawResults => singleResultAjustments(processFn(rawResults)) :
    processFn
}
