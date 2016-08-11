
import React, { Component } from 'react'
import { loadClassificationItemsIfNeeded } from '../actions/classification'
import { connect } from 'react-redux'




class ClassificationItems extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadClassificationItemsIfNeeded()
  }

  render() {
    const { loaded, items } = this.props
    if (!loaded) return <span>loading</span>
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
  if (!state.classificationItems.hasOwnProperty(uri)) return {
    loaded: false,
    items: []
  }
  const items = state.classificationItems[uri]
  return {
    loaded: items.loaded,
    items: items.items
  }
}

const mapDispatchToProps = {
  loadClassificationItemsIfNeeded
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationItems)
