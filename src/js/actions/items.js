import remote from '../utils/remote-api'

export const LOAD_ITEMS = 'LOAD_ITEMS'
export const LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS'

export const loadItemsIfNeeded = uri =>
  (dispatch, getState) => {
    const state = getState()
    if (state.classificationItems.hasOwnProperty(uri)) return
    dispatch(loadItems(uri))
  }

export const loadItems = (uri) => 
  (dispatch, getState) => {
    dispatch({
      type: LOAD_ITEMS,
      payload: { uri }
    })
    remote.levelItems(uri)
      .then(rawResults => {
        dispatch({
          type: LOAD_ITEMS_SUCCESS,
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
