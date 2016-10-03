import React from 'react'
import SearchInput from './search-input'
import { Link } from 'react-router'

export default function Menu() {
    return (
      <header>
        <Link to="/"><i className="fa fa-home fa-5"></i></Link>
        <SearchInput />
      </header>
    )
}
