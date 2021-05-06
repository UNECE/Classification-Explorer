import React from 'react';
import { sparqlConnect } from '../sparql/configure-sparql';
import { LOADED } from 'sparql-connect';
import Loading from './loading.js';
import Items from './items';
import Export from './export.js';

function LevelItems({ loaded, items, levelLabel }) {
  if (loaded !== LOADED) return <Loading from="items" plural={true} />;
  return (
    <div>
      <h2>
        Items for {levelLabel}{' '}
        <Export dataToExport={items} name={`Items for ${levelLabel}`} />
      </h2>
      <Items items={items} />
    </div>
  );
}

export default sparqlConnect.levelItems(LevelItems);
