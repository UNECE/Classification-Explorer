import { remoteGetClassificationsList } from '../utils/remote-api'

export const LOAD_CLASSIFICATION_LIST = 'LOAD_CLASSIFICATION_LIST'
export const LOAD_CLASSIFICATION_LIST_SUCCESS = 'LOAD_CLASSIFICATION_LIST_SUCCESS'

export const loadClassificationList = () =>
  (dispatch, getState) => {
    dispatch({
      type: LOAD_CLASSIFICATION_LIST
    })
    remoteGetClassificationsList()
      .then(rawResults => {
        dispatch({
          type: LOAD_CLASSIFICATION_LIST_SUCCESS,
          payload: processRaw(rawResults)
        })
      })
    }
  
function processRaw(rawResults){
  return rawResults.results.bindings.map(raw => raw.classification.value)
}
    