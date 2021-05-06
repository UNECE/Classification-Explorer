import React from 'react';
import { sparqlConnect } from '../sparql/configure-sparql';
import { uriToLink, connectFromRoute } from '../router-mapping';
import { LOADING, FAILED } from 'sparql-connect';
import { Link } from 'react-router';
import { groupBy } from '../utils';
import ItemResult from './item-result';
import Loading from './loading';
import TreeView from 'react-treeview';

function SearchResults({ loaded, items, keyword, searchForCode, hash }) {
  if (loaded === LOADING)
    return <Loading from="search results" plural={true} />;
  if (loaded === FAILED)
    return <span>Failed loading results for {keyword}</span>;

  if (items.length === 0)
    return <span>There are no results for {keyword}</span>;

  const clns = groupBy(items, 'classification', 'classificationLabel');

  return (
    <ul className="list-group">
      {Object.keys(clns).reduce((agregate, clnId) => {
        const cln = clns[clnId];
        const clnEntries = cln.entries;
        const clnEl = (
          <li key={clnId} className="list-group-item">
            <TreeView
              key={cln.props.classificationLabel}
              nodeLabel={
                <Link to={uriToLink.classificationDetails(clnId)}>
                  {cln.props.classificationLabel}
                </Link>
              }
            >
              <ul>
                {clnEntries.map((rslt, i) => (
                  //no obvious meaning ful key, so we use an index
                  <li key={i}>
                    <ItemResult {...rslt} />
                  </li>
                ))}
              </ul>
            </TreeView>
          </li>
        );
        agregate.push(clnEl);

        return agregate;
      }, [])}
    </ul>
  );
}

export default connectFromRoute(sparqlConnect.searchItems(SearchResults));
