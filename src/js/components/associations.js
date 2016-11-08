import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connect } from 'react-redux'
import Loading from './loading.js'
import ClassificationItem from './classification-item'

function Associations({ loaded, associations,
    sourceClassification, targetClassification }) {
  if (loaded !== LOADED) return  <Loading from="Association" plural={false} />
  return (
    <div>
      Correspondences:
      <table className="table">
        <thead>
          <tr>
            <th>source</th>
            <th>target</th>
          </tr>
        </thead>
        <tbody>
          { associations.map(({
            association, source, target,
            sourceCode, sourceLabel,
            targetCode, targetLabel }) =>
            <tr key={association}>
            <td>
            <ClassificationItem
              item={source} code={sourceCode} label={sourceLabel} />
            </td>
            <td>
            <ClassificationItem
              item={target} code={targetCode} label={targetLabel} />
            </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default sparqlConnect.correspondenceAssociations(Associations)
