import React from 'react';
import { sparqlConnect } from '../sparql/configure-sparql';
import { LOADED } from 'sparql-connect';
import Loading from './loading';
import { Link } from 'react-router';
import { uriToLink } from '../router-mapping';

function Correspondences({ loaded, correspondences }) {
  if (loaded !== LOADED) {
    return <Loading from="correspondences" plural={true} />;
  } else if (correspondences === null || correspondences.length === 0) {
    return <div></div>;
  } else {
    return (
      <div>
        <ul>
          {correspondences.map(({ table, code, definition }) => (
            <li key={table}>
              <Link to={uriToLink.correspondenceDetails(table)}>
                {definition}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default sparqlConnect.classificationCorrespondences(Correspondences);
