import React from 'react'
import { Link } from 'react-router'
import { uriToLink } from '../router-mapping'

export default function Items({ items }) {
  return (
    <ul>
      {items.map(({ item, code, label}) => 
        <li key={item}>
          <Link to={uriToLink.itemDetails(item)}>
            {label}
          </Link>
        </li>
      )}
    </ul>
  )
}
