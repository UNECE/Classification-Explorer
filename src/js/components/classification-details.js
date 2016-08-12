
import React, { Component } from 'react'
import { loadItemsIfNeeded } from '../actions/items.js'
import { connect } from 'react-redux'
import Items from './items'
import Levels from './levels'

class ClassificationDetails extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <Levels />
        <Items uri={this.props.uri}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationDetails)
