export function getEntry(state, paramsDescr, props) {
  switch (paramsDescr.length) {
    case 0:
      return state
    case 1:
      return state[props[paramsDescr[0].name]]
    default:
      //TODO not implemented yet
      throw new Error('multiple parameters not implemented yet')
  }
}

export function pointToStateEntry(paramsDescr, hndlrsMapping) {
  switch (paramsDescr.length) {
    case 0:
      return Object.keys(hndlrsMapping).reduce((builtMapping, actionType) => {
        const hndlr = hndlrsMapping[actionType]
        builtMapping[actionType] = hndlr
        return builtMapping
      }, {})
    case 1:
      return Object.keys(hndlrsMapping).reduce((builtMapping, actionType) => {
        const paramName = paramsDescr[0].name
        const hndlr = hndlrsMapping[actionType]
        builtMapping[actionType] = function (state, payload) {
          const id = payload.params[paramName]
          const stateEntry = state[id]
          return {
            ...state,
            [id]: hndlr(stateEntry, payload)
          }
        }
        return builtMapping
      }, {})
    default:
      return Object.keys(hndlrsMapping).reduce((builtMapping, actionType) => {
        const paramName = paramsDescr[0].name
        const hndlr = hndlrsMapping[actionType]
        // TODO implemnt
        builtMapping[actionType] = function (state, payload) {
          const id = payload.params[paramName]
          const stateEntry = state[id]
          return {
            ...state,
            [id]: hndlr(stateEntry, payload)
          }          
        }
        return builtMapping
      }, {})
  }
}