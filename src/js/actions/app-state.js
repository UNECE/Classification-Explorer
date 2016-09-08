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

export const CHANGE_KEYWORD = 'CHANGE_KEYWORD'
export const changeKeyword = keyword => ({
    type: CHANGE_KEYWORD,
    payload: {
      keyword
    }
})

export const SHOW_LEVEL_ITEMS = 'SHOW_LEVEL_ITEMS'
export const showLevelItems = uri => ({
  type: SHOW_LEVEL_ITEMS,
  payload: {
    uri
  }
})

export const TOGGLE_CORRESPONDENCE_DEFINTIONS = 'TOGGLE_CORRESPONDENCE_DEFINTIONS'
export const toggleCorrespondenceDefinitions = correspondence => ({
  type: TOGGLE_CORRESPONDENCE_DEFINTIONS,
  payload: {
    correspondence
  }
})
