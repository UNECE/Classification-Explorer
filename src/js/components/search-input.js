import React, { Component } from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { browserHistory } from 'react-router'
import { uriToLink } from '../router-mapping'
import { connect } from 'react-redux'

export default class SearchInput extends Component {
  
  constructor(props) {
    super(props)
    this.handleSubmit = () => 
      browserHistory.push(uriToLink.searchItems(this.refs.search.value))
  }
  
  render() {
    return (
      <span>
        Search everything :
        <input type="search" placeholder="Enter a keyword" ref="search" />
        <button onClick={this.handleSubmit}>
          OK
        </button>
      </span>
    )
  }
}

