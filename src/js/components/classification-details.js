
import React, { Component } from 'react'
import { loadItemsIfNeeded } from '../actions/items.js'
import { connect } from 'react-redux'
import Items from './items'
import Levels from './levels'
import { loadClassificationDetails } from '../actions/classification-details'

class ClassificationDetails extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
      this.props.loadClassificationDetails();
  }

  render() {
    return (
      <div>
        (!this.props.loaded) ? 'Pas de detail' : <span>Toto {this.props.details.length}</span>;
        <Levels uri={this.props.uri}/>
        <Items uri={this.props.uri}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loaded: state.classifications.loaded,
  details: state.classifications.details
})

const mapDispatchToProps = {
  loadClassificationDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationDetails)
