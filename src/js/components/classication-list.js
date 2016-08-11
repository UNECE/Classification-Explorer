
import React, { Component } from 'react'
import { loadClassificationList } from '../actions/classification-list'
import { connect } from 'react-redux'

class ClassificationList extends Component {

  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    this.props.loadClassificationList()
  }
  
  render() {
    const { loaded, regionList } = this.props
    if (!loaded) return <span>loading</span>
    return (
      <ul className="mon-selector">
        {
          regionList.map(region =>
              <li key={region}>
                <a onClick={() => viewClassification(region)}>
                {region}
              </a>
            </li>)
        }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  loaded: state.loaded,
  regionList: state.classifications
})

const mapDispatchToProps = {
  loadClassificationList
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationList)