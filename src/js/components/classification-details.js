
import React, { Component } from 'react'
import { loadItemsIfNeeded } from '../actions/items.js'
import { connect } from 'react-redux'
import Items from './items'
import Levels from './levels'
import Correspondences from './Correspondences'

class ClassificationDetails extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <Correspondences uri={this.props.uri}/>
        <Levels uri={this.props.uri}/>
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
