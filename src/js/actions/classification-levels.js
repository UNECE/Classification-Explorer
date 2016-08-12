import { remoteGetClassificationLevels } from '../utils/remote-api'

export const LOAD_CLASSIFICATION_LEVELS = 'LOAD_CLASSIFICATION_LEVELS'
export const LOAD_CLASSIFICATION_LEVELS_SUCCESS = 'LOAD_CLASSIFICATION_LEVELS_SUCCESS'

export const loadClassificationLevels = () =>
  (dispatch, getState) => {
    dispatch({
      type: LOAD_CLASSIFICATION_LEVELS
    })
    remoteGetClassificationLevels()
      .then(rawResults => {
        dispatch({
          type: LOAD_CLASSIFICATION_LEVEL_SUCCESS,
          payload: processRaw(rawResults)
        })
      })
    }


//TODO voir quoi parser
function processRaw(rawResults){
  return rawResults.results.bindings.map(raw => raw.classification.value)
}
