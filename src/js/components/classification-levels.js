
import React, { Component } from 'react'
import { loadClassificationLevels } from '../actions/classification-levels'
import { viewClassificationLevels } from '../actions/app-state'
import { connect } from 'react-redux'




class ClassificationLevels extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadClassificationLevels()
  }

  render() {
    const { loaded, levels, activeLevelUri, viewClassificationItemsForLevel } = this.props
    if (!loaded) return <span>loading levels</span>
    return (
      <ul className="levels">
        {
          levels.map(level =>
            <li key={level} className>
              <a onClick={() => viewClassificationItemsForLevel(level)} href='#'>
                {level}
              </a>
            </li>
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  loaded: true,
  levels: [{uri: 'uridenaf2', name: 'naf2'}, {uri: 'uridenaf2', name: 'naf2'}],
  activeLevelUri: 'uridenaf2'
})

const mapDispatchToProps = {
  loadClassificationLevels,
  //viewClassificationItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationLevels)
