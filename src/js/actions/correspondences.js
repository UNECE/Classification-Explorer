import remote from '../utils/remote-api'

export const LOAD_CORRESPONDENCES = 'LOAD_CORRESPONDENCES'
export const LOAD_CORRESPONDENCES_SUCCESS = 'LOAD_CORRESPONDENCES_SUCCESS'

export const loadCorrespondences = (uri) =>
  (dispatch, getState) => {
    dispatch({
      type: LOAD_CORRESPONDENCES
    })
    remote.classificationCorrespondences(uri)
      .then(rawResults => {
        dispatch({
          type: LOAD_CORRESPONDENCES_SUCCESS,
          payload: processRaw(rawResults)
        })
      })
    }


//TODO retrieve labels too
function processRaw(rawResults){
  return rawResults.results.bindings.map(raw => raw.table.value)
}
