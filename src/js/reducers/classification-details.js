import {
  LOAD_CLASSIFICATION_DETAILS, LOAD_CLASSIFICATION_DETAILS_SUCCESS
} from '../actions/classification-details'

export default function classificationDetails(state={} , action) {
  switch (action.type) {
    case LOAD_CLASSIFICATION_DETAILS:
      return {
        ...state,
        [action.payload.classification]: {
            loaded: false,
            details: {}
          }
      }
    case LOAD_CLASSIFICATION_DETAILS_SUCCESS:
    return {
      ...state,
      [action.payload.classification]: {
          loaded: true,
          details: action.payload.details
        }
    }
    default:
      return state
  }










}
