import React from 'react';
import SearchInput from './search-input';
import { Link } from 'react-router';
import img from '../../img/unece.png';
import { getEnvVar } from '../env';

export default function Menu() {
  const deployMsg = getEnvVar('DEPLOY_MESSAGE');
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={img} alt="unece-logo" />
            Classifications
          </Link>
        </div>
        {deployMsg && <i className="my-2 my-lg-0">{deployMsg}</i>}
        <div className="collapse navbar-collapse">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
}
