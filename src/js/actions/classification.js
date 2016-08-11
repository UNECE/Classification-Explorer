import { remoteGetClassificationItems } from '../utils/remote-api'



export const LOAD_CLASSIFICATION_ITEMS = 'LOAD_CLASSIFICATION_ITEMS'
export const LOAD_CLASSIFICATION_ITEMS_SUCCESS = 'LOAD_CLASSIFICATION_ITEMS_SUCCESS'

export const loadClassificationItemsIfNeeded = uri =>
  (dispatch, getState) => {
    const state = getState()
    if (state.classificationItems.hasOwnProperty(uri)) return
    dispatch(loadClassificationItems(uri))
  }

export const loadClassificationItems = (uri) =>
  (dispatch, getState) => {

    dispatch({
      type: LOAD_CLASSIFICATION_ITEMS,
      payload: { uri }
    })
    remoteGetClassificationItems(uri)
      .then(rawResults => {
        dispatch({
          type: LOAD_CLASSIFICATION_ITEMS_SUCCESS,
          payload: {
            uri,
            items: processRaw(rawResults)
          }
        })
      })
    }

function processRaw(rawResults){
  return rawResults.results.bindings.map(raw => raw.poste.value)
}
