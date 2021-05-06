import React from 'react';
import { sparqlConnect } from '../sparql/configure-sparql';
import { LOADING, FAILED } from 'sparql-connect';
import Loading from './loading.js';

function ItemCorrespondences({ loaded, items, item, classification }) {
  if (loaded === LOADING)
    return <Loading from="item correspondences" plural={true} />;
  if (loaded === FAILED)
    return <span>Failed loading correspondences for {item}</span>;

  return (
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Label</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ item, code, label }) => (
          <tr key={item}>
            <td>{code}</td>
            <td>{label}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default sparqlConnect.itemCorrespondences(ItemCorrespondences);
