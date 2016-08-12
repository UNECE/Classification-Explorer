import {
  SWITCH_VIEW_CLASSIFICATIONS, SWITCH_VIEW_CLASSIFICATION_DETAILS,
  SHOW_ITEMS_LEVEL
} from '../actions/app-state'

export const VIEW_CLASSIFICATIONS = 'VIEW_CLASSIFICATION'
export const VIEW_CLASSIFICATION_DETAILS = 'VIEW_CLASSIFICATION_DETAILS'

export default function appStateReducer(state={ view: VIEW_CLASSIFICATIONS }, action) {
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
        levelsLoaded: false
      }
    case SHOW_ITEMS_LEVEL:
      return {
        ...state,
        activeLevel: action.payload.uri
      }
    default:
      return state
  }
}
