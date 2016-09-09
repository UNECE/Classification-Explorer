import React from 'react'
import Menu from './menu'

export default function ClassificationExplorer({ children }) {
  return (
    <div>
      <Menu />
      <div className="container">
        { children }
      </div>
    </div>
  )
}
 