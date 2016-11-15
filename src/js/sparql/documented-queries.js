import queries from './queries'

const {
  correspondenceAssociations,
  classifications,
  classificationDetails,
  classificationItems,
  classificationLevels,
  classificationCorrespondences,
  levelItems,
  itemCorrespondences,
  itemDetails,
  itemChildren,
  correspondenceDetails,
  searchEverything,
  searchItems
} = queries

export default {
  correspondenceAssociations: {
    descr: 'Retrieve sources and targets for all the associations in a correspondence table',
    whatWeGet: 'associations',
    results: {
      association: 'association (uri)',
      source: 'source (uri)',
      target: 'target (uri)',
      comment: 'comment related to the association',
      sourceCode: 'source item code',
      sourceLabel: 'source item label',
      targetCode: 'target item code',
      targetLabel: 'target item label'
    },
    params: [{
      name: 'correspondence',
      descr: 'the correspondence table'
    }],
    queryBuilder: correspondenceAssociations
  },
  classifications: {
    descr: 'Retrieve all the classifications',
    whatWeGet: 'classifications',
    results: {
      classification: 'classification (uri)',
      label: 'classification label (string)'
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
      definition: 'correspondence definition',
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
  itemCorrespondences: {
    descr: 'Retrieve items with their details (code and label) in correspondence with the given item in the given classification',
    params: [{
      name: 'hash',
      descr: 'hash of both item and classification (uris)'
    }],
    whatWeGet: 'items',
    results: {
      item: 'item (uri)',
      code: 'code of the item (string)',
      label: 'label of the item (string)'
    },
    queryBuilder: itemCorrespondences
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
      source: 'classification acting as source',
      sourceCode: 'source classification code',
      sourceLabel: 'source classification label',
      target: 'classification acting as target',
      targetCode: 'target classification code',
      targetLabel: 'target classification label'
    },
    singleResult: true,
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
      name: 'hash'
    }],
    results: {
      item: 'item',
      itemLabel: 'itemLabel',
      classification: 'classification',
      classificationLabel: 'classificationLabel',
      coreContentNoteText: 'coreContentNoteText',
      additionalContentNoteText: 'additionalContentNoteText',
      code:'code'
    },
    whatWeGet: 'items',
    queryBuilder: searchItems
  },
  classificationItems: {
    params: [{
      name: 'classificationId'
    }],
    results: {
      item: 'item',
      code: 'code',
      label: 'label'
    },
    whatWeGet: 'items',
    queryBuilder: classificationItems
  }
}
