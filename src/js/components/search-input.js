import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'

export default function SearchInput({ keyword, changeKeyword }) {
  return (
    <div>
      Search everything :
      <input type="search" placeholder="Enter a keyword"
             name="search_input"
             value={keyword}
             onChange={e => changeKeyword(e.target.value)}></input>
    </div>
  )
}
