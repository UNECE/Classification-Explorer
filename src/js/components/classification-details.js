
import React, { Component } from 'react'
import { loadClassificationItemsIfNeeded } from '../actions/classification'
import { connect } from 'react-redux'
import ClassificationItemList from './classification-item-list'




class ClassificationDetails extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  render() {
    return <ClassificationItemList uri={this.props.uri}/>
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationDetails)
