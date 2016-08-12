import {
  LOAD_CLASSIFICATION_DETAILS, LOAD_CLASSIFICATION_DETAILS_SUCCESS
} from '../actions/classification-details'

const defaultClassif = {
  loaded: false,
  details: []
}

export default function classificationsReducer(state=defaultClassif, action) {
  switch (action.type) {
    case LOAD_CLASSIFICATION_DETAILS:
      return state
    case LOAD_CLASSIFICATION_DETAILS_SUCCESS:
      return {
        loaded: true,
        details: action.payload
      }
    default:
      return state
  }
}
