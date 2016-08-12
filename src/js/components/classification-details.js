
import React, { Component } from 'react'
import { loadItemsIfNeeded } from '../actions/items.js'
import { connect } from 'react-redux'
import Correspondences from './correspondences'
import Items from './items'
import Levels from './levels'
import { loadClassificationDetails } from '../actions/classification-details'

class ClassificationDetails extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
      this.props.loadClassificationDetails(this.props.uri);
  }

  render() {
    return (
      <div>
        {!this.props.loaded ? 'Pas de detail' : <span>{this.props.details.label}</span>}
        <Correspondences classification={this.props.uri}/>
        <Levels uri={this.props.uri}/>
        <Items uri={this.props.uri}/>
      </div>
    )
  }
}

const mapStateToProps = (state, {uri} ) => {
  if(!state.classificationDetails.hasOwnProperty(uri)) return {
    loaded: false, details: []
  }
  return {
    loaded: state.classificationDetails[uri].loaded,
    details: state.classificationDetails[uri].details
  }
}

const mapDispatchToProps = {
  loadClassificationDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationDetails)
