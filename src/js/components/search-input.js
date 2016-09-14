import React, { Component } from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { browserHistory } from 'react-router'
import { uriToLink } from '../router-mapping'
import { connect } from 'react-redux'

export default class SearchInput extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = () => {
      browserHistory.push(uriToLink.searchItems(this.refs.search.value.trim(), this.refs.searchForCode.checked))
    }
    this.handleKeyPress = (e) => {
      if (e.key == 'Enter') {
        this.handleSubmit();
      }
    }
  }

  render() {
    return (
      <span>
        Search everything :
        <input type="search" placeholder="Enter a keyword" ref="search" onKeyPress={this.handleKeyPress} />
        <button className="fa fa-search" onClick={this.handleSubmit}>
        </button>
        <label><input type="checkbox" ref="searchForCode"/>Search for codes only</label>
      </span>
    )
  }
}
