
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
            <li key={level.uri}>
              <a onClick={() => viewClassificationItemsForLevel(level)} href='#'>
                {level.name}
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
  levels: [{uri: 'uridenaf1', name: 'naf1'}, {uri: 'uridenaf2', name: 'naf2-test'}],
  activeLevelUri: 'uridenaf2'
})

const mapDispatchToProps = {
  loadClassificationLevels,
  //viewClassificationItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationLevels)
