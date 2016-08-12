import remote from '../utils/remote-api'

export const LOAD_CORRESPONDENCES = 'LOAD_CORRESPONDENCES'
export const LOAD_CORRESPONDENCES_SUCCESS = 'LOAD_CORRESPONDENCES_SUCCESS'

export const loadCorrespondences = (classification) =>
  (dispatch, getState) => {
    dispatch({
      type: LOAD_CORRESPONDENCES,
      payload: { classification }
    })
    remote.classificationCorrespondences(classification)
      .then(rawResults => {
        dispatch({
          type: LOAD_CORRESPONDENCES_SUCCESS,
          payload: {classification: classification, correspondences: processRaw(rawResults)}
        })
      })
    }



function processRaw(rawResults){
  return rawResults.results.bindings.map(raw => ({table: raw.table.value, label: raw.label?raw.label.value:''}))
}
