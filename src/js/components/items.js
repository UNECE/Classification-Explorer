import React from 'react'
import { Link } from 'react-router'
import { uriToLink } from '../router-mapping'

export default function Items({ items }) {
  return (
      <ul className="list-group">
        {items.map(({ item, code, label}) =>
        <li className="list-group-item" key={item}>
          <Link to={uriToLink.itemDetails(item)}>
            {code} -
            {label}
          </Link>
        </li>
      )}
    </ul>
)
}
