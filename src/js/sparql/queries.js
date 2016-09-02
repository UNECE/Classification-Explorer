/**
 * Builds the query that retrieve the list of all classifications.
 */
const classifications = () => `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT ?classification ?code ?label WHERE {
    ?classification rdf:type skos:ConceptScheme ; skos:notation ?code ; skos:prefLabel ?label .
  } ORDER BY ?code
 `

/**
 * Builds the query that gets the details about a classification.
 */
 //TODO @Franck workaround the fact the DB is not returning any line otherwise
const classificationDetails = uri => `
  PREFIX dcterms: <http://purl.org/dc/terms/>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  SELECT ?code ?label ?issued WHERE {
    <${uri}> skos:notation ?code ; skos:prefLabel ?label ; skos:prefLabel  ?issued .
  }
`

/**
 * Builds the query that gets the levels of a classification.
 * Using SPARQL 1.1 property paths, see https://www.w3.org/TR/sparql11-query/#propertypaths
 */
const classificationLevels = uri => `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  PREFIX xkos:<http://rdf-vocabulary.ddialliance.org/xkos#>
  SELECT ?level ?depth ?label
  WHERE {
    <${uri}> xkos:hasLevels/rdf:rest*/rdf:first ?level .
    ?level xkos:depth ?depth ; skos:prefLabel ?label .
  } ORDER BY ?depth
`
/**
 * Builds the query that gets the correspondence tables for a given classification.
 * TODO Improve the database, all tables don't have a label.
 */
const classificationCorrespondences = uri => `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  PREFIX xkos:<http://rdf-vocabulary.ddialliance.org/xkos#>
  SELECT ?table ?code WHERE {
    ?table xkos:compares <${uri}> .
    OPTIONAL { 
      ?table skos:notation ?code
    }
  }
`

/**
 * Builds the query that gets all the correspondence tables.
 * TODO Improve the database, all tables don't have a label.
 */
const correspondences = uri => `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  PREFIX xkos:<http://rdf-vocabulary.ddialliance.org/xkos#>
  SELECT ?table ?label WHERE {
    ?table rdf:type xkos:Corresponce .
    OPTIONAL { ?table skos:prefLabel ?label }
  }
`

/**
 * Builds the query that gets the list of items of a given level.
 */
const levelItems = uri => `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT ?item ?code ?label WHERE {
    <${uri}> skos:member ?item .
    ?item skos:notation ?code ; skos:prefLabel ?label .
  } ORDER BY ?code
`

const correspondenceDefinitions = correspondence => `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT  ?code ?definition WHERE {
    <${correspondence}> skos:notation ?code ; skos:definition ?definition ;
  }
`

const itemDetails = item => `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  PREFIX xkos:<http://rdf-vocabulary.ddialliance.org/xkos#>
  SELECT ?label ?code ?label ?text ?parent ?parentCode ?parentLabel {
    <${item}> skos:prefLabel ?label ;
              skos:notation ?code .

    OPTIONAL {
      <${item}> skos:broader ?parent .
      ?parent skos:notation ?parentCode .
      ?parent skos:prefLabel ?parentLabel .
    }
    # if we use only one OPTIONAL keyword, we will not receive the note
    # if there is no parent
    OPTIONAL {
     <${item}> xkos:coreContentNote ?content .
     ?content xkos:plainText ?text .
    }
  }
`

const itemChildren = item => `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT ?item ?code ?label {
    <${item}> skos:narrower ?item .
    ?item skos:notation ?code .
    ?item skos:prefLabel ?label
  }
`

const correspondenceDetails = correspondence => `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  PREFIX xkos:<http://rdf-vocabulary.ddialliance.org/xkos#>
  SELECT ?classification ?code ?label {
    <${correspondence}> xkos:compares ?classification .
    ?classification skos:prefLabel ?label ;
                    skos:notation ?code
  }
`
export default {
  classifications,
  classificationDetails,
  classificationLevels,
  classificationCorrespondences,
  correspondences,
  levelItems,
  correspondenceDefinitions,
  itemDetails,
  itemChildren,
  correspondenceDetails
}
