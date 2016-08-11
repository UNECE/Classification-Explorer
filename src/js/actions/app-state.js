export const SWITCH_VIEW_CLASSIFICATION_LIST = 'SWITCH_VIEW_CLASSIFICATION_LIST'
export const viewClassificationList = () => ({
  type: SWITCH_VIEW_CLASSIFICATION_LIST
})

export const SWITCH_VIEW_CLASSIFICATION_ITEMS = 'SWITCH_VIEW_CLASSIFICATION_ITEMS'
export const viewClassificationItems = uri => ({
    type: SWITCH_VIEW_CLASSIFICATION_ITEMS,
    payload: {
      uri
    }
})
