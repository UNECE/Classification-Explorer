
import React, { Component } from 'react'
import { loadClassificationList } from '../actions/classification-list'
import { viewClassificationItems } from '../actions/app-state'
import { connect } from 'react-redux'




class ClassificationList extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadClassificationList()
  }

  render() {
    const { loaded, regionList, viewClassificationItems } = this.props
    if (!loaded) return <span>loading</span>
    return (
      <ul className="mon-selector">
        {
          regionList.map(region =>
            <li key={region}>
              <a onClick={() => viewClassificationItems(region)} href='#'>
                {region}
              </a>
            </li>
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  loaded: state.classificationList.loaded,
  regionList: state.classificationList.classifications
})

const mapDispatchToProps = {
  loadClassificationList,
  viewClassificationItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationList)
