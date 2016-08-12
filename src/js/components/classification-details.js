
import React, { Component } from 'react'
import { loadClassificationItemsIfNeeded } from '../actions/classification'
import { connect } from 'react-redux'
import ClassificationItemList from './classification-item-list'
import ClassificationLevels from './classification-levels'




class ClassificationDetails extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  render() {
    return <div><ClassificationLevels></ClassificationLevels><ClassificationItemList uri={this.props.uri}/></div>
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationDetails)
