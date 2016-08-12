import { remoteGetClassificationLevels } from '../utils/remote-api'

export const LOAD_LEVELS = 'LOAD_LEVELS'
export const LOAD_LEVELS_SUCCESS = 'LOAD_LEVELS_SUCCESS'

export const loadLevels = () =>
  (dispatch, getState) => {
    dispatch({
      type: LOAD_LEVELS
    })
    remoteGetClassificationLevels()
      .then(rawResults => {
        dispatch({
          type: LOAD_LEVELS_SUCCESS,
          payload: processRaw(rawResults)
        })
      })
    }


//TODO voir quoi parser
function processRaw(rawResults){
  return rawResults.results.bindings.map(raw => raw.classification.value)
}
