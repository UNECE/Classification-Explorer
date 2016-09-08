import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'

export default function SearchInput({ keyword, changeKeyword }) {
  return (
    <input type="search" placeholder="Enter a keyword" name="search_input" onChange={e => changeKeyword(e.target.value)}></input>
  )
}
