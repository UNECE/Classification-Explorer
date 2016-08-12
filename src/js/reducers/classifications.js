import {
  LOAD_CLASSIFICATIONS, LOAD_CLASSIFICATIONS_SUCCESS
} from '../actions/classifications'

const defaultClassif = {
  loaded: false,
  classifications: []
}

export default function classificationsReducer(state=defaultClassif, action) {
  switch (action.type) {
    case LOAD_CLASSIFICATIONS:
      return state
    case LOAD_CLASSIFICATIONS_SUCCESS:
      return {
        loaded: true,
        classifications: action.payload
      }
    default:
      return state
  }
}
