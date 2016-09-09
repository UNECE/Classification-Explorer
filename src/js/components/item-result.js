import React from 'react'

export default function ItemResult({ item, predicate, match }) {
  return (
    <span>`${item} - ${predicate} - ${match}`</span>
  )
}