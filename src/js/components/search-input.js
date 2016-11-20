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
    this.handleKeyDown = e => {
      if (e.keyCode === 13) this.handleSubmit()
    }
  }

  render() {
    return (
      <span>
        Search everything :
        <input className="search" type="search" placeholder="Enter a keyword"
               ref="search" onKeyDown={this.handleKeyDown} />
        <button onClick={this.handleSubmit}>
          OK
        </button>
        <label><input type="checkbox" ref="searchForCode"/>Search for codes only</label>
      </span>
    )
  }
}
