import {
  SWITCH_VIEW_CLASSIFICATIONS, SWITCH_VIEW_CLASSIFICATION_DETAILS,
  SHOW_LEVEL_ITEMS, TOGGLE_CORRESPONDENCE_DEFINTIONS, CHANGE_KEYWORD
} from '../actions/app-state'

export const VIEW_CLASSIFICATIONS = 'VIEW_CLASSIFICATIONS'
export const VIEW_CLASSIFICATION_DETAILS = 'VIEW_CLASSIFICATION_DETAILS'

export default function appStateReducer(state={ view: VIEW_CLASSIFICATIONS, keyword: 'test' }, action) {
  switch (action.type) {
    case SWITCH_VIEW_CLASSIFICATIONS:
    return {
      view: VIEW_CLASSIFICATIONS
    }
    case SWITCH_VIEW_CLASSIFICATION_DETAILS:
      return {
        view: VIEW_CLASSIFICATION_DETAILS,
        activeClassification: action.payload.uri,
        activeLevel: null,
        levelsLoaded: false,
        showCorrespondenceDefs: {}
      }
    case SHOW_LEVEL_ITEMS:
      return {
        ...state,
        activeLevel: action.payload.uri
      }
    case TOGGLE_CORRESPONDENCE_DEFINTIONS: {
      const { correspondence } = action.payload
      const { showCorrespondenceDefs } = state
      const newShowCorrespondenceDefs = {...showCorrespondenceDefs}

      if (showCorrespondenceDefs.hasOwnProperty(correspondence)){
        delete newShowCorrespondenceDefs[correspondence]
      } else newShowCorrespondenceDefs[correspondence] = true
      return {
        ...state,
        showCorrespondenceDefs: newShowCorrespondenceDefs
      }
    }
    case CHANGE_KEYWORD:
     return {
      ...state,
      keyword: action.payload.keyword
     }
    default:
      return state
  }
}
