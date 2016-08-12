
import React, { Component } from 'react'
import { loadItemsIfNeeded } from '../actions/items'
import { connect } from 'react-redux'

class Items extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadItemsIfNeeded(this.props.uri)
  }

  render() {
    const { loaded, items } = this.props
    if (!loaded) return <span>loading items</span>
    return (
      <ul>
        {
          items.map(item =>
            <li key={item}>
                {item}
            </li>
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = (state, { uri }) => {
  if (!state.itemsByClassification.hasOwnProperty(uri)) return {
    loaded: false,
    items: []
  }
  const items = state.itemsByClassification[uri]
  return {
    loaded: items.loaded,
    items: items.items
  }
}

const mapDispatchToProps = {
  loadItemsIfNeeded
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
