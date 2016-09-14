import React, { Component } from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { browserHistory, withRouter } from 'react-router'
import { uriToLink } from '../router-mapping'
import { connect } from 'react-redux'

class SearchInput extends Component {

  constructor(props) {
    super(props)
    this.state={
      keyword: this.props.keyword?this.props.keyword:''
    }
    this.handleSubmit = () => {
      browserHistory.push(uriToLink.searchItems(this.state.keyword, this.scope, encodeURIComponent(this.state.keyword + '||' + this.props.location.pathname)))
    }
    this.handleChange = (e) => {
      this.setState({keyword :  this.refs.search.value.trim()});
    }
    this.handleKeyPress = (e) => {
      if (e.key == 'Enter') {
        this.handleSubmit();
      }
    }
  }

  render() {
    this.scope= 'everything';
    if(this.props.location.pathname.startsWith('/classification/')){
      this.scope = 'classification'
    }
    if(this.props.location.pathname.startsWith('/correspondence/')){
      this.scope = 'correspondence'
    }
    return (
      <span>
        Search {this.scope} :
        <input type="search" placeholder="Enter a keyword" ref="search" onKeyPress={this.handleKeyPress} value={this.state.keyword} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>
          OK
        </button>
      </span>
    )
  }
}

export default withRouter(SearchInput)
