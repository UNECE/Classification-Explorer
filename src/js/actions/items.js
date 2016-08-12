import remote from '../utils/remote-api'

export const LOAD_ITEMS = 'LOAD_ITEMS'
export const LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS'

export const loadItemsIfNeeded = level =>
  (dispatch, getState) => {
    const state = getState()
    if (state.classificationItems.hasOwnProperty(level)) return
    dispatch(loadItems(level))
  }

export const loadItems = (level) =>
  (dispatch, getState) => {
    dispatch({
      type: LOAD_ITEMS,
      payload: { level }
    })
    remote.levelItems(level)
      .then(rawResults => {
        dispatch({
          type: LOAD_ITEMS_SUCCESS,
          payload: {
            level,
            items: processRaw(rawResults)
          }
        })
      })
    }

function processRaw(rawResults){
  return rawResults.results.bindings.map(({ item, code, label }) => ({
      item: item.value,
      code: code.value,
      label: label.value
  }))
}
