import React from 'react'
import { Link } from 'react-router'
import { uriToLink } from '../router-mapping'
import Export from './export.js'

export default function Items({ items }) {
  return (
    <div>
    <Export dataToExport={items} name="export" />
    <ul>
      {items.map(({ item, code, label}) =>
        <li key={item}>
          <Link to={uriToLink.itemDetails(item)}>
            {code} -
            {label}
          </Link>
        </li>
      )}
    </ul>
    </div>
  )
}
