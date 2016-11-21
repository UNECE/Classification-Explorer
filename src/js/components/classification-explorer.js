import React from 'react'
import Menu from './menu'

export default function ClassificationExplorer({ children }) {
  return (
    <div className="container-fluid">
      <Menu />
      { children }
    </div>
  )
}
 