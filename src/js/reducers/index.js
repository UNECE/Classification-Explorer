import { combineReducers } from 'redux'
import appState from './app-state'
import classifications from './classifications'
import itemsByLevel from './items-by-level'
import levelsByClassification from './levels-by-classification'
import correspondencesByClassification from './correspondences-by-classification'
import details from './details'

export default combineReducers({
  appState,
  classifications,
  levelsByClassification,
  itemsByLevel,
  details
})

/*
const stateSample = {
  appState: {
    view: VIEW_CLASSIFICATION_DETAILS,
    [VIEW_CLASSIFICATION_DETAILS]: {
      uri: 'http://stamina-project.org/codes/nacer2/nace',
      levelsLoaded: true,
      activeLevel: 'http://stamina-project.org/codes/nacer2/nace/division'
    }
  },
  classificationList: {
    loaded: true,
    classifications: [
      'http://stamina-project.org/codes/cpav21/cpa',
      'http://stamina-project.org/codes/cpav2008/cpa',
      'http://stamina-project.org/codes/cpcv2/cpc',
      'http://stamina-project.org/codes/cpcv11/cpc',
      'http://stamina-project.org/codes/cpcv21/cpc',
      'http://stamina-project.org/codes/isicr4/isic',
      'http://stamina-project.org/codes/nacer2/nace'
    ]
  },
  itemsByClassification: {
    'http://stamina-project.org/codes/nacer11/nace': {
      loaded: true,
      items: [
        'http://stamina-project.org/codes/cpav21/section/H',
        'http://stamina-project.org/codes/cpav21/section/P',
        'http://stamina-project.org/codes/cpav21/section/F',
        'http://stamina-project.org/codes/cpav21/section/B',
        'http://stamina-project.org/codes/cpav21/section/A'
      ]
    },
    details: {
      'http://stamina-project.org/codes/cpav21/section/B': {
        label: 'description de cet item'
      }
    },
    levelsByClassification: {
      'http://stamina-project.org/codes/nacer2/nace': [{
        uri: 'http://stamina-project.org/codes/nacer2/nace/section',
        label: 'section'
      }, {
        uri: 'http://stamina-project.org/codes/nacer2/nace/division',
        label: 'division'
      }, {
        uri: 'http://stamina-project.org/codes/nacer2/nace/group',
        label: 'group'
      }, {
        uri: 'http://stamina-project.org/codes/nacer2/nace/class',
        label: 'class'
      }]
    }
  }
}
*/
