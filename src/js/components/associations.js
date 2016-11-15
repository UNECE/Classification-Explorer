import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connect } from 'react-redux'
import Loading from './loading.js'
import ClassificationItem from './classification-item'

function Associations({ loaded, associations,
    sourceClassification, targetClassification }) {
  if (loaded !== LOADED) return  <Loading from="Associations" plural={true} />
  return (
    <div>
      Correspondences:
      <table className="table">
        <thead>
          <tr>
            <th>source</th>
            <th>target</th>
            <th>comment</th>
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          { associations.map(({
            association, source, target, comment,
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
            <td>
              { comment }
            </td>
            <td>
              <button className="btn btn-xs" disabled
                  title="Details will be added later (explanatory notes, coverage,
                    information about associations involving multiple sources
                    or targets)">
                <i className="fa fa-home fa-info"></i>
              </button>
            </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default sparqlConnect.correspondenceAssociations(Associations)
