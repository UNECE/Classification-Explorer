import remote from '../utils/remote-api'

export const LOAD_CLASSIFICATION_DETAILS = 'LOAD_CLASSIFICATION_DETAIL'

export const LOAD_CLASSIFICATION_DETAILS_SUCCESS = 'LOAD_CLASSIFICATION_DETAILS_SUCESS'
export const loadClassificationDetails = () =>
  (dispatch, getState) => {
    dispatch({
      type: LOAD_CLASSIFICATION_DETAILS
    })

    remote.classificationDetails()
      .then(rawResults => {
        dispatch({
          type: LOAD_CLASSIFICATION_DETAILS_SUCCESS,
          payload: processRaw(rawResults)
        })
      })
    }

function processRaw(rawResults){
  alert(rawResults.results.bindings.length);
  return rawResults.results.bindings.map(raw => raw.classification.value)
}
