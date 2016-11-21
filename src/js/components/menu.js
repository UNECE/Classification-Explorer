import React from 'react'
import SearchInput from './search-input'
import { Link } from 'react-router'


export default function Menu() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img className="logo" src="/img/unece.png" />
              Classifications
            </Link>
          </div>
          <div className="collapse navbar-collapse">    
            <SearchInput />
          </div>
        </div>
      </nav>
    )
}
