
import React, { Component } from 'react'
import { loadCorrespondences } from '../actions/correspondences'
import { viewCorrespondences } from '../actions/app-state'
import { connect } from 'react-redux'





class Correspondences extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadCorrespondences(this.props.classification)
  }

  render() {
    const { loaded, correspondences } = this.props
    if (!loaded) return <span>loading correspondences</span>
    return (
      <ul>
        {
          correspondences.map(correspondence =>
            <li key={correspondence.table}>
                {correspondence.label + correspondence.table }
            </li>
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = (state, { classification } ) => {
  if(!state.correspondencesByClassification.hasOwnProperty(classification)) return {
    loaded: false,
    correspondences: []
  }
  return {
    loaded: state.correspondencesByClassification[classification].loaded,
    correspondences: state.correspondencesByClassification[classification].correspondences
  }
}

const mapDispatchToProps = {
  loadCorrespondences
}

export default connect(mapStateToProps, mapDispatchToProps)(Correspondences)
