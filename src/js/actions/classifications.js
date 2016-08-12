import { remoteGetClassificationsList } from '../utils/remote-api'

export const LOAD_CLASSIFICATIONS = 'LOAD_CLASSIFICATIONS'
export const LOAD_CLASSIFICATIONS_SUCCESS = 'LOAD_CLASSIFICATIONS_SUCCESS'

export const loadClassifications = () =>
  (dispatch, getState) => {
    dispatch({
      type: LOAD_CLASSIFICATIONS
    })
    remoteGetClassificationsList()
      .then(rawResults => {
        dispatch({
          type: LOAD_CLASSIFICATIONS_SUCCESS,
          payload: processRaw(rawResults)
        })
      })
    }
  
function processRaw(rawResults){
  return rawResults.results.bindings.map(raw => raw.classification.value)
}
    