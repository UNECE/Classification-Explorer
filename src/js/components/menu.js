import React from 'react';
import SearchInput from './search-input';
import { Link } from 'react-router';
import img from '../../img/unece.png';

export default function Menu() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={img} alt="unece-logo" />
            Classifications
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
}
