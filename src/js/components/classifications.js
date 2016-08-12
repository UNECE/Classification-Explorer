
import React, { Component } from 'react'
import { loadClassifications } from '../actions/classifications'
import { switchViewClassificationDetails } from '../actions/app-state'
import { connect } from 'react-redux'

class Classifications extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadClassifications()
  }

  render() {
    const { loaded, classifications, switchViewClassificationDetails } = this.props
    if (!loaded) return <span>loading</span>
    return (
      <ul>
        {
          classifications.map(classification =>
            <li key={classification}>
              <a onClick={() => switchViewClassificationDetails(classification)} href='#'>
                {classification}
              </a>
            </li>
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  loaded: state.classifications.loaded,
  classifications: state.classifications.classifications
})

const mapDispatchToProps = {
  loadClassifications,
  switchViewClassificationDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Classifications)
