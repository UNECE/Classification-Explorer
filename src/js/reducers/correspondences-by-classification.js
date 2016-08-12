import {
  LOAD_CORRESPONDENCES, LOAD_CORRESPONDENCES_SUCCESS
} from '../actions/correspondences'

export default function correspondencesByClassification(state={} , action) {
  switch (action.type) {
    case LOAD_CORRESPONDENCES:
      return {
        ...state,
        [action.payload.classification]: {
            loaded: false,
            correspondences: []
          }
      }
    case LOAD_CORRESPONDENCES_SUCCESS:
    return {
      ...state,
      [action.payload.classification]: {
          loaded: true,
          correspondences: action.payload.correspondences
        }
    }
    default:
      return state
  }
}
