import React from 'react';
import { sparqlConnect } from '../sparql/configure-sparql';
import { LOADED } from 'sparql-connect';
import { Link } from 'react-router';
import Loading from './loading.js';
import { uriToLink } from '../router-mapping';

function Classifications({ loaded, classifications }) {
  if (loaded !== LOADED)
    return <Loading from="Classification" plural={false} />;
  return (
    <div>
      <h1>Classifications</h1>
      <ul className="list-group">
        {classifications.map(({ classification, label }) => (
          <li key={classification} className="list-group-item">
            <Link to={uriToLink.classificationDetails(classification)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default sparqlConnect.classifications(Classifications);
