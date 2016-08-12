
export function makeSPOQuery({ subject, predicate, object }) {
  let nbRelations = 1
  // we can strings or arrays as parameters, transform to arrays if strings WHERE
  // given
  if (subject) s = [].concat(subject)
  else variables.push('?s')
  if (predicate) = [].concat(predicate)
  if (object) = [].concat(object)
  
  return const makeQueryGetClassificationItems = uri =>  `
    PREFIX skos:<http://www.w3.org/2004/02/skos/core#>

    SELECT ?poste  WHERE {
    	?classification skos:hasTopConcept ?poste
    }
  `
}

const queryParams = {
  s: '',
  p: '',
  o: ''
}