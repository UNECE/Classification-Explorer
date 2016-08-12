import remote from '../utils/remote-api'

export const LOAD_CLASSIFICATION_DETAILS = 'LOAD_CLASSIFICATION_DETAIL'

export const LOAD_CLASSIFICATION_DETAILS_SUCCESS = 'LOAD_CLASSIFICATION_DETAILS_SUCCESS'
export const loadClassificationDetails = classification =>
  (dispatch, getState) => {
    dispatch({
      type: LOAD_CLASSIFICATION_DETAILS,
      payload: { classification }
    })

    remote.classificationDetails(classification)
      .then(rawResults => {
        dispatch({
          type: LOAD_CLASSIFICATION_DETAILS_SUCCESS,
          payload: {classification: classification, details : processRaw(rawResults)}
        })
      })
    }

function processRaw(rawResults){
  const { code, label, issued } = rawResults.results.bindings[0]
  return { code: code.value, label: label.value, issued:issued.value }
}
