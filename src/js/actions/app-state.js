export const SWITCH_VIEW_CLASSIFICATIONS = 'SWITCH_VIEW_CLASSIFICATIONS'
export const switchViewClassificationList = () => ({
  type: SWITCH_VIEW_CLASSIFICATIONS
})

export const SWITCH_VIEW_CLASSIFICATION_DETAILS = 'SWITCH_VIEW_CLASSIFICATION_DETAILS'
export const switchViewClassificationDetails = uri => ({
    type: SWITCH_VIEW_CLASSIFICATION_DETAILS,
    payload: {
      uri
    }
})

export const SHOW_ITEMS_LEVEL = 'SHOW_ITEMS_LEVEL'
export const showItemsLevel = uri => ({
  type: SHOW_ITEMS_LEVEL,
  payload: {
    uri
  }
})