import React from 'react';
import { sparqlConnect } from '../sparql/configure-sparql';
import { Link } from 'react-router';
import { LOADED } from 'sparql-connect';
import { connectFromRoute, uriToLink } from '../router-mapping';
import Loading from './loading.js';
import Associations from './associations';

function CorrespondenceDetails({
  loaded,
  source,
  sourceCode,
  sourceLabel,
  target,
  targetCode,
  targetLabel,
  correspondence,
}) {
  if (loaded !== LOADED)
    return <Loading from="Correspondence details" plural={true} />;

  return (
    <div>
      Correspondence table between:
      <ul>
        <li>
          (source){' '}
          <Link to={uriToLink.classificationDetails(source)}>
            {sourceCode} - {sourceLabel}
          </Link>
        </li>
        <li>
          (target){' '}
          <Link to={uriToLink.classificationDetails(target)}>
            {targetCode} - {targetLabel}
          </Link>
        </li>
      </ul>
      <Associations correspondence={correspondence} />
    </div>
  );
}

export default connectFromRoute(
  sparqlConnect.correspondenceDetails(CorrespondenceDetails)
);
