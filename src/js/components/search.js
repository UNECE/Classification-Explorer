import React from 'react'
import { connect} from 'react-redux'
import { changeKeyword } from '../actions/app-state'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import SearchInput from './search-input'
import SearchResults from './search-results'

function Search({ keyword, changeKeyword }) {
  return (
    <div>
        <SearchInput keyword={keyword} changeKeyword={changeKeyword}/>
        <br/>
        <SearchResults keyword={keyword} />
    </div>
  )
}

const mapStateToProps = state => ({
  keyword: state.appState.keyword
})

const mapDispatchToProps = {
  changeKeyword
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
