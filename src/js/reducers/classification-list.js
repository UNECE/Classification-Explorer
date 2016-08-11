import {
  LOAD_CLASSIFICATION_LIST, LOAD_CLASSIFICATION_LIST_SUCCESS
} from '../actions/classification-list'

const defaultClassif = {
  loaded: false,
  classifications: []
}

export function classificationListReducer(state=defaultClassif, action) {
  switch (action.type) {
    case LOAD_CLASSIFICATION_LIST:
      return state
    case LOAD_CLASSIFICATION_LIST_SUCCESS:
      return {
        loaded: true,
        classifications: action.payload
      }
    default:
      return state
  }
}