import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { Link } from 'react-router'
import { uriToLink } from '../router-mapping'
import { connect } from 'react-redux'
import { changeKeyword } from '../actions/app-state'

function SearchInput({ keyword, changeKeyword }) {
  return (
    <span>
      Search everything :
      <input type="search" placeholder="Enter a keyword"
             name="search_input"
             value={keyword}
             onChange={e => changeKeyword(e.target.value)} />
      <Link to={uriToLink.searchItems(keyword)}>Search</Link>
    </span>
  )
}

const mapStateToProps = state => ({ keyword: state.appState.keyword })
export default connect(mapStateToProps, { changeKeyword })(SearchInput)
