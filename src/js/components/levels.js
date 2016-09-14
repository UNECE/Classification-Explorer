import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import LevelItems from './level-items'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import Loading from './loading'

function Levels({ loaded, levels }) {
  if (loaded !== LOADED) return <Loading from="Levels" plural={true}/>
  return (
    <div>
      <Tabs>
        <TabList>
          { levels.map(({ level, depth, label }) =>
            <Tab key={level}>{ `${label} (${depth})` }</Tab>) }
        </TabList>
        { levels.map(({ level, label }) =>
          <TabPanel key={level}>
            <LevelItems level={level} levelLabel={label} />
          </TabPanel>) }
      </Tabs>
    </div>
  )
}

export default sparqlConnect.classificationLevels(Levels)
