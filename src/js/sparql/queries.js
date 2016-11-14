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
    <${uri}> skos:notation ?code ; skos:prefLabel ?label ; dcterms:issued ?issued .
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
  SELECT DISTINCT ?level ?depth ?label
  WHERE {
    <${uri}> xkos:levels/rdf:rest*/rdf:first ?level .
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
  SELECT ?table ?definition ?code WHERE {
    ?table xkos:compares <${uri}> ;
           skos:definition ?definition
    OPTIONAL {
      ?table skos:notation ?code
    }
    # We miss somme correspondences where there is no definition in english
    FILTER ( langMatches(lang(?definition), "EN") || lang(?definition)="")
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

/**
 * Builds the query that gets the list of items of a given level.
 */
const classificationItems = uri => `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT DISTINCT ?item ?code ?label WHERE {
    <${uri}> xkos:levels/rdf:rest*/rdf:first ?level .
    ?level skos:member ?item .
    ?item skos:notation ?code ; skos:prefLabel ?label .
  } ORDER BY ?code LIMIT 25
`

const itemDetails = item => `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  PREFIX xkos:<http://rdf-vocabulary.ddialliance.org/xkos#>
  SELECT ?label ?code ?label ?text ?cl ?clCode ?clLabel ?parent ?parentCode
      ?parentLabel {
    <${item}> skos:prefLabel ?label ;
              skos:notation ?code ;
              skos:inScheme ?cl .
    ?cl skos:prefLabel ?clLabel

    OPTIONAL {
      ?cl skos:notation ?clCode .
    }


    OPTIONAL {
      <${item}> skos:broader ?parent .
        ?parent skos:prefLabel ?parentLabel .
      OPTIONAL { ?parent skos:notation ?parentCode . }
      FILTER ( langMatches(lang(?parentLabel), "EN"))
    }

    # if we use only one OPTIONAL keyword, we will not receive the note
    # if there is no parent
    OPTIONAL {
     <${item}> xkos:coreContentNote ?content .
     ?content xkos:plainText ?text .
    }
    FILTER (
      langMatches(lang(?label), "EN") &&
      langMatches(lang(?clLabel), "EN"))
  }
`

const itemChildren = item => `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT ?item ?code ?label {
    <${item}> skos:narrower ?item .
    ?item skos:notation ?code .
    ?item skos:prefLabel ?label
    FILTER (langMatches(lang(?label), "EN"))
  } ORDER BY ?code
`

const correspondenceAssociations = correspondence => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xkos: <http://rdf-vocabulary.ddialliance.org/xkos#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT 
  ?association
  ?comment
  ?source ?sourceCode ?sourceLabel
  ?target ?targetCode ?targetLabel
WHERE {
  <${correspondence}> xkos:madeOf ?association .
  ?association xkos:sourceConcept ?source ;
               xkos:targetConcept ?target .
  OPTIONAL {
    ?association rdfs:comment ?comment
  }
  OPTIONAL {
    ?source skos:notation ?sourceCode ;
            skos:prefLabel ?sourceLabel .
    FILTER (langMatches(lang(?sourceLabel), "EN"))              
  }
  OPTIONAL {
    ?target skos:notation ?targetCode ;
            skos:prefLabel ?targetLabel
    FILTER (langMatches(lang(?targetLabel), "EN"))              
  }
}               
ORDER BY ?sourceCode
`

const itemCorrespondences = hash => {
  const  [item, correspondenceTable] = hash.split('||');
  return `
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
    SELECT ?association ?item ?code ?label {
    {
    <${correspondenceTable}> xkos:madeOf ?association .
  ?association xkos:sourceConcept <${item}> ;
               xkos:targetConcept ?item .
               ?item skos:notation ?code .
               ?item skos:prefLabel ?label
               FILTER (langMatches(lang(?label), "EN"))
    }
    UNION {

  <${correspondenceTable}> xkos:madeOf ?association .
  ?association xkos:targetConcept <${item}> ;
               xkos:sourceConcept ?item .
               ?item skos:notation ?code .
               ?item skos:prefLabel ?label
               FILTER (langMatches(lang(?label), "EN"))

  }
  }
  `
}

const correspondenceDetails = correspondence => `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  PREFIX xkos:<http://rdf-vocabulary.ddialliance.org/xkos#>
  SELECT ?classification ?code ?label {
    <${correspondence}> xkos:compares ?classification .
    ?classification skos:prefLabel ?label ;
                    skos:notation ?code
  }
`
const searchEverything = keyword => `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT DISTINCT ?subject ?predicate ?match ?score WHERE {
    ?subject ?predicate ?match .
    (?match ?score) <tag:stardog:api:property:textMatch> '${keyword}*'.
  }
`

const searchItems = hash => {
  const  [keyword, searchForCode] = hash.split('||');
  if(searchForCode==='true'){
    return  `
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
    SELECT DISTINCT
      ?item ?code ?itemLabel
      ?classification ?classificationLabel ?coreContentNoteText ?additionalContentNoteText
    WHERE {
      ?item skos:inScheme ?classification ;
            skos:notation ?code ;
            skos:prefLabel ?itemLabel .
      ?classification skos:prefLabel ?classificationLabel .
      FILTER regex(?code, "${keyword}", "i")
    } order by ?code
    `
  }else{

  return  `
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT DISTINCT
    ?item ?code ?itemLabel
    ?classification ?classificationLabel ?coreContentNoteText ?additionalContentNoteText
  WHERE {
    ?item skos:inScheme ?classification ;
          skos:notation ?code ;
          skos:prefLabel ?itemLabel ;
          xkos:coreContentNote ?coreContentNote ;
          xkos:additionalContentNote ?additionalContentNote .
    ?coreContentNote xkos:plainText ?coreContentNoteText .
    ?additionalContentNote   xkos:plainText ?additionalContentNoteText .
    ?classification skos:prefLabel ?classificationLabel .

    FILTER ( langMatches(lang(?itemLabel), "EN") &&
    (
      regex(?code, "${keyword}", "i") ||
      regex(?itemLabel, "${keyword}", "i") ||
      regex(?coreContentNoteText, "${keyword}", "i") ||
      regex(?additionalContentNoteText, "${keyword}", "i") ||
      regex(?classificationLabel, "${keyword}", "i")
    ))
  } order by ?code
`}
}



export default {
  correspondenceAssociations,
  classifications,
  classificationDetails,
  classificationItems,
  classificationLevels,
  classificationCorrespondences,
  correspondences,
  levelItems,
  itemCorrespondences,
  itemDetails,
  itemChildren,
  correspondenceDetails,
  searchEverything,
  searchItems
}
