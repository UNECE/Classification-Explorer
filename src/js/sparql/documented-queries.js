import queries from './queries'

const {
  classifications,
  classificationDetails,
  classificationLevels,
  classificationCorrespondences,
  levelItems,
  correspondenceDefinitions,
  itemDetails,
  itemChildren,
  correspondenceDetails,
  searchEverything,
  searchItems
} = queries

export default {
  classifications: {
    descr: 'Retrieve all the classifications',
    whatWeGet: 'classifications',
    results: {
      classification: 'classification (uri)'
    },
    params: [],
    queryBuilder: classifications
  },
  classificationDetails: {
    descr: 'Retrieve details (depth and label) for a given classification',
    singleResult: true,
    // no need for `whatWeGet` since we retrieve only one line :  results
    // will be directly exposed with the variable names described in `results`
    params: [{
      name: 'classification',
      descr: 'classification (uri)'
    }],
    results: {
      code: 'classification code (integer)',
      label: 'classification label (string)',
      issued: 'issued'
    },
    queryBuilder: classificationDetails
  },
  classificationLevels: {
    descr: 'Retrieve levels with their depth and label for a given classification',
    params: [{
      name: 'classification',
      descr: 'classification (uri)'
    }],
    whatWeGet: 'levels',
    results: {
      level: 'level (uri)',
      depth: 'depth of the level (integer)',
      label: 'label of the level (string)'
    },
    queryBuilder: classificationLevels
  },
  classificationCorrespondences: {
    descr: 'Retrieve correspondences tables for a given classification',
    params: [{
      name: 'classification',
      descr: 'classification (uri)'
    }],
    whatWeGet: 'correspondences',
    results: {
      table: 'correspondence table (uri)',
      code: 'correspondence code'
    },
    queryBuilder: classificationCorrespondences
  },
  levelItems: {
    descr: 'Retrieve items with their details (code and label) for a given level',
    params: [{
      name: 'level',
      descr: 'level (uri)'
    }],
    whatWeGet: 'items',
    results: {
      item: 'item (uri)',
      code: 'code of the item (string)',
      label: 'label of the item (string)'
    },
    queryBuilder: levelItems
  },
  correspondenceDefinitions: {
    params: [{
      name: 'correspondence'
    }],
    results: {
      definition: 'correspondence definition (string)'
    },
    whatWeGet: 'definitions',
    queryBuilder: correspondenceDefinitions
  },
  itemDetails: {
    params: [{
      name: 'item'
    }],
    results: {
      label: 'label',
      code: 'code',
      label: 'label',
      text: 'text',
      cl: 'classification',
      clCode: 'classificationCode',
      clLabel: 'classificationLabel',
      parent: 'parent',
      parentCode: 'parentCode',
      parentLabel: 'parentLabel'
    },
    singleResult: true,
    queryBuilder: itemDetails
  },
  itemChildren: {
    params: [{
      name: 'item'
    }],
    results: {
      item: 'child item',
      code: 'child item code',
      label: 'child item label'
    },
    whatWeGet: 'items',
    queryBuilder: itemChildren
  },
  correspondenceDetails: {
    params: [{
      name: 'correspondence'
    }],
    results: {
      classification: 'classification involved in the comparison',
      code: 'classificaiton code',
      label: 'classification label'
    },
    whatWeGet: 'classifications',
    queryBuilder: correspondenceDetails
  },
  searchEverything: {
    params: [{
      name: 'keyword'
    }],
    results: {
      subject: 'matching instances (array?)',
      predicate: 'predicate',
      match: 'keyword match',
      score: 'score'
    },
    whatWeGet: 'results',
    queryBuilder: searchEverything
  },
  searchItems: {
    params: [{
      name: 'keyword'
    }],
    results: {
      item: 'item',
      classification: 'classification',
      predicate: 'predicate', //mainly xkos:plaintText and skos:prefLabel
      match: 'matching value'
    },
    whatWeGet: 'items',
    queryBuilder: searchItems
  }
}
