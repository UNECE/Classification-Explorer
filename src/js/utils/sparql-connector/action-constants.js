const camelCaseRegExp = /([a-z])([A-Z])/g

const creatorSuffixFromName = queryName =>
  queryName.replace(camelCaseRegExp, '$1_$2').toUpperCase()
  
export const buildActionConstants = queryName => {
  const actionCreatorSuffix = creatorSuffixFromName(queryName)
  return {
    LOAD_ACTION: `LOAD_${actionCreatorSuffix}`,
    LOAD_SUCCESS_ACTION: `LOAD_${actionCreatorSuffix}_SUCCESS`,
    LOAD_FAILURE_ACTION: `LOAD_${actionCreatorSuffix}_FAILURE`
  }
}