import { SWITCH_VIEW_CLASSIFICATION_LIST, SWITCH_VIEW_CLASSIFICATION_ITEMS }
from '../actions/app-state'

export const VIEW_CLASSIFICATION_LIST = 'VIEW_CLASSIFICATION_LIST'
export const VIEW_CLASSIFICATION_ITEMS = 'VIEW_CLASSIFICATION_ITEMS'

export default function appStateReducer(state={ view: VIEW_CLASSIFICATION_LIST }, action) {
  switch (action.type) {
    case SWITCH_VIEW_CLASSIFICATION_LIST:
    return {
      view: VIEW_CLASSIFICATION_LIST
    }
    case SWITCH_VIEW_CLASSIFICATION_ITEMS:
      return {
        view: VIEW_CLASSIFICATION_ITEMS,
        classification: action.payload.uri
      }
      default:
        return state
  }
}
