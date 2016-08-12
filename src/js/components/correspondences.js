
import React, { Component } from 'react'
import { loadCorrespondences } from '../actions/correspondences'
import { viewCorrespondences } from '../actions/app-state'
import { connect } from 'react-redux'





class Correspondences extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadCorrespondences()
  }

  render() {
    const { loaded, correspondences, viewCorrespondences } = this.props
    if (!loaded) return <span>loading correspondences</span>
    return (
      <ul>
        {
          correspondences.map(correspondence =>
            <li key={correspondence}>
                {correspondence}
            </li>
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  loaded: false,
  correspondences: ['uri de NAF2 vers NACE']
})

const mapDispatchToProps = {
  loadCorrespondences,
  //viewClassificationItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Correspondences)
