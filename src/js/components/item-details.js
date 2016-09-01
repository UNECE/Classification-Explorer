import React from 'react'
import { connectFromRoute } from '../router-mapping'
export default connectFromRoute(function ({ item }) {
  return (
    <div>
      <div>Item: {item}</div>
    </div>
  )
})