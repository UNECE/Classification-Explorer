import {
  LOAD_CLASSIFICATION_ITEMS, LOAD_CLASSIFICATION_ITEMS_SUCCESS
} from '../actions/classification'

export default function classificationItemsReducer(state={}, action) {
  switch (action.type) {
    case LOAD_CLASSIFICATION_ITEMS:
      return {
        ...state,
        [action.payload.uri]: {
            loaded: false,
            items: []
          }
      }
    case LOAD_CLASSIFICATION_ITEMS_SUCCESS:
      return {
        ...state,
        [action.payload.uri]: {
            loaded: true,
            items: action.payload.items
          }
      }
    default:
      return state
  }
}
