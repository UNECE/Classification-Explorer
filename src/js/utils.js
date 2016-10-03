export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const takeProps = (entry, props) =>
  props.reduce((filteredEntry, prop) => {
    filteredEntry[prop] = entry[prop]
    return filteredEntry
  }, {})
  
const leaveProps = (entry, ...remove) =>
  Object.keys(entry).reduce((filteredEntry, prop) => {
    if (remove.indexOf(prop) === -1) filteredEntry[prop] = entry[prop]
    return filteredEntry
  }, {})
  
export function groupBy(results, key, ...props) {
  // no order for now
  return results.reduce((groups, entry) => {
    const keyValue = entry[key]
    if (!groups.hasOwnProperty(keyValue)) groups[keyValue] = {
      props: takeProps(entry, props),
      entries: []
    }
    groups[keyValue].entries.push(leaveProps(entry, key, ...props))
    return groups
  }, {})
}