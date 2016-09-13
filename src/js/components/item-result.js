import React from 'react'
import { Link } from 'react-router'
import { uriToLink } from '../router-mapping'

export default function ItemResult({ item, itemLabel, predicate, match, code }) {
  return (
    <Link to={uriToLink.itemDetails(item)}>
    {code}  -  { itemLabel }
    </Link>
  )
}
