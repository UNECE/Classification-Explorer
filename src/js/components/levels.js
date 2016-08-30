import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import Items from './items'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { LOADING, LOADED, FAILED } from 'sparql-connect'

function Levels({ loaded, levels }) {
  if (loaded !== LOADED) return <span>loading levels</span>
  return (
    <div>
      <h1>Levels</h1>
      <Tabs>
        <TabList>
          { levels.map(({ level, depth, label }) =>
            <Tab key={level}>{ `${label} (${depth})` }</Tab>) }
        </TabList>
        { levels.map(({ level, label }) =>
          <TabPanel key={level}>
            <Items level={level} levelLabel={label} />
          </TabPanel>) }
      </Tabs>
    </div>
  )
}

export default sparqlConnect.classificationLevels(Levels)
